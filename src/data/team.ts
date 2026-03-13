export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  bio: string;
  metaDescription: string;
  extendedBio: string;
  image: string;
  qualifications: string[];
  yearsExperience: number;
  specialisms: string[];
  notable?: string[];
}

export const team: TeamMember[] = [
  {
    name: 'James Hartwell',
    slug: 'james-hartwell',
    role: 'Managing Director & Founder',
    bio: 'James founded Hartwell & Stone in 1987 after fifteen years as a site manager for Willmott Dixon. His obsession with quality and straight-talking approach to client relationships has shaped the company\'s culture for nearly four decades. He still visits every active site weekly.',
    metaDescription: 'Meet James Hartwell, founder and Managing Director of Hartwell & Stone. Over 50 years in construction, from apprentice bricklayer to leading 487+ completed projects across Essex.',
    extendedBio: 'James began his career as an apprentice bricklayer in 1972, working on housing estates across Essex before moving into site management with Willmott Dixon, where he spent fifteen years delivering residential and commercial projects across the South East. By 1987, frustrated by the compromises inherent in large-scale contracting, he founded Hartwell & Stone with two employees and a simple conviction: that every project, regardless of scale, deserved uncompromising craftsmanship.\n\nNearly four decades later, that conviction remains the company\'s defining characteristic. James has overseen the growth from a two-person operation to a team of over 45 directly employed staff, but he has never stepped away from the sites. He visits every active project weekly, knows every member of the team by name, and still insists on personally meeting every new client.\n\nHis philosophy is straightforward: employ good people, treat them well, give them the right tools, and hold everyone — including himself — to the highest standards. It is an approach that has earned Hartwell & Stone an industry-leading client referral rate of over 60%.',
    image: '/images/team/james-hartwell-new.webp',
    qualifications: ['MCIOB', 'SMSTS', 'First Aid at Work'],
    yearsExperience: 52,
    specialisms: ['Business leadership', 'Client relations', 'Quality assurance'],
    notable: ['Founded the company in 1987', 'Over 487 projects completed', 'LABC Building Excellence Award 2024', 'FMB Master Builder of the Year finalist'],
  },
  {
    name: 'Victoria Ashworth',
    slug: 'victoria-ashworth',
    role: 'Commercial Director',
    bio: 'Victoria joined in 2008 to lead our commercial operations, bringing a decade of quantity surveying experience from Mace Group. She oversees estimating, procurement and financial management across all projects, and is the reason 94% of our builds complete within budget.',
    metaDescription: 'Meet Victoria Ashworth, Commercial Director at Hartwell & Stone. MRICS chartered surveyor ensuring 94% of projects complete within budget. Former Mace Group senior QS.',
    extendedBio: 'Victoria graduated from the University of Reading with a BSc in Quantity Surveying in 2002 and spent six years at Mace Group, working on projects ranging from £2M residential developments to £40M commercial fit-outs. She joined Hartwell & Stone in 2008 as Commercial Director, tasked with professionalising the company\'s estimating, procurement and contract administration.\n\nHer impact was immediate. Within two years, she had introduced formal cost reporting, milestone-based payment schedules and a procurement framework that eliminated the ad-hoc ordering that had previously caused programme delays. Today, 94% of Hartwell & Stone projects complete within 3% of the original quotation — a figure that is virtually unheard of in residential construction.\n\nVictoria personally reviews every quotation before it is issued and oversees monthly cost reports on all active projects. Her approach is methodical, transparent and fair — qualities that clients and subcontractors alike appreciate. She is a chartered member of the Royal Institution of Chartered Surveyors (MRICS) and sits on the regional committee of the Chartered Institute of Building.',
    image: '/images/team/victoria-ashworth.webp',
    qualifications: ['MRICS', 'BSc Quantity Surveying'],
    yearsExperience: 26,
    specialisms: ['Cost management', 'Procurement', 'Contract administration'],
    notable: ['94% of projects within 3% of original quotation', 'Former Mace Group senior QS', 'RICS regional committee member'],
  },
  {
    name: 'Tom Aldridge',
    slug: 'tom-aldridge',
    role: 'Senior Site Manager',
    bio: 'Tom has been with us for fifteen years, rising from apprentice carpenter to lead our on-site operations. His meticulous approach to programming and quality control has earned him an LABC Site Manager of the Year nomination. He leads a team of 18 directly employed tradespeople.',
    metaDescription: 'Meet Tom Aldridge, Senior Site Manager at Hartwell & Stone. LABC Site Manager of the Year nominee leading 18 tradespeople. From apprentice carpenter to operations lead.',
    extendedBio: 'Tom joined Hartwell & Stone as a 17-year-old apprentice carpenter in 2009. Over fifteen years, he has progressed through every level of the company — from apprentice to improver, chargehand, site foreman, and now Senior Site Manager responsible for all on-site operations.\n\nThis trajectory gives Tom a perspective that few site managers possess. He has personally hung doors, laid floors, cut roofs and fitted kitchens — so when he inspects the team\'s work, he knows exactly what good looks like because he has done it himself. His standards are exacting but fair, and his team respects him because he has earned their respect on the tools.\n\nTom holds an NVQ Level 6 in Construction Management, a CSCS Black Card, and an SMSTS certificate. He was nominated for LABC Site Manager of the Year in 2023 for his work on the Thornfield House new build in Ingatestone. He leads a team of 18 directly employed tradespeople including carpenters, bricklayers, plasterers and groundworkers.',
    image: '/images/team/tom-aldridge-new.webp',
    qualifications: ['SMSTS', 'CSCS Black Card', 'NVQ Level 6 Construction Management'],
    yearsExperience: 22,
    specialisms: ['Site management', 'Programme delivery', 'Health & safety'],
    notable: ['LABC Site Manager of the Year nominee 2023', '15 years with Hartwell & Stone', 'Leads 18 directly employed tradespeople'],
  },
  {
    name: 'Eleanor Graves',
    slug: 'eleanor-graves',
    role: 'Heritage & Conservation Lead',
    bio: 'Eleanor holds a master\'s degree in Building Conservation from the University of Bath and spent eight years with Donald Insall Associates before joining Hartwell & Stone in 2019. She leads all our listed building, barn conversion and heritage restoration projects.',
    metaDescription: 'Meet Eleanor Graves, Heritage & Conservation Lead at Hartwell & Stone. SPAB Fellow with an MSc in Building Conservation. Specialist in listed buildings and barn conversions.',
    extendedBio: 'Eleanor\'s path to construction was unconventional. After reading History of Art at the Courtauld Institute, she spent two years working for English Heritage (now Historic England) before completing an MSc in Building Conservation at the University of Bath — one of the UK\'s most respected programmes in the field.\n\nShe then spent eight years with Donald Insall Associates, the architecture and conservation practice founded by Sir Donald Insall, working on projects including the restoration of a Grade I listed Elizabethan manor house in Suffolk and the conversion of a medieval tithe barn in Oxfordshire. This experience gave her an encyclopaedic knowledge of traditional building materials and techniques.\n\nEleanor joined Hartwell & Stone in 2019 to establish a dedicated heritage division. Under her leadership, the team has completed the LABC award-winning Georgian restoration in Chelmsford, the chapel conversion in Rayleigh, the grain store conversion in Writtle, and the Victorian maltings conversion in Maldon. She is a Fellow of the Society for the Protection of Ancient Buildings (SPAB), an Affiliate of the Institute of Historic Building Conservation (IHBC), and a regular speaker at heritage building conferences.',
    image: '/images/team/eleanor-graves.webp',
    qualifications: ['MSc Building Conservation (Bath)', 'IHBC Affiliate', 'SPAB Fellow'],
    yearsExperience: 16,
    specialisms: ['Listed buildings', 'Barn conversions', 'Heritage materials', 'Conservation officer liaison'],
    notable: ['Led LABC award-winning Georgian restoration', 'Former Donald Insall Associates', 'SPAB Fellow', 'Heritage building conference speaker'],
  },
  {
    name: 'Daniel Okafor',
    slug: 'daniel-okafor',
    role: 'Architectural Liaison & Design Manager',
    bio: 'Daniel bridges the gap between design intent and buildability. With a Part II architectural qualification and ten years of contracting experience, he works alongside our clients\' architects to resolve technical challenges before they reach site — saving time, money and compromise.',
    metaDescription: 'Meet Daniel Okafor, Design Manager at Hartwell & Stone. Bartlett-trained architect turned builder, bridging design and construction with BIM Level 2 expertise.',
    extendedBio: 'Daniel completed his Part II architectural qualification at the Bartlett School of Architecture (UCL) in 2010, but chose to move into the contracting side of the industry rather than pursue registration as an architect. His reasoning was simple: he wanted to build, not just draw.\n\nAfter ten years with a mid-sized contractor in London — where he rose to Design Manager on projects up to £15M — Daniel joined Hartwell & Stone in 2020 to lead our pre-construction and design coordination services. His dual perspective, understanding both what architects intend and what builders need, makes him an invaluable bridge between the design and construction teams.\n\nDaniel reviews every set of drawings before they reach site, identifying clashes, ambiguities and buildability issues that would otherwise cause delays and cost overruns. He is BIM Level 2 certified and uses 3D modelling to resolve complex junctions, steelwork connections and services coordination. He works regularly with architectural practices across the South East, including Michaelis Boyd, Proctor & Matthews and numerous smaller studios.',
    image: '/images/team/daniel-okafor.webp',
    qualifications: ['ARB Part II', 'BIM Level 2 Certified', 'RIBA Associate'],
    yearsExperience: 18,
    specialisms: ['Design coordination', 'Technical detailing', 'BIM', 'Architect liaison'],
    notable: ['Bartlett School of Architecture (UCL)', 'BIM Level 2 certified', 'Works with Michaelis Boyd, Proctor & Matthews'],
  },
];
