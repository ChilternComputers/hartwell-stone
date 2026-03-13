export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  image: string;
  keyFeatures: string[];
  process: string[];
  startingFrom: string;
}

export const services: Service[] = [
  {
    id: 'new-builds',
    title: 'Bespoke New Builds',
    description: 'From contemporary country houses to elegant urban residences, we build homes of enduring quality. Working alongside your architect or our trusted design partners, every new build is managed from foundation to finishing coat — with the structural integrity, thermal performance and craftsmanship that define a home built to last generations.',
    features: [
      'Bespoke residential homes from initial concept',
      'Architect collaboration and design coordination',
      'Foundation engineering and groundworks',
      'Full structural build with premium materials',
      'Mechanical, electrical and smart-home installations',
      'Landscaping, driveways and external works',
    ],
    priceRange: '£350,000 – £3M+',
    image: '/images/projects/project-2.webp',
    keyFeatures: ['Architect-led design', 'EPC A achievable', 'NHBC warranty', '10-year structural guarantee'],
    process: ['Feasibility & site appraisal', 'Design development with your architect', 'Planning & Building Regulations', 'Groundworks & foundations', 'Superstructure & envelope', 'First & second fix', 'Commissioning & handover'],
    startingFrom: '£350k',
  },
  {
    id: 'extensions',
    title: 'Extensions & Additions',
    description: 'From single-storey kitchen extensions with full-width bi-fold doors to substantial double-storey additions that transform your home\'s footprint, every project is designed to feel like a natural continuation of the original architecture. We handle structural engineering, party wall agreements, planning applications and building control — so you deal with one team from concept to completion.',
    features: [
      'Single, double and wrap-around extensions',
      'Rear, side and over-garage additions',
      'Structural steelwork and RSJ installation',
      'Bi-fold, sliding and pivot door systems',
      'Full planning and building control management',
      'Interior finishing to architectural specification',
    ],
    priceRange: '£60,000 – £350,000+',
    image: '/images/projects/project-4.webp',
    keyFeatures: ['Architect coordination', 'Party wall management', 'Matched materials', '10-year guarantee'],
    process: ['Initial site survey', 'Design & planning submission', 'Party wall agreements', 'Groundworks & foundations', 'Structural build', 'Roofing & weatherproofing', 'Internal fit-out & finishing'],
    startingFrom: '£60k',
  },
  {
    id: 'heritage',
    title: 'Listed Buildings & Heritage',
    description: 'Working with listed buildings, conservation areas and historic structures demands a particular reverence for the original craftsmen\'s work. Our heritage team brings specialist knowledge of lime mortars, traditional joinery, heritage glazing and conservation-grade materials — always in close consultation with conservation officers and Historic England where required.',
    features: [
      'Grade I, II and II* listed building works',
      'Conservation area permissions and liaison',
      'Lime plaster, render and pointing',
      'Sash window restoration and draught-proofing',
      'Structural repair and underpinning',
      'Heritage-sensitive modern upgrades',
    ],
    priceRange: '£80,000 – £1.5M+',
    image: '/images/projects/project-1.webp',
    keyFeatures: ['Conservation officer liaison', 'Traditional materials', 'Heritage joinery', 'SPAB principles'],
    process: ['Heritage assessment & measured survey', 'Conservation officer pre-application', 'Listed building consent', 'Specialist procurement', 'Phased conservation works', 'Modern services integration', 'Completion & heritage record'],
    startingFrom: '£80k',
  },
  {
    id: 'renovations',
    title: 'Whole-House Renovations',
    description: 'Whether you\'ve acquired a period property in need of sympathetic restoration or a tired 1960s house crying out for a complete reimagining, our renovation team manages every trade under one roof — structural alterations, rewiring, replumbing, plastering, joinery, decoration and landscaping. One team, one programme, one point of contact.',
    features: [
      'Complete interior strip-out and refurbishment',
      'Structural remodelling and load-bearing alterations',
      'Full mechanical and electrical rewire',
      'Period feature restoration',
      'Kitchen, bathroom and utility installations',
      'Decoration, flooring and finishing throughout',
    ],
    priceRange: '£120,000 – £800,000+',
    image: '/images/projects/project-7.webp',
    keyFeatures: ['Single point of contact', 'All trades in-house', 'Fixed-price available', '10-year guarantee'],
    process: ['Detailed property survey', 'Scope of works & specification', 'Planning (if required)', 'Strip-out & structural works', 'First fix services', 'Plastering & second fix', 'Decoration & final fit-out'],
    startingFrom: '£120k',
  },
  {
    id: 'conversions',
    title: 'Heritage & Barn Conversions',
    description: 'We transform barns, chapels, warehouses, maltings and other characterful buildings into exceptional homes. Each conversion begins with a thorough structural and heritage assessment, followed by a design that celebrates the building\'s original character while delivering the thermal performance, layout and finish of a contemporary home.',
    features: [
      'Barn, chapel, warehouse and mill conversions',
      'Structural surveys and feasibility assessments',
      'Change-of-use and Class Q planning',
      'Timber frame repair and restoration',
      'Heritage-sensitive insulation solutions',
      'Contemporary interiors within historic shells',
    ],
    priceRange: '£250,000 – £2M+',
    image: '/images/projects/project-5.webp',
    keyFeatures: ['Heritage expertise', 'Ecological surveys', 'Traditional craftsmanship', 'Conservation compliance'],
    process: ['Building appraisal & surveys', 'Planning & Listed Building Consent', 'Structural stabilisation', 'Envelope & weatherproofing', 'Services installation', 'Internal fit-out', 'Landscaping & external works'],
    startingFrom: '£250k',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'For clients who already have their design team and specialist contractors in place, we offer dedicated project management — coordinating every trade, managing the programme, controlling costs and ensuring quality standards are met at every stage. Your single point of accountability from planning through to practical completion.',
    features: [
      'Full programme management and scheduling',
      'Cost control and monthly reporting',
      'Contractor procurement and coordination',
      'Quality assurance and site inspections',
      'Client liaison and progress updates',
      'Practical completion and defects management',
    ],
    priceRange: 'Typically 12–15% of build cost',
    image: '/images/projects/project-6.webp',
    keyFeatures: ['Dedicated project manager', 'Weekly client reports', 'Cost transparency', 'Defects period management'],
    process: ['Brief & scope review', 'Programme development', 'Contractor appointment', 'Construction oversight', 'Quality inspections', 'Practical completion', 'Defects period & final account'],
    startingFrom: 'From 12%',
  },
];

