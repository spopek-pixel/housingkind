export type MythFact = {
  myth: string
  fact: string
  category: 'Property Values' | 'Traffic & Parking' | 'Neighborhood Character' | 'Who Lives There' | 'Process'
}

export const mythsAndFacts: MythFact[] = [
  {
    category: 'Property Values',
    myth: 'Affordable housing next door will lower my property value.',
    fact: 'Most peer-reviewed studies of well-designed, well-managed affordable and missing-middle housing find no consistent negative effect on nearby property values, and some show modest increases tied to added foot traffic and reinvestment nearby.',
  },
  {
    category: 'Traffic & Parking',
    myth: "A fourplex or townhome row will overwhelm the street with cars.",
    fact: 'Missing-middle housing typically adds fewer vehicle trips per unit than single-family homes, since residents are more likely to be smaller households, renters without a second car, or people who work nearby. Most projects also include on-site parking sized to realistic demand.',
  },
  {
    category: 'Neighborhood Character',
    myth: 'New housing will look completely out of place and ruin the character of the street.',
    fact: 'Gentle density is defined by matching the height, setback, and materials of the surrounding block. A duplex or fourplex built to these standards is designed to be nearly indistinguishable from a single-family home at a glance.',
  },
  {
    category: 'Who Lives There',
    myth: 'Affordable housing residents are transient and disconnected from the community.',
    fact: 'Housing stability is one of the biggest predictors of long-term residency. Many affordable and missing-middle developments house long-time neighbors, aging parents, essential workers, and young families trying to stay in the community they grew up in.',
  },
  {
    category: 'Process',
    myth: "There's no way to have input once a project like this is proposed.",
    fact: 'Most cities require public comment periods, planning commission hearings, and design review before a project is approved. Housingkind exists to make that input more informed, not to skip the process.',
  },
  {
    category: 'Neighborhood Character',
    myth: 'Density always means big apartment towers.',
    fact: "Missing middle housing sits between single-family homes and large apartment buildings: duplexes, fourplexes, townhomes, and accessory dwelling units, typically 1 to 3 stories, sized to match the block they're on.",
  },
]
