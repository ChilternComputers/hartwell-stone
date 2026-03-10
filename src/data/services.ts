export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'extensions',
    title: 'House Extensions',
    description: 'Transform your living space with a beautifully designed extension. Whether you need a single-storey rear extension to create an open-plan kitchen-diner, a double-storey extension for extra bedrooms, or a wrap-around extension that reimagines your entire ground floor, we deliver structural excellence with stunning finishes.',
    features: [
      'Single and double-storey extensions',
      'Rear, side and wrap-around designs',
      'Bi-fold and sliding door installations',
      'Structural steelwork and foundations',
      'Full planning and building control management',
      'Interior finishing to your specification',
    ],
    priceRange: '£30,000 – £80,000+',
    image: '/images/projects/project-1.svg',
  },
  {
    id: 'lofts',
    title: 'Loft Conversions',
    description: 'Unlock the potential of your roof space. A loft conversion is one of the most cost-effective ways to add a bedroom, home office or bathroom. We specialise in dormer, hip-to-gable, Velux and L-shaped conversions, each engineered for maximum headroom and natural light.',
    features: [
      'Dormer loft conversions',
      'Hip-to-gable conversions',
      'Velux / roof light conversions',
      'L-shaped loft conversions',
      'En-suite bathroom installations',
      'Staircase design and installation',
    ],
    priceRange: '£35,000 – £65,000+',
    image: '/images/projects/project-2.svg',
  },
  {
    id: 'renovations',
    title: 'Full Renovations',
    description: 'Breathe new life into your property with a comprehensive renovation. From period homes requiring sensitive restoration to tired properties needing a complete overhaul, we manage every aspect — structural alterations, rewiring, plumbing, plastering, joinery and decoration.',
    features: [
      'Complete interior refurbishment',
      'Structural alterations and remodelling',
      'Period property restoration',
      'Rewiring and plumbing upgrades',
      'Plastering, joinery and decoration',
      'Project management from start to finish',
    ],
    priceRange: '£50,000 – £150,000+',
    image: '/images/projects/project-3.svg',
  },
  {
    id: 'new-builds',
    title: 'New Builds',
    description: 'Build your dream home from the ground up. We work alongside architects and designers to construct bespoke new-build homes that reflect your lifestyle. From foundations to finishing touches, every element is crafted to the highest standards.',
    features: [
      'Bespoke residential new builds',
      'Architectural collaboration',
      'Foundation and groundwork',
      'Full structural build',
      'Mechanical and electrical installations',
      'Landscaping and external works',
    ],
    priceRange: '£200,000 – £500,000+',
    image: '/images/projects/project-4.svg',
  },
  {
    id: 'kitchens',
    title: 'Kitchens',
    description: 'From structural preparation to the final handle, we deliver complete kitchen transformations. We work with leading kitchen suppliers or your chosen designer to install everything from utility connections and tiling to worktops, cabinetry and appliances.',
    features: [
      'Structural preparation and layout changes',
      'Plumbing and electrical first fix',
      'Tiling, flooring and splashbacks',
      'Worktop templating and fitting',
      'Cabinet and appliance installation',
      'Lighting design and installation',
    ],
    priceRange: '£15,000 – £45,000+',
    image: '/images/projects/project-5.svg',
  },
  {
    id: 'bathrooms',
    title: 'Bathrooms',
    description: 'Create a luxury bathroom that feels like a private retreat. Our team handles everything — plumbing, waterproofing, underfloor heating, tiling, sanitaryware and bespoke joinery. We work to exacting standards to ensure a flawless, long-lasting finish.',
    features: [
      'Complete bathroom installations',
      'Wet room and walk-in shower design',
      'Underfloor heating',
      'Wall and floor tiling',
      'Sanitaryware and brassware fitting',
      'Bespoke vanity units and storage',
    ],
    priceRange: '£8,000 – £25,000+',
    image: '/images/projects/project-6.svg',
  },
];

export const faqs = [
  {
    question: 'Do I need planning permission for an extension?',
    answer: 'Many single-storey rear extensions fall under permitted development rights. However, this depends on your property type, location and the size of the proposed extension. We handle all planning applications and can advise you during your free consultation.',
  },
  {
    question: 'How long does a loft conversion take?',
    answer: 'A typical loft conversion takes 8–12 weeks from start to completion. More complex L-shaped or hip-to-gable conversions may take 12–16 weeks. We provide a detailed timeline at the quotation stage.',
  },
  {
    question: 'Do you provide a guarantee on your work?',
    answer: 'Yes. All structural work comes with a 10-year guarantee. We are also FMB members and TrustMark registered, giving you additional consumer protection and insurance-backed warranties.',
  },
  {
    question: 'Can you work with my architect?',
    answer: 'Absolutely. We regularly collaborate with architects and designers. If you don\'t have one, we can recommend trusted partners who specialise in residential projects.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We are based in Chelmsford and serve all of Essex, including Brentwood, Billericay, Romford, Basildon, Southend and Colchester. We also undertake projects in East London.',
  },
  {
    question: 'How do payments work?',
    answer: 'We agree a clear payment schedule before work begins, typically tied to project milestones. We never ask for large upfront deposits — usually just a small deposit to secure your start date, with staged payments as the project progresses.',
  },
];
