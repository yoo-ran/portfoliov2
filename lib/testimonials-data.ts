// testimonials.data.ts
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Yooran has been an exceptional student across all the terms I have taught her in the New Media and Web Development program here at BCIT. As a primarily coding and portfolio instructor, I have consistently watched her go above and beyond the requirements in building strong, scalable projects. Beyond technical skills, Yooran’s inquisitive attitude is a key component to her success...',
    author: 'Richard Te',
    role: 'BCIT Instructor',
  },
  {
    quote:
      'Yooran consistently demonstrates strong problem-solving skills and a great eye for design...',
    author: 'Jane Doe',
    role: 'Senior Developer',
  },
  {
    quote: 'She goes above and beyond expectations and delivers polished, scalable work.',
    author: 'John Smith',
    role: 'Project Manager',
  },
];
