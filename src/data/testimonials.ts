export interface Testimonial {
  name: string;
  location: string;
  project: string;
  rating: number;
  text: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah & James Mitchell',
    location: 'Chelmsford',
    project: 'Rear Extension',
    rating: 5,
    text: 'Hartwell & Stone transformed our home beyond anything we imagined. The team were professional, tidy and communicated brilliantly throughout. Our new kitchen-diner is the heart of our home.',
    image: '/images/projects/project-1.svg',
  },
  {
    name: 'David Thompson',
    location: 'Brentwood',
    project: 'Loft Conversion',
    rating: 5,
    text: 'From the initial consultation to handover, the entire experience was first class. The quality of craftsmanship is outstanding — our loft conversion looks like it was always part of the original house.',
    image: '/images/projects/project-2.svg',
  },
  {
    name: 'Emma & Richard Clarke',
    location: 'Billericay',
    project: 'Full Renovation',
    rating: 5,
    text: 'We entrusted Hartwell & Stone with a complete renovation of our 1930s property. They exceeded every expectation. Incredible attention to detail and a genuine passion for quality.',
    image: '/images/projects/project-3.svg',
  },
  {
    name: 'Michael & Anna Pearson',
    location: 'Ingatestone',
    project: 'New Build',
    rating: 5,
    text: 'Building our dream home was a daunting prospect, but Hartwell & Stone made the entire process smooth and enjoyable. Their project management is exemplary and the finished result is stunning.',
    image: '/images/projects/project-4.svg',
  },
  {
    name: 'Catherine Hughes',
    location: 'Maldon',
    project: 'Kitchen Installation',
    rating: 5,
    text: 'Our kitchen is absolutely beautiful. The team worked cleanly and efficiently, and the attention to detail in the finishing was remarkable. We couldn\'t be happier with the result.',
    image: '/images/projects/project-5.svg',
  },
  {
    name: 'Robert & Helen Foster',
    location: 'Rayleigh',
    project: 'Bathroom Renovation',
    rating: 5,
    text: 'Hartwell & Stone created a spa-like bathroom that we use every day. The tiling is immaculate, the underfloor heating is a luxury we didn\'t know we needed, and the whole project was delivered on time.',
    image: '/images/projects/project-6.svg',
  },
  {
    name: 'Jonathan Baker',
    location: 'Romford',
    project: 'Double-Storey Extension',
    rating: 5,
    text: 'An incredibly well-run project from start to finish. The build quality is exceptional and they kept us informed at every stage. The extension has completely changed how we live in our home.',
    image: '/images/projects/project-7.svg',
  },
  {
    name: 'Lisa & Mark Carpenter',
    location: 'Hornchurch',
    project: 'Loft Conversion',
    rating: 5,
    text: 'We now have a gorgeous master suite thanks to Hartwell & Stone. The dormer conversion maximised every inch of space, and the en-suite is hotel quality. Worth every penny.',
    image: '/images/projects/project-8.svg',
  },
];
