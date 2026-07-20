export type Project = {
  slug: string
  name: string
  city: string
  status: 'Completed' | 'In Progress'
  housingType: string
  units: string
  description: string
  longDescription: string
  image: string
}

import oakStreet from '../assets/images/gentle6.png'
import mapleAvenue from '../assets/images/gentle2.png'
import elmStreet from '../assets/images/gentle3.png'
import cedarLane from '../assets/images/gentle4.png'
import birchCourt from '../assets/images/gentle5.png'
import pineStreet from '../assets/images/gentle7.png'

export const projects: Project[] = [
  {
    slug: 'oak-street-fourplex',
    name: 'Oak Street Fourplex',
    city: 'Portland, OR',
    status: 'Completed',
    housingType: 'Fourplex',
    units: '4 units',
    description:
      'A gentle fourplex that fits seamlessly into an established single-family neighborhood, adding housing options while maintaining street character.',
    longDescription:
      'Oak Street replaced a single aging house with four right-sized homes, each with its own entrance and yard space. The design matches the roofline height and setback of neighboring houses, so from the sidewalk it reads as part of the block rather than an intrusion. Two units are reserved for households earning below the area median income.',
    image: oakStreet,
  },
  {
    slug: 'maple-avenue-mixed-use',
    name: 'Maple Avenue Mixed-Use',
    city: 'Seattle, WA',
    status: 'In Progress',
    housingType: 'Mixed-Use',
    units: '8 units',
    description:
      'Ground-floor retail with residential units above, creating a walkable neighborhood center while respecting the scale of surrounding buildings.',
    longDescription:
      'This corridor project brings small shopfronts back to a street that lost its commercial base decades ago. Housing above keeps the storefronts staffed with people who live close enough to walk to work, and the massing steps down toward the residential blocks behind it.',
    image: mapleAvenue,
  },
  {
    slug: 'elm-street-townhomes',
    name: 'Elm Street Townhomes',
    city: 'Austin, TX',
    status: 'Completed',
    housingType: 'Townhomes',
    units: '5 units',
    description:
      'Five townhomes designed to match the rhythm and materials of adjacent single-family homes, adding diverse housing options to the neighborhood.',
    longDescription:
      "Each townhome has its own front door facing the street, echoing the porch-and-yard rhythm of the block. Materials — brick, board-and-batten siding, painted trim — were chosen to match, not mimic, the houses on either side.",
    image: elmStreet,
  },
  {
    slug: 'cedar-lane-duplex',
    name: 'Cedar Lane Duplex',
    city: 'Denver, CO',
    status: 'Completed',
    housingType: 'Duplex',
    units: '2 units',
    description:
      'A side-by-side duplex that looks like a single home from the street, doubling housing capacity without changing neighborhood character.',
    longDescription:
      'From the sidewalk, Cedar Lane reads as one house with two front doors. Splitting the lot let a long-time resident downsize into one unit while renting the other, keeping her in the neighborhood she helped build.',
    image: cedarLane,
  },
  {
    slug: 'birch-court-adus',
    name: 'Birch Court ADUs',
    city: 'San Diego, CA',
    status: 'Completed',
    housingType: 'ADU',
    units: '3 units',
    description:
      'Three backyard accessory dwelling units that provide housing for aging parents and young professionals without altering street frontage.',
    longDescription:
      "Because ADUs sit behind the main house, Birch Court added three homes' worth of housing capacity without changing a single sightline from the street. Two units house family members; one is a long-term rental.",
    image: birchCourt,
  },
  {
    slug: 'pine-street-courtyard-homes',
    name: 'Pine Street Courtyard Homes',
    city: 'Minneapolis, MN',
    status: 'In Progress',
    housingType: 'Fourplex',
    units: '4 units',
    description:
      'Four homes arranged around a shared courtyard, creating community space while adding housing density in a thoughtful configuration.',
    longDescription:
      'Rather than a single building, Pine Street splits four homes around a shared courtyard, giving each household a private entry and a shared green space for kids and neighbors to gather.',
    image: pineStreet,
  },
]
