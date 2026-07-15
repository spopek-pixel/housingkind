export type Story = {
  name: string
  location: string
  role: string
  tag: string
  quote: string
  bio: string
  colorway: 'harbor' | 'clay' | 'sage'
  interview: { question: string; answer: string }[]
}

export const stories: Story[] = [
  {
    name: 'Pat',
    location: 'Madison, WI',
    role: 'Duplex Homeowner',
    tag: 'Community Connection',
    colorway: 'harbor',
    quote:
      "It let me stay near my sister and still have a place that's truly mine.",
    bio: 'Pat is a 73-year-old retired homeowner who has lived in her duplex-style condo for 28 years. She was able to purchase through a small-scale development, gaining long-term stability. Living next to her visually impaired sister allows them to stay independent while supporting each other, showing how this housing offers accessibility and security.',
    interview: [
      {
        question: 'What made you decide to move into a duplex-style condo?',
        answer:
          "My sister lives next door, and honestly, that made the decision easy. She's visually impaired, so being close by means I can check in on her without either of us feeling like we've given up our independence. The unit itself was also just the right size — small enough to manage, big enough to feel like home.",
      },
      {
        question: 'Was there anything about the process that surprised you?',
        answer:
          "I expected it to feel more like an apartment building, but it doesn't. It reads as a house from the street. Neighbors who've lived on the block for decades still stop and say hello like they always have.",
      },
      {
        question: "What would you tell someone who's nervous about this kind of housing moving into their neighborhood?",
        answer: "Give it a year. That's honestly all I'd ask. A year ago I wasn't sure what to expect either, and now it's just... home.",
      },
    ],
  },
  {
    name: 'Zac',
    location: 'Madison, WI',
    role: 'Cohousing-Style Condo Homeowner',
    tag: 'Community Connection',
    colorway: 'clay',
    quote:
      'We got the shared space we wanted without giving up our privacy.',
    bio: 'Zac is a Madison homeowner living in a cohousing condo with his wife and children. After struggling in a competitive market, he bought through a smaller, community-based development. His home offers affordability and shared spaces that support family life while maintaining privacy, giving him a more accessible path to homeownership.',
    interview: [
      {
        question: 'What was the biggest challenge before you found this place?',
        answer:
          "We were priced out of everything within twenty minutes of my in-laws. Every listing that fit our budget needed work we couldn't afford, or it was an hour away. The cohousing development let us buy into something new without stretching past what we could actually afford.",
      },
      {
        question: 'How has the shared space worked out day to day?',
        answer:
          "Better than I expected, honestly. The kids have other kids to play with in the courtyard, and we still close our own front door at the end of the day. It's not communal living in the way people imagine — it's more like having really good neighbors who happen to share a garden.",
      },
      {
        question: "Anything you'd change?",
        answer: "I wish more people knew this kind of ownership was even an option before they started house-hunting. We stumbled into it almost by accident.",
      },
    ],
  },
  {
    name: 'Maria Rodriguez',
    location: 'Portland, OR',
    role: 'Neighbor, Oak Street Fourplex',
    tag: 'Community Connection',
    colorway: 'sage',
    quote:
      "I was initially skeptical about the fourplex going in next door, but after a year, I can honestly say it's been great for our street.",
    bio: 'Maria lives across the street from the Oak Street Fourplex. The new neighbors are friendly, and having more people around has made the block feel safer and more vibrant than before construction began.',
    interview: [
      {
        question: 'You mentioned being skeptical at first. What worried you?',
        answer:
          "Mostly parking, if I'm being honest, and just — change. We'd lived across from a single-family home for fifteen years, and I didn't know what four households instead of one would mean for the street.",
      },
      {
        question: 'What changed your mind?',
        answer:
          "Watching it actually get built. It's the same height as the houses next to it, same setbacks. And the family that moved into the corner unit started a little herb garden along the sidewalk that the whole block enjoys now.",
      },
      {
        question: 'Would you want to see more of this kind of housing nearby?',
        answer: "A year ago I would've said no. Now I'd say yes, as long as it's done thoughtfully like this one was.",
      },
    ],
  },
]
