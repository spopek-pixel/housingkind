import type { VercelRequest, VercelResponse } from '@vercel/node'
import OpenAI from 'openai'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 2000

// Duplicated (not imported) from src/data/*.ts on purpose: Vercel's serverless
// function bundler for this (non-Next.js) Vite project doesn't reliably trace
// relative imports that reach outside the api/ directory, which caused
// ERR_MODULE_NOT_FOUND at runtime. Keeping this self-contained avoids that
// entirely. If the site copy changes, mirror the change here too.

const mythsAndFacts = [
  {
    myth: 'Affordable housing next door will lower my property value.',
    fact: 'Most peer-reviewed studies of well-designed, well-managed affordable and missing-middle housing find no consistent negative effect on nearby property values, and some show modest increases tied to added foot traffic and reinvestment nearby.',
  },
  {
    myth: 'A fourplex or townhome row will overwhelm the street with cars.',
    fact: 'Missing-middle housing typically adds fewer vehicle trips per unit than single-family homes, since residents are more likely to be smaller households, renters without a second car, or people who work nearby. Most projects also include on-site parking sized to realistic demand.',
  },
  {
    myth: 'New housing will look completely out of place and ruin the character of the street.',
    fact: 'Gentle density is defined by matching the height, setback, and materials of the surrounding block. A duplex or fourplex built to these standards is designed to be nearly indistinguishable from a single-family home at a glance.',
  },
  {
    myth: 'Affordable housing residents are transient and disconnected from the community.',
    fact: 'Housing stability is one of the biggest predictors of long-term residency. Many affordable and missing-middle developments house long-time neighbors, aging parents, essential workers, and young families trying to stay in the community they grew up in.',
  },
  {
    myth: "There's no way to have input once a project like this is proposed.",
    fact: 'Most cities require public comment periods, planning commission hearings, and design review before a project is approved. Housingkind exists to make that input more informed, not to skip the process.',
  },
  {
    myth: 'Density always means big apartment towers.',
    fact: "Missing middle housing sits between single-family homes and large apartment buildings: duplexes, fourplexes, townhomes, and accessory dwelling units, typically 1 to 3 stories, sized to match the block they're on.",
  },
]

const glossary = [
  { term: 'Missing Middle Housing', def: 'A range of house-scale buildings with multiple units — duplexes, fourplexes, townhomes, cottage courts — compatible in scale with single-family homes.' },
  { term: 'ADU (Accessory Dwelling Unit)', def: 'A smaller, secondary home built on the same lot as a single-family house, often above a garage or in a backyard.' },
  { term: 'Zoning', def: 'Local rules that determine what can be built where, including building height, use, and the number of homes allowed on a lot.' },
  { term: 'Upzoning', def: 'A change to zoning rules that allows more homes, height, or density than was previously permitted on a property.' },
  { term: 'Area Median Income (AMI)', def: 'An income benchmark for a region, used to determine eligibility for income-restricted affordable housing units.' },
  { term: 'Setback', def: 'The required distance between a building and the property line, lot boundary, or street.' },
  { term: 'Density', def: 'The number of homes or people per unit of land area, often expressed as units per acre.' },
  { term: 'Inclusionary Zoning', def: 'A policy requiring or incentivizing developers to include a percentage of income-restricted affordable units in new residential projects.' },
]

const faqs = [
  {
    question: 'What does Housingkind actually do?',
    answer: 'Housingkind helps residents, developers, and local officials see and understand proposed housing before it is built. We create neighborhood-scale visualizations, collect first-person stories from people living near completed projects, and publish plain-language explanations of housing terms and process.',
  },
  {
    question: 'Is Housingkind for or against new development?',
    answer: "Neither. We're not here to convince anyone that density is the answer, and we're not a marketing arm for developers. We're here to make sure people understand what's actually being proposed before they decide how they feel about it.",
  },
  {
    question: 'What is "gentle density" or "missing middle" housing?',
    answer: 'These terms describe small-scale housing types — duplexes, fourplexes, townhomes, and accessory dwelling units (ADUs) — that are similar in height and footprint to single-family homes but add more housing options within the same neighborhood.',
  },
  {
    question: 'How accurate are the visualizations?',
    answer: "Our visualizations are built from real site dimensions, surrounding building heights, and street context supplied by the partnering developer or planning department. They're reviewed for accuracy before publication, though final built projects may vary slightly from renderings.",
  },
  {
    question: "Can I use Housingkind's visualization tool for my own street?",
    answer: 'Yes. The "Visualize Your Street" tool lets anyone experiment with different housing types in different street contexts. It is a simplified exploration tool; for a detailed visualization of a specific proposed project, see our partnership services for developers.',
  },
  {
    question: 'How do I share feedback about a specific project near me?',
    answer: 'Each project listed in Explore Developments includes information about its public comment period and local planning contact when available. You can also reach out through our Contact page and we will help point you in the right direction.',
  },
]

