
export interface ServiceItem {
  title: string;
  points: string[];
  description?: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}
