export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Core Values', href: '#values' },
  { label: 'Impact', href: '#impact' },
  { label: 'In Action', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const MARQUEE_WORDS = [
  'Love',
  'Peace',
  'Unity',
  'Empowerment',
  'Education',
  'Conservation',
  'Talent',
  'Hope',
]

export interface FocusArea {
  title: string
  text: string
}

export const FOCUS_AREAS: FocusArea[] = [
  { title: 'Youth', text: 'Skills, mentorship and platforms to shine.' },
  { title: 'Women', text: 'Opportunities that unlock potential and leadership.' },
  { title: 'Vulnerable Communities', text: 'Resources and pathways to lasting self-reliance.' },
]

export interface Stat {
  value: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 1200, suffix: '+', label: 'Youth & women empowered' },
  { value: 5000, suffix: '+', label: 'Trees planted for the planet' },
  { value: 25, suffix: '+', label: 'Community programs delivered' },
  { value: 100, suffix: '%', label: 'Community-led & volunteer driven' },
]

export interface GalleryItem {
  image: string
  title: string
  tag: string
}

export const GALLERY: GalleryItem[] = [
  {
    image: '/assets/img-education.jpg',
    title: 'Classrooms of Light',
    tag: 'Education & Talent Development',
  },
  {
    image: '/assets/img-women.jpg',
    title: 'Her Potential, Unlocked',
    tag: 'Youth & Women Empowerment',
  },
  {
    image: '/assets/img-trees.jpg',
    title: 'Roots of Tomorrow',
    tag: 'Environmental Conservation',
  },
  {
    image: '/assets/img-community.jpg',
    title: 'Hands That Hold Each Other',
    tag: 'Peace & Unity',
  },
  {
    image: '/assets/img-youth.jpg',
    title: 'Joy as a Birthright',
    tag: 'Community Wellbeing',
  },
]

export const CONTACT = {
  email: 'info@litsinternational.co.ke',
  phoneDisplay: '+254 705 940 021',
  phoneHref: 'tel:+254705940021',
  location: 'Nairobi, Kenya',
  locationDetail: 'Serving communities across the nation',
}
