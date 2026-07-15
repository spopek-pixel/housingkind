# Housingkind

A graduate capstone web app that helps communities understand affordable and missing-middle
housing through plain-language education, myth-busting, real project visualizations, and
first-person neighbor stories.

## Running it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production: `npm run build` (outputs to `dist/`). `npm run preview` serves that build locally.

## A note on the source material

The files you uploaded were high-fidelity page mockups (Home, About, Explore, Stories, Visualize
Your Street, For Developers) plus a set of photos and illustrations used in those mockups — not
research documents, personas, or journey maps. I used the mockups as the primary source of truth
for content, tone, and information architecture, and used the loose photos/illustrations as real
image assets in the app (see `src/assets/images`). I extended that foundation with the additional
pages your brief asked for that weren't in the mockups: **Learn About Affordable Housing**, **Myths
vs. Facts**, **Resources & Glossary**, **FAQ**, and **Contact**. If you do have the actual
persona/journey-map research files, send them over and I'll revise the IA and copy against them
directly.

## Information architecture

```
/                        Home — the "hero thesis": people fear what they can't see
/learn                    Learn About Affordable Housing — housing types, approval process, terminology
/myths-vs-facts           Myths vs. Facts — filterable, evidence-based rebuttals to common objections
/explore                  Explore Developments — filterable directory of real/example projects
/explore/:slug            Individual project detail + a related neighbor story
/stories                  Neighbor Stories — first-person accounts
/visualize-your-street     Visualize Your Street — interactive housing-type + street-context explorer
/for-developers           Partner-facing page: process, pricing tiers, inquiry form
/resources                Glossary + external resources
/faq                      FAQ accordion
/contact                  Contact form
```

**Why this order in the nav:** research on housing opposition (and the mockups' own "perception
gap" framing) points to the same pattern — objections are driven by not understanding what's being
proposed. So the primary nav leads with **Learn**, then **Myths vs. Facts** (defuse the most common
objections immediately), then **Explore** and **Stories** (concrete evidence), then **Visualize**
(let people test it themselves). "About" and "For Developers" sit later because they describe
Housingkind itself rather than helping a first-time visitor understand housing.

## Design decisions

- **Type:** Fraunces (a warm, slightly quirky serif with personality) for headlines paired with
  Inter for body text and UI. This keeps the "government information site" register grounded and
  legible while avoiding a cold, purely institutional feel — matching the "modern, welcoming,
  trustworthy" brief.
- **Color:** A deep indigo-blue ("harbor") as the primary/trust color, a warm clay-orange as the
  accent for calls to action and emphasis, and a muted sage green as a tertiary accent for
  "positive outcome" moments (facts, completed projects). This mirrors the blue/orange pairing in
  your mockups while giving it a slightly more refined, less saturated palette.
- **Layout:** Generous whitespace, rounded cards, and a consistent `container-page` max-width —
  close to the Airbnb/Apple/gov-site blend you described.
- **Signature element:** The Myths vs. Facts split-card (myth on the left, fact highlighted on the
  right in a tinted panel) is the one component built specifically for this brief's core insight —
  every other component is a fairly standard, reusable pattern.

## Accessibility

- Skip-to-content link, visible focus rings (`:focus-visible`), semantic headings, `aria-expanded`/
  `aria-controls` on the FAQ accordion and mobile nav, `role="radiogroup"` on the visualization
  tool's selectable cards, `aria-live` on the filtered project count, and `prefers-reduced-motion`
  support in `index.css`.
- All interactive elements are reachable and operable by keyboard; images use descriptive `alt`
  text (decorative images use empty `alt`).
- Run `npm run lint` — `eslint-plugin-jsx-a11y` is wired in to catch regressions as the app grows.

## Architecture

```
src/
  assets/images/       Photos & illustrations sourced from your mockups
  components/
    layout/             Header, Footer, Layout (wraps every route, handles scroll-to-top)
    ui/                 Button, Badge, Arrow, SectionHeading, Accordion — generic, reusable primitives
    sections/           ProjectCard, StoryCard, StatCard, StepCard, MythFactCard — content-shaped components
  data/                 projects.ts, stories.ts, myths.ts, faq.ts, glossary.ts — all page content as typed data
  hooks/                useScrollToTop
  pages/                One component per route, composed from the pieces above
  App.tsx               Route table
  main.tsx              React root + BrowserRouter
```

Content lives in `src/data/*.ts` as typed arrays, not hardcoded inside pages. That's the main lever
for the AI assistant you want to add later: once there's a chatbot, it can be given the same data
files (projects, myths, glossary, FAQ) as its knowledge source, so the bot and the site never
disagree with each other.

## Wiring up the future AI assistant

Nothing here builds the chatbot yet, but the app is set up so it's a self-contained addition:

1. Add a `ChatWidget` component under `src/components/chat/` and mount it once in `Layout.tsx` so
   it's available on every page.
2. Feed it `src/data/*.ts` (myths, glossary, FAQ, projects) as grounding context so its answers
   stay consistent with the rest of the site.
3. Use `useLocation()` (already used in `useScrollToTop`) to give the assistant awareness of which
   page the visitor is on, so it can answer "what does this page mean" contextually.

## Suggested next steps

- Swap the placeholder photos in `src/assets/images` for real, permissioned site photography once
  available — every image is imported in exactly one place, so this is a find-and-replace.
- Wire the `For Developers` and `Contact` forms to a real email/CRM endpoint (they currently just
  show a client-side confirmation).
- If you do have real persona/journey-map research, I'd revisit the FAQ and Myths vs. Facts content
  specifically — those are the pages most likely to need to speak to your actual users' stated
  objections rather than the general ones I've drafted here.
