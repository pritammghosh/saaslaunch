export interface Feature {
  id: string;
  name: string;
  value: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavItem {
  label: string;
  href: string;
}