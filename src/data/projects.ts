export interface Project {
  title: string;
  type: string;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: 'Victorian Rear Extension',
    type: 'Extension',
    location: 'Chelmsford',
    image: '/images/projects/project-1.svg',
    description: 'A stunning single-storey rear extension with full-width bi-fold doors, creating a seamless open-plan kitchen-diner with garden views.',
  },
  {
    title: 'L-Shaped Loft Conversion',
    type: 'Loft Conversion',
    location: 'Brentwood',
    image: '/images/projects/project-2.svg',
    description: 'Maximised roof space with an L-shaped dormer conversion, creating a master suite with en-suite and walk-in wardrobe.',
  },
  {
    title: 'Complete Home Renovation',
    type: 'Renovation',
    location: 'Billericay',
    image: '/images/projects/project-3.svg',
    description: 'Full refurbishment of a 1930s semi-detached, including structural remodelling, new kitchen, three bathrooms and complete redecoration.',
  },
  {
    title: 'Contemporary New Build',
    type: 'New Build',
    location: 'Ingatestone',
    image: '/images/projects/project-4.svg',
    description: 'A bespoke 4-bedroom detached home with contemporary design, featuring floor-to-ceiling glazing and a landscaped garden.',
  },
  {
    title: 'Luxury Kitchen Installation',
    type: 'Kitchen',
    location: 'Maldon',
    image: '/images/projects/project-5.svg',
    description: 'Complete kitchen transformation with structural wall removal, bespoke cabinetry, quartz worktops and integrated appliances.',
  },
  {
    title: 'Spa-Style Bathroom',
    type: 'Bathroom',
    location: 'Rayleigh',
    image: '/images/projects/project-6.svg',
    description: 'A luxury wet room and family bathroom with underfloor heating, large-format porcelain tiles and walk-in rainfall shower.',
  },
  {
    title: 'Double-Storey Side Extension',
    type: 'Extension',
    location: 'Romford',
    image: '/images/projects/project-7.svg',
    description: 'A two-storey side extension adding a utility room and downstairs WC on the ground floor, with an additional bedroom above.',
  },
  {
    title: 'Dormer Loft Conversion',
    type: 'Loft Conversion',
    location: 'Hornchurch',
    image: '/images/projects/project-8.svg',
    description: 'Rear dormer loft conversion with two Velux front windows, creating a bright double bedroom with en-suite shower room.',
  },
];