const projectsSummary = [
  { name: 'Oak Street Fourplex', city: 'Portland, OR', status: 'Completed', housingType: 'Fourplex', units: '4 units', description: 'A gentle fourplex that replaced a single aging house, matching the roofline height and setback of neighboring houses. Two units are reserved for households earning below the area median income.' },
  { name: 'Maple Avenue Mixed-Use', city: 'Seattle, WA', status: 'In Progress', housingType: 'Mixed-Use', units: '8 units', description: 'Ground-floor retail with residential units above, bringing small shopfronts back to a corridor that lost its commercial base decades ago.' },
  { name: 'Elm Street Townhomes', city: 'Austin, TX', status: 'Completed', housingType: 'Townhomes', units: '5 units', description: 'Five townhomes with individual front doors, using materials chosen to match (not mimic) the houses on either side.' },
  { name: 'Cedar Lane Duplex', city: 'Denver, CO', status: 'Completed', housingType: 'Duplex', units: '2 units', description: 'A side-by-side duplex that reads as one house from the street, letting a long-time resident downsize into one unit while renting the other.' },
  { name: 'Birch Court ADUs', city: 'San Diego, CA', status: 'Completed', housingType: 'ADU', units: '3 units', description: 'Three backyard accessory dwelling units that added housing capacity without changing a single sightline from the street.' },
  { name: 'Pine Street Courtyard Homes', city: 'Minneapolis, MN', status: 'In Progress', housingType: 'Fourplex', units: '4 units', description: 'Four homes arranged around a shared courtyard, giving each household a private entry and a shared green space.' },
]

function buildSystemPrompt(): string {
  const mythsBlock = mythsAndFacts
    .map((m) => `- Myth: "${m.myth}" / Fact: ${m.fact}`)
    .join('\n')
  const glossaryBlock = glossary.map((g) => `- ${g.term}: ${g.def}`).join('\n')
  const faqBlock = faqs.map((f) => `- Q: ${f.question}\n  A: ${f.answer}`).join('\n')
  const projectsBlock = projectsSummary
    .map((p) => `- ${p.name} (${p.city}, ${p.status}, ${p.housingType}, ${p.units}): ${p.description}`)
    .join('\n')

  return `You are Harbor, the friendly assistant embedded on the Housingkind website. If asked
your name, say Harbor.

Housingkind helps communities understand affordable and missing-middle ("gentle density")
housing through education, transparency, and visualizations. Its core insight: "people fear
what they cannot see." The site is not pro- or anti-development — it exists to help people
understand what's actually being proposed before they form an opinion.

Answer questions about affordable housing, gentle density, housing terminology, the projects
below, and how to navigate the site. Keep answers concise (2-4 sentences unless asked for more
detail), warm, and neutral in tone — never advocate for or against specific developments.
If asked something unrelated to housing or this site, gently redirect to what you can help with.

MYTHS VS. FACTS:
${mythsBlock}

GLOSSARY:
${glossaryBlock}

FAQ:
${faqBlock}

FEATURED PROJECTS:
${projectsBlock}

SITE PAGES: Home (/), Explore (/explore, browse projects), Stories (/stories, neighbor
interviews), Visualize Your Street (/visualize-your-street, interactive tool), About (/about),
Learn the Basics (/learn), Myths vs. Facts (/myths-vs-facts), Resources & Glossary (/resources),
FAQ (/faq), For Developers (/for-developers), Contact (/contact).`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const endpoint = process.env.AZURE_AI_ENDPOINT
  const apiKey = process.env.AZURE_AI_API_KEY
  const deployment = process.env.AZURE_AI_DEPLOYMENT || 'model-router'

  if (!endpoint || !apiKey) {
    res.status(500).json({ error: 'Chat is not configured on the server yet.' })
    return
  }

  const incoming = req.body?.messages
  if (!Array.isArray(incoming) || incoming.length === 0) {
    res.status(400).json({ error: 'Expected a non-empty "messages" array.' })
    return
  }

  const messages: ChatMessage[] = incoming
    .slice(-MAX_MESSAGES)
    .filter(
      (m: unknown): m is ChatMessage =>
        !!m &&
        typeof m === 'object' &&
        ((m as ChatMessage).role === 'user' || (m as ChatMessage).role === 'assistant') &&
        typeof (m as ChatMessage).content === 'string'
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }))

  if (messages.length === 0) {
    res.status(400).json({ error: 'No valid messages provided.' })
    return
  }

  try {
    const client = new OpenAI({ baseURL: endpoint, apiKey })
    const completion = await client.chat.completions.create({
      model: deployment,
      messages: [{ role: 'system', content: buildSystemPrompt() }, ...messages],
      temperature: 0.5,
      max_tokens: 500,
    })

    const reply = completion.choices[0]?.message?.content?.trim()
    if (!reply) {
      res.status(502).json({ error: 'No response from the assistant. Try again.' })
      return
    }

    res.status(200).json({ reply })
  } catch (err) {
    console.error('Azure AI chat error:', err)
    res.status(502).json({ error: 'The assistant is having trouble responding right now. Try again shortly.' })
  }
}
