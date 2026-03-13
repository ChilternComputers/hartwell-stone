export interface Testimonial {
  name: string;
  location: string;
  project: string;
  projectType: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Caroline & Richard Ashworth',
    location: 'Chelmsford',
    project: 'Georgian Townhouse Restoration',
    projectType: 'Heritage',
    rating: 5,
    text: 'They understood that this house deserved respect. Every detail was considered — from the lime mortar mix to matching the original crown mouldings. James visited personally every week, and the heritage team\'s knowledge of traditional materials was genuinely impressive. It felt less like a building project and more like a collaboration.',
    date: '2025-09',
    image: '/images/projects/project-1.webp',
  },
  {
    name: 'Dr Michael Chen',
    location: 'Ingatestone',
    project: 'Contemporary New Build',
    projectType: 'New Build',
    rating: 5,
    text: 'Building a house from scratch was the most daunting thing we\'d ever undertaken. Hartwell & Stone made it remarkably straightforward. The project management was exemplary — fortnightly reports, cost tracking to the penny, and they finished three weeks ahead of programme. The build quality is outstanding.',
    date: '2025-06',
    image: '/images/projects/project-2.webp',
  },
  {
    name: 'James & Fiona Mercer',
    location: 'Maldon',
    project: 'Maltings Warehouse Conversion',
    projectType: 'Heritage Conversion',
    rating: 5,
    text: 'What they\'ve done with this building is extraordinary. You can feel the history in the exposed brickwork and original timbers, but it lives like a brand-new home. The attention to detail — the way they worked around the existing structure rather than through it — shows a team that genuinely cares about their craft.',
    date: '2025-03',
    image: '/images/projects/project-3.webp',
  },
  {
    name: 'Sarah & David Blackwell',
    location: 'Brentwood',
    project: 'Double-Storey Extension',
    projectType: 'Extension',
    rating: 5,
    text: 'It doesn\'t feel like an extension — it feels like the house was always meant to be this way. Their joiners matched the original Arts and Crafts detailing so perfectly that our neighbours can\'t tell where old ends and new begins. We were in the house throughout and the site was immaculate every evening.',
    date: '2024-11',
    image: '/images/projects/project-4.webp',
  },
  {
    name: 'Hugh & Margaret Prentice',
    location: 'Writtle',
    project: 'Grain Store Barn Conversion',
    projectType: 'Heritage Conversion',
    rating: 5,
    text: 'We\'d been told by two other builders it couldn\'t be done within our budget. Hartwell & Stone found a way — clever design, honest pricing and not a single wasted pound. Living in a converted 18th-century grain store is everything we hoped it would be. Eleanor and her heritage team were exceptional.',
    date: '2024-08',
    image: '/images/projects/project-5.webp',
  },
  {
    name: 'Priya Sharma',
    location: 'Chelmsford',
    project: 'Riverside Luxury Apartment',
    projectType: 'New Build',
    rating: 5,
    text: 'The specification is outstanding — Bulthaup kitchen, Duravit bathroom, engineered oak throughout. But what really sets Hartwell & Stone apart is the aftercare. Six months after moving in, they still came back to adjust a door that had settled by two millimetres. That\'s the kind of company they are.',
    date: '2024-06',
    image: '/images/projects/project-6.webp',
  },
  {
    name: 'Thomas & Rebecca Ward',
    location: 'Billericay',
    project: 'Victorian Rectory Renovation',
    projectType: 'Renovation',
    rating: 5,
    text: 'Our friends can\'t believe it\'s the same house. The project was complex — asbestos removal, staircase restoration, a complete rewire — but Tom and his team managed it seamlessly. They found original encaustic tiles under three layers of flooring and restored them beautifully. A remarkable transformation.',
    date: '2024-03',
    image: '/images/projects/project-7.webp',
  },
  {
    name: 'Alexandra Novak',
    location: 'Shenfield',
    project: 'Architectural Garden Studio',
    projectType: 'Studio',
    rating: 5,
    text: 'I wanted somewhere I\'d genuinely enjoy working every day, not a glorified shed. This is a proper building — warm, quiet, beautifully finished with a standing-seam zinc roof and polished concrete floor. They delivered it in eight weeks, exactly as promised, and it\'s now the envy of everyone who visits.',
    date: '2025-01',
    image: '/images/projects/project-8.webp',
  },
];
