// Text-only project facts for the AI assistant's grounding context.
// Kept separate from projects.ts because that file imports images,
// which the serverless chat function (Node runtime) shouldn't pull in.
export const projectsSummary = [
  {
    name: 'Oak Street Fourplex',
    city: 'Portland, OR',
    status: 'Completed',
    housingType: 'Fourplex',
    units: '4 units',
    description:
      'A gentle fourplex that replaced a single aging house, matching the roofline height and setback of neighboring houses. Two units are reserved for households earning below the area median income.',
  },
  {
    name: 'Maple Avenue Mixed-Use',
    city: 'Seattle, WA',
    status: 'In Progress',
    housingType: 'Mixed-Use',
    units: '8 units',
    description: 'Ground-floor retail with residential units above, bringing small shopfronts back to a corridor that lost its commercial base decades ago.',
  },
  {
    name: 'Elm Street Townhomes',
    city: 'Austin, TX',
    status: 'Completed',
    housingType: 'Townhomes',
    units: '5 units',
    description: 'Five townhomes with individual front doors, using materials chosen to match (not mimic) the houses on either side.',
  },
  {
    name: 'Cedar Lane Duplex',
    city: 'Denver, CO',
    status: 'Completed',
    housingType: 'Duplex',
    units: '2 units',
    description: 'A side-by-side duplex that reads as one house from the street, letting a long-time resident downsize into one unit while renting the other.',
  },
  {
    name: 'Birch Court ADUs',
    city: 'San Diego, CA',
    status: 'Completed',
    housingType: 'ADU',
    units: '3 units',
    description: "Three backyard accessory dwelling units that added housing capacity without changing a single sightline from the street.",
  },
  {
    name: 'Pine Street Courtyard Homes',
    city: 'Minneapolis, MN',
    status: 'In Progress',
    housingType: 'Fourplex',
    units: '4 units',
    description: 'Four homes arranged around a shared courtyard, giving each household a private entry and a shared green space.',
  },
]
