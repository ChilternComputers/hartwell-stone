export const SITE = {
  name: 'Hartwell & Stone',
  legalName: 'Hartwell & Stone Construction Ltd',
  tagline: 'Building Britain\'s Finest Homes Since 1987',
  description: 'Award-winning construction and heritage restoration across Essex and the South East. Bespoke builds, extensions and listed building specialists since 1987.',
  url: 'https://hartwell-stone.pages.dev',
  phone: '01245 267 891',
  email: 'info@hartwellandstone.co.uk',
  whatsapp: '441245267891',
  address: {
    street: '14 Duke Street',
    area: 'Chelmsford',
    city: 'Essex',
    postcode: 'CM1 1HL',
    country: 'GB',
  },
  hours: {
    weekday: 'Mon–Fri: 7:30am – 5:30pm',
    saturday: 'Sat: 8:00am – 1:00pm',
    sunday: 'Sun: Closed',
  },
  founded: 1987,
  yearsExperience: new Date().getFullYear() - 1987,
  projects: '487',
  satisfaction: '98.4%',
  awards: '34',
  reviews: { count: 143, rating: 4.9 },
  companyNumber: '02841967',
  vatNumber: 'GB 421 7839 12',
  numberOfEmployees: '45+',
  accreditations: [
    { key: 'fmb', name: 'Federation of Master Builders', shortName: 'FMB', detail: 'Member No. 48291', footerDetail: 'No. 48291' },
    { key: 'trustmark', name: 'TrustMark', shortName: 'TrustMark', detail: 'Reg. TM39841', footerDetail: 'TM39841' },
    { key: 'checkatrade', name: 'Checkatrade', shortName: 'Checkatrade', detail: '9.8/10 Average', footerDetail: '9.8/10' },
    { key: 'labc', name: 'LABC Warranty', shortName: 'LABC', detail: 'Registered Partner', footerDetail: 'Partner' },
    { key: 'nhbc', name: 'NHBC', shortName: 'NHBC', detail: 'Registered Builder', footerDetail: 'Registered' },
    { key: 'trustedTrader', name: 'Which? Trusted Trader', shortName: 'Which?', detail: 'Trusted Trader', footerDetail: 'Trusted Trader' },
  ] as const,
  social: {
    facebook: 'https://facebook.com/hartwellandstone',
    instagram: 'https://instagram.com/hartwellandstone',
  },
};

/** Look up a single accreditation by key, returns `"ShortName Detail"` string */
export function getAccreditation(key: string): string {
  const a = SITE.accreditations.find((item) => item.key === key);
  return a ? `${a.shortName} ${a.detail}` : '';
}