export const faqs = [
  {
    question: 'What is your typical project value range?',
    answer: 'Our projects typically range from £60,000 for a well-specified extension to over £2M for bespoke new builds and heritage conversions. We focus on quality-driven projects where craftsmanship and attention to detail are priorities. If your project is below £60,000, we\'re happy to recommend trusted colleagues who may be a better fit.',
  },
  {
    question: 'Do I need planning permission for my project?',
    answer: 'It depends on the scope. Many rear extensions fall under permitted development rights, while new builds, heritage works and conversions almost always require planning. We manage the entire planning process — from pre-application advice through to discharge of conditions — and have a strong track record of approvals across Essex and the South East.',
  },
  {
    question: 'How do you manage costs and prevent overruns?',
    answer: 'Transparency is central to how we work. Every project begins with a detailed specification and fixed-price quotation. We use a milestone-based payment schedule, provide monthly cost reports and flag any potential variations before they become commitments. Over the past five years, 94% of our projects have completed within 3% of the original quotation.',
  },
  {
    question: 'Can you work with our existing architect?',
    answer: 'Absolutely — and we often do. We collaborate regularly with architectural practices across the South East, from small residential studios to larger firms like Michaelis Boyd and Proctor & Matthews. If you don\'t yet have an architect, we can introduce you to practices whose style and expertise match your project.',
  },
  {
    question: 'What guarantees do you provide?',
    answer: 'All structural work carries a 10-year Hartwell & Stone guarantee, underwritten by our FMB membership. New builds are additionally covered by NHBC Buildmark warranty. Heritage works are guaranteed for materials and workmanship for 10 years. We also provide full Building Regulations sign-off and completion certificates on every project.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We\'re based in Chelmsford and work extensively across Essex, East London, the Home Counties and East Anglia. For larger projects — typically new builds and heritage conversions above £500,000 — we work nationwide by arrangement. Our current furthest project is a barn conversion in the Cotswolds.',
  },
  {
    question: 'How long will my project take?',
    answer: 'Timescales vary by complexity. A well-specified extension typically takes 4–6 months from start on site. Whole-house renovations run 6–10 months. New builds and heritage conversions are typically 12–18 months. We provide a detailed programme at quotation stage and update it fortnightly throughout the build.',
  },
  {
    question: 'Do you handle listed building and conservation area projects?',
    answer: 'Heritage work is one of our specialisms. We have a dedicated heritage team experienced in lime mortars, traditional joinery, sash window restoration and conservation-grade materials. We work closely with conservation officers and, where required, Historic England. Our recent LABC Building Excellence Award was for a Grade II listed Georgian restoration in Chelmsford.',
  },
];
