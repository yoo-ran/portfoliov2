// data/projects.ts
export type TechStack = {
  image: string;
  label: string;
};

export type ProjectLinks = {
  github?: string;
  detail?: string;
};

export type Project = {
  slug: string;
  image: string;
  title: string;
  type: 'Team' | 'Individual';
  platform: string;
  description: string;
  techStacks: TechStack[];
  links: ProjectLinks;
};

export const PROJECTS: Project[] = [
  {
    image: '/images/projects/golden-key/goldenkey.jpg',
    slug: 'golden-key',
    title: 'Golden Key',
    type: 'Team',
    platform: 'Full-stack Web App',
    description:
      'Full-stack real estate management platform for uploading, editing, and filtering property listings with image handling and database integration.',
    techStacks: [
      { image: '/images/techStacks/node.png', label: 'Node.js' },
      { image: '/images/techStacks/react.png', label: 'React' },
      { image: '/images/techStacks/tailwind.png', label: 'Tailwind' },
      { image: '/images/techStacks/mysql.png', label: 'MySQL' },
      { image: '/images/techStacks/express.png', label: 'Express' },
      { image: '/images/techStacks/jwt.webp', label: 'JWT' },
    ],
    links: {
      github: 'https://github.com/yoo-ran/goldenkey',
      detail: 'golden-key',
    },
  },
  {
    image: '/images/projects/dej-app/dejapp.png',
    slug: 'dej-app',
    title: 'DEJ APP',
    type: 'Team',
    platform: 'Mobile App',
    description:
      'A real estate mobile app designed to simplify property discovery with intuitive search, detailed listing views, and saved favorites for a smoother browsing experience.',
    techStacks: [
      { image: '/images/techStacks/node.png', label: 'Node.js' },
      { image: '/images/techStacks/react.png', label: 'React Native' },
      { image: '/images/techStacks/css.png', label: 'CSS3' },
      { image: '/images/techStacks/api.png', label: 'REST API' },
      { image: '/images/techStacks/postman.svg', label: 'Postman' },
    ],
    links: {
      github: 'https://github.com/yoo-ran/dejapp',
      detail: 'dej-app',
    },
  },
  {
    image: '/images/projects/postcard-store/postcard-store.jpg',
    slug: 'postcard-store',
    title: 'Postcard Store',
    type: 'Individual',
    platform: 'Full-stack Web App',
    description:
      'An e-commerce platform for original photography postcards, featuring Stripe checkout, AI-powered recommendations, and an automated CI/CD pipeline with end-to-end testing.',
    techStacks: [
      { image: '/images/techStacks/nextjs.png', label: 'Next.js' },
      { image: '/images/techStacks/typescript.png', label: 'TypeScript' },
      { image: '/images/techStacks/prisma.png', label: 'Prisma' },
      { image: '/images/techStacks/postgresql.png', label: 'PostgreSQL' },
      { image: '/images/techStacks/stripe.png', label: 'Stripe' },
    ],
    links: {
      github: 'https://github.com/yoo-ran/postcard-store',
      detail: 'postcard-store',
    },
  },
];
