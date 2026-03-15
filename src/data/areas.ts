export interface Area {
  name: string;
  slug: string;
  county: string;
  region: string;
  description: string;
  keywords: string[];
  nearbyAreas: string[];
  image: string;
}

export const areas: Area[] = [
  {
    name: 'Chelmsford',
    slug: 'chelmsford',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'As our home base since 1987, Chelmsford is where Hartwell & Stone began and where our reputation was forged. From Victorian terrace renovations in the city centre to contemporary new builds in the surrounding villages of Writtle, Great Baddow and Galleywood, we know this city intimately — its conservation areas, its planning quirks, and its discerning homeowners.\n\nOur Chelmsford projects benefit from the shortest lead times and the most competitive pricing in our portfolio, thanks to minimal travel overheads and deep relationships with local suppliers, planning officers and building inspectors. Whether you\'re extending a 1930s semi in Springfield or restoring a listed farmhouse in Broomfield, our team is never more than ten minutes away.',
    keywords: ['builders chelmsford', 'extensions chelmsford essex', 'construction company chelmsford'],
    nearbyAreas: ['brentwood', 'billericay', 'ingatestone', 'maldon', 'writtle'],
    image: '/images/projects/project-1.webp',
  },
  {
    name: 'Brentwood',
    slug: 'brentwood',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Brentwood is one of our most active areas — a borough of handsome period homes, established gardens and high expectations. From double-storey extensions in Shenfield to whole-house renovations in Hutton, we\'ve delivered over sixty projects across the borough. The area\'s mix of Edwardian villas, interwar semis and contemporary executive homes demands a builder who can adapt to any architectural style.\n\nOur work in Brentwood consistently achieves exceptional resale value uplifts, with extensions typically adding 15–20% to property values. We understand the local market, the conservation requirements in Brentwood Old Town, and the planning landscape across the borough.',
    keywords: ['builders brentwood', 'extensions brentwood essex', 'house renovation brentwood'],
    nearbyAreas: ['chelmsford', 'billericay', 'ingatestone', 'east-london', 'shenfield'],
    image: '/images/projects/project-4.webp',
  },
  {
    name: 'Billericay',
    slug: 'billericay',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Billericay\'s thriving property market and characterful housing stock make it a natural fit for our services. The town\'s mix of Victorian cottages along the High Street, interwar family homes in the Western Road area, and contemporary estates in South Green create diverse opportunities for extensions, renovations and sensitive refurbishments.\n\nOur recent projects in Billericay include a comprehensive Victorian rectory renovation, several double-storey rear extensions, and a number of loft conversions with dormer windows. We\'re familiar with the Basildon Borough planning process and have strong relationships with the local building control team.',
    keywords: ['builders billericay', 'extensions billericay', 'renovation billericay essex'],
    nearbyAreas: ['chelmsford', 'brentwood', 'basildon', 'southend', 'rayleigh'],
    image: '/images/projects/project-7.webp',
  },
  {
    name: 'Ingatestone',
    slug: 'ingatestone',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Ingatestone and its surrounding villages — Fryerning, Margaretting, Stock — are home to some of Essex\'s finest rural properties. From Grade II listed farmhouses to contemporary architect-designed homes set within generous grounds, the area demands a builder with experience in both heritage and modern construction techniques.\n\nOur Thornfield House project, a striking five-bedroom contemporary new build designed with Michaelis Boyd Associates, showcases the calibre of work we deliver in this area. We understand the rural planning environment, the challenges of working on large sites with limited access, and the expectations of clients investing at the premium end of the market.',
    keywords: ['builders ingatestone', 'new build ingatestone essex', 'listed building ingatestone'],
    nearbyAreas: ['chelmsford', 'brentwood', 'billericay', 'maldon', 'writtle'],
    image: '/images/projects/project-2.webp',
  },
  {
    name: 'Maldon',
    slug: 'maldon',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Maldon\'s rich industrial heritage — its maltings, sail lofts, and waterfront warehouses — makes it one of the most rewarding areas for our heritage conversion team. Our transformation of The Old Maltings into six luxury apartments demonstrated our ability to celebrate a building\'s industrial past while creating contemporary living spaces that command premium prices.\n\nBeyond heritage projects, we serve the broader Maldon district including Heybridge, Burnham-on-Crouch, and the Dengie Peninsula. The area\'s coastal character, conservation requirements, and flood zone considerations are all factors we navigate routinely.',
    keywords: ['builders maldon', 'barn conversion maldon essex', 'heritage restoration maldon'],
    nearbyAreas: ['chelmsford', 'colchester', 'southend', 'billericay', 'braintree'],
    image: '/images/projects/project-3.webp',
  },
  {
    name: 'Colchester',
    slug: 'colchester',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Britain\'s oldest recorded town presents unique opportunities and challenges for a construction company. Colchester\'s Roman walls, medieval street plan and abundance of listed buildings require a builder with genuine heritage expertise. Our team has experience working within the town\'s multiple conservation areas and alongside the borough\'s heritage officers.\n\nBeyond the town centre, we serve the surrounding villages of Dedham, Wivenhoe, West Mersea and the Colne Valley — an area rich in timber-framed farmhouses, Essex barns and period properties that reward sensitive renovation. We bring the same exacting standards to every project, whether it\'s a Roman wall adjacent extension or a contemporary new build in the university quarter.',
    keywords: ['builders colchester', 'heritage restoration colchester', 'extensions colchester essex'],
    nearbyAreas: ['chelmsford', 'maldon', 'braintree', 'suffolk', 'witham'],
    image: '/images/projects/project-5.webp',
  },
  {
    name: 'Braintree',
    slug: 'braintree',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Braintree district — encompassing Braintree, Halstead, Coggeshall and the surrounding villages — offers a diverse mix of residential construction opportunities. The area\'s medieval wool towns feature some of Essex\'s finest timber-framed buildings, while the newer estates and rural plots provide scope for contemporary new builds and extensions.\n\nCoggeshall\'s extraordinary collection of medieval buildings and Halstead\'s Victorian mill town character both require a builder who understands historic construction. Our heritage team\'s experience with lime renders, traditional joinery and structural timber repair is regularly called upon across the district.',
    keywords: ['builders braintree', 'extensions braintree essex', 'renovation braintree'],
    nearbyAreas: ['chelmsford', 'colchester', 'witham', 'maldon'],
    image: '/images/projects/project-6.webp',
  },
  {
    name: 'Witham',
    slug: 'witham',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Witham sits at the crossroads of our Essex heartland, making it an efficient base for projects across the county. The town itself has a charming conservation area around Chipping Hill, with notable medieval and Georgian properties, while the surrounding area includes attractive villages like Rivenhall, Terling and Hatfield Peverel.\n\nOur experience in Witham ranges from careful conservation area extensions that satisfy planning officers to substantial new builds on the edge of town. The A12 corridor location means excellent logistics for material deliveries, which helps keep project timelines on track.',
    keywords: ['builders witham', 'extensions witham essex', 'construction witham'],
    nearbyAreas: ['chelmsford', 'braintree', 'colchester', 'maldon'],
    image: '/images/projects/project-8.webp',
  },
  {
    name: 'Southend-on-Sea',
    slug: 'southend',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Southend\'s varied housing stock — from grand Edwardian seafront villas in Thorpe Bay and Westcliff to interwar semis across the borough — provides diverse construction opportunities. The city\'s ongoing regeneration and rising property values make it an increasingly popular area for high-quality extensions and renovations.\n\nWe\'ve completed numerous projects across the Southend borough, including several substantial rear extensions in Leigh-on-Sea and whole-house refurbishments in Chalkwell. The coastal environment requires particular attention to material specification — salt-resistant finishes, marine-grade fixings and robust weatherproofing are standard in all our Southend projects.',
    keywords: ['builders southend', 'extensions southend essex', 'renovation southend-on-sea'],
    nearbyAreas: ['billericay', 'basildon', 'rayleigh', 'maldon'],
    image: '/images/projects/project-9.webp',
  },
  {
    name: 'Basildon',
    slug: 'basildon',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Basildon borough — including Laindon, Pitsea, Wickford and Langdon Hills — offers significant scope for property improvement. Many of the borough\'s homes were built during the new town development of the 1950s and 60s, and their owners are increasingly investing in extensions, modernisations and complete renovations to create homes that reflect contemporary living standards.\n\nOur Basildon projects often involve transforming standardised new town housing into bespoke family homes through creative extension design, internal remodelling and high-quality finishes. We also serve the borough\'s more rural fringes, where barn conversions and farmhouse renovations require our heritage expertise.',
    keywords: ['builders basildon', 'extensions basildon essex', 'house renovation basildon'],
    nearbyAreas: ['billericay', 'southend', 'brentwood', 'rayleigh'],
    image: '/images/projects/project-4.webp',
  },
  {
    name: 'Rayleigh',
    slug: 'rayleigh',
    county: 'Essex',
    region: 'Essex & East Anglia',
    description: 'Rayleigh and the surrounding Rochford district combine charming high street character with excellent transport links, making it one of south Essex\'s most desirable residential areas. The town\'s period properties around the castle mound, Victorian terraces along the High Street, and established family homes in Hockley and Hawkwell all present opportunities for quality construction work.\n\nOur chapel conversion on Chapel Lane in Rayleigh — transforming a redundant 1870s Congregational chapel into a four-bedroom family home — is one of our most celebrated heritage projects. The project demonstrated our ability to weave old and new together with genuine artistry.',
    keywords: ['builders rayleigh', 'extensions rayleigh essex', 'barn conversion rayleigh'],
    nearbyAreas: ['southend', 'billericay', 'basildon', 'maldon'],
    image: '/images/projects/project-9.webp',
  },
  {
    name: 'East London',
    slug: 'east-london',
    county: 'Greater London',
    region: 'London & Home Counties',
    description: 'East London\'s rapid transformation and diverse housing stock make it one of our most exciting operating areas outside Essex. From Victorian terrace extensions in Wanstead and Woodford to warehouse conversions in Stratford and Hackney Wick, the east London market demands a builder who can navigate tight sites, party wall agreements and inner-city logistics.\n\nOur proximity to east London — just thirty minutes from our Chelmsford headquarters — means we can offer the same personal service and competitive pricing as our Essex projects. We\'re experienced with the planning requirements across Redbridge, Havering, Barking & Dagenham, Newham and Tower Hamlets.',
    keywords: ['builders east london', 'extensions east london', 'renovation romford hornchurch'],
    nearbyAreas: ['brentwood', 'north-london', 'basildon'],
    image: '/images/projects/project-6.webp',
  },
  {
    name: 'North London',
    slug: 'north-london',
    county: 'Greater London',
    region: 'London & Home Counties',
    description: 'North London\'s leafy suburbs — Enfield, Barnet, Southgate, Winchmore Hill — feature some of the capital\'s finest residential architecture. The area\'s Edwardian and interwar housing, mature gardens and conservation areas create ideal conditions for the kind of sensitive, high-quality construction that Hartwell & Stone specialises in.\n\nOur north London projects typically involve substantial rear extensions, loft conversions with dormer windows, and complete internal refurbishments. We understand the planning landscape across the northern boroughs and have experience navigating conservation area applications, Article 4 directions and tree preservation orders.',
    keywords: ['builders north london', 'extensions enfield barnet', 'renovation north london'],
    nearbyAreas: ['east-london', 'hertfordshire'],
    image: '/images/projects/project-1.webp',
  },
  {
    name: 'Hertfordshire',
    slug: 'hertfordshire',
    county: 'Hertfordshire',
    region: 'London & Home Counties',
    description: 'Hertfordshire\'s attractive market towns — Bishop\'s Stortford, Ware, Hertford, Sawbridgeworth — sit within easy reach of our Chelmsford base and share many characteristics with our core Essex operating area. The county\'s mix of period properties, Green Belt constraints and discerning homeowners makes it a natural extension of our service area.\n\nWe\'ve delivered projects across the eastern Hertfordshire corridor, from Georgian townhouse restorations in Hertford to contemporary extensions in Bishop\'s Stortford. The county\'s planning authorities are generally supportive of high-quality design, and our portfolio of award-winning work helps secure approvals for ambitious schemes.',
    keywords: ['builders hertfordshire', 'extensions bishops stortford', 'renovation hertford ware'],
    nearbyAreas: ['chelmsford', 'north-london', 'cambridge'],
    image: '/images/projects/project-2.webp',
  },
  {
    name: 'Cambridge',
    slug: 'cambridge',
    county: 'Cambridgeshire',
    region: 'South East & East Anglia',
    description: 'Cambridge\'s unique blend of historic colleges, Victorian terraces and contemporary eco-builds makes it one of the most architecturally interesting cities in our service area. The city\'s planning environment favours innovative, sustainable design — and our experience with low-energy construction techniques, heritage materials and modern building methods positions us well for Cambridge projects.\n\nBeyond the city, the surrounding villages of the South Cambridgeshire district — Grantchester, Great Shelford, Trumpington — offer outstanding opportunities for barn conversions, period renovations and bespoke new builds on generous plots.',
    keywords: ['builders cambridge', 'extensions cambridge', 'heritage restoration cambridge'],
    nearbyAreas: ['hertfordshire', 'suffolk', 'colchester'],
    image: '/images/projects/project-5.webp',
  },
  {
    name: 'Suffolk',
    slug: 'suffolk',
    county: 'Suffolk',
    region: 'South East & East Anglia',
    description: 'Suffolk\'s extraordinary wealth of medieval timber-framed buildings, wool churches and agricultural barns makes it a haven for our heritage construction team. Towns like Lavenham, Long Melford, Bury St Edmunds and Sudbury contain some of England\'s finest vernacular architecture, and converting or restoring these buildings demands specialist knowledge and traditional skills.\n\nOur Suffolk projects typically involve barn conversions, farmhouse renovations and sensitive extensions to listed properties. We work closely with Suffolk County Council\'s heritage team and have experience with the particular requirements of the Dedham Vale and Suffolk Coast & Heaths AONBs.',
    keywords: ['builders suffolk', 'barn conversion suffolk', 'listed building restoration suffolk'],
    nearbyAreas: ['colchester', 'cambridge', 'braintree'],
    image: '/images/projects/project-3.webp',
  },
];

/** Get a single area by slug */
export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

/** Get areas by region name */
export function getAreasByRegion(region: string): Area[] {
  return areas.filter((a) => a.region === region);
}
