export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  yearsExperience: number;
  specialisms: string[];
}

export const team: TeamMember[] = [
  {
    name: 'James Hartwell',
    role: 'Managing Director & Founder',
    bio: 'James founded Hartwell & Stone in 1987 after fifteen years as a site manager for Willmott Dixon. His obsession with quality and straight-talking approach to client relationships has shaped the company\'s culture for nearly four decades. He still visits every active site weekly.',
    image: '/images/team/james-hartwell-new.webp',
    qualifications: ['MCIOB', 'SMSTS', 'First Aid at Work'],
    yearsExperience: 52,
    specialisms: ['Business leadership', 'Client relations', 'Quality assurance'],
  },
  {
    name: 'Victoria Ashworth',
    role: 'Commercial Director',
    bio: 'Victoria joined in 2008 to lead our commercial operations, bringing a decade of quantity surveying experience from Mace Group. She oversees estimating, procurement and financial management across all projects, and is the reason 94% of our builds complete within budget.',
    image: '/images/team/victoria-ashworth.webp',
    qualifications: ['MRICS', 'BSc Quantity Surveying'],
    yearsExperience: 26,
    specialisms: ['Cost management', 'Procurement', 'Contract administration'],
  },
  {
    name: 'Tom Aldridge',
    role: 'Senior Site Manager',
    bio: 'Tom has been with us for fifteen years, rising from apprentice carpenter to lead our on-site operations. His meticulous approach to programming and quality control has earned him an LABC Site Manager of the Year nomination. He leads a team of 18 directly employed tradespeople.',
    image: '/images/team/tom-aldridge-new.webp',
    qualifications: ['SMSTS', 'CSCS Black Card', 'NVQ Level 6 Construction Management'],
    yearsExperience: 22,
    specialisms: ['Site management', 'Programme delivery', 'Health & safety'],
  },
  {
    name: 'Eleanor Graves',
    role: 'Heritage & Conservation Lead',
    bio: 'Eleanor holds a master\'s degree in Building Conservation from the University of Bath and spent eight years with Donald Insall Associates before joining Hartwell & Stone in 2019. She leads all our listed building, barn conversion and heritage restoration projects.',
    image: '/images/team/eleanor-graves.webp',
    qualifications: ['MSc Building Conservation (Bath)', 'IHBC Affiliate', 'SPAB Fellow'],
    yearsExperience: 16,
    specialisms: ['Listed buildings', 'Barn conversions', 'Heritage materials', 'Conservation officer liaison'],
  },
  {
    name: 'Daniel Okafor',
    role: 'Architectural Liaison & Design Manager',
    bio: 'Daniel bridges the gap between design intent and buildability. With a Part II architectural qualification and ten years of contracting experience, he works alongside our clients\' architects to resolve technical challenges before they reach site — saving time, money and compromise.',
    image: '/images/team/daniel-okafor.webp',
    qualifications: ['ARB Part II', 'BIM Level 2 Certified', 'RIBA Associate'],
    yearsExperience: 18,
    specialisms: ['Design coordination', 'Technical detailing', 'BIM', 'Architect liaison'],
  },
];
