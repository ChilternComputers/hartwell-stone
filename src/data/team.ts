export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'James Hartwell',
    role: 'Managing Director',
    bio: 'Founded Hartwell & Stone in 1987 with a vision to bring premium construction to residential Essex. Over 38 years of hands-on experience in project delivery and client relations.',
    image: '/images/team/james-hartwell.svg',
  },
  {
    name: 'Rachel Stone',
    role: 'Design Director',
    bio: 'A qualified architect with 20 years of experience, Rachel oversees all design work and ensures each project delivers both aesthetic excellence and practical functionality.',
    image: '/images/team/rachel-stone.svg',
  },
  {
    name: 'Tom Aldridge',
    role: 'Construction Manager',
    bio: 'With 15 years in the construction industry, Tom manages our on-site teams and ensures every build meets our exacting quality standards. SMSTS and CSCS qualified.',
    image: '/images/team/tom-aldridge.svg',
  },
  {
    name: 'Sophie Chen',
    role: 'Project Coordinator',
    bio: 'Sophie is the primary point of contact for our clients throughout their project. She manages timelines, budgets and communication to ensure a seamless experience.',
    image: '/images/team/sophie-chen.svg',
  },
];
