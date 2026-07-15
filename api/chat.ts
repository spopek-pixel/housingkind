import type { VercelRequest, VercelResponse } from '@vercel/node'
import OpenAI from 'openai'
import { mythsAndFacts } from '../src/data/myths'
import { glossary } from '../src/data/glossary'
import { faqs } from '../src/data/faq'
import { projectsSummary } from '../src/data/projectsSummary'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

const MAX_MESSAGES = 20
const MAX_MESSAGE_LENGTH = 2000

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
