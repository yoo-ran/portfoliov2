// data/projects.ts
export type TechStack = {
  image: string;
  label: string;
};

export type ProjectLinks = {
  github?: string;
  live?: string;
};

export type Project = {
  image: string;
  title: string;
  type: 'Team' | 'Individual';
  description: string;
  techStacks: TechStack[];
  links: ProjectLinks;
};

export const PROJECTS: Project[] = [
  {
    image: '/images/projects/dejapp.png',
    title: 'Golden Key',
    type: 'Team',
    description:
      ' This project is a full-stack CRUD application built with React.js, Node.js, and MySQL for a real estate business to upload, manage, and filter properties, improving listing organization.',
    techStacks: [
      { image: '/images/techStacks/nextjs.svg', label: 'Next.js' },
      { image: '/images/techStacks/typescript.svg', label: 'TypeScript' },
      { image: '/images/techStacks/prisma.svg', label: 'Prisma' },
      { image: '/images/techStacks/postgres.svg', label: 'PostgreSQL' },
    ],
    links: {
      github: 'https://github.com/yourname/ai-pet',
      live: 'https://ai-pet.vercel.app',
    },
  },
  {
    image: '/images/projects/dejapp.png',
    title: 'AI Pet',
    type: 'Individual',
    description:
      'A journaling and mood-tracking app where users interact with an evolving AI pet.',
    techStacks: [
      { image: '/images/techStacks/nextjs.svg', label: 'Next.js' },
      { image: '/images/techStacks/typescript.svg', label: 'TypeScript' },
      { image: '/images/techStacks/prisma.svg', label: 'Prisma' },
      { image: '/images/techStacks/postgres.svg', label: 'PostgreSQL' },
    ],
    links: {
      github: 'https://github.com/yourname/ai-pet',
      live: 'https://ai-pet.vercel.app',
    },
  },
  {
    image: '/images/projects/dejapp.png',
    title: 'GoldenKey',
    type: 'Team',
    description:
      'A real estate management platform with CRUD operations and image uploads.',
    techStacks: [
      { image: '/images/techStacks/react.png', label: 'React' },
      { image: '/images/techStacks/node.svg', label: 'Node.js' },
      { image: '/images/techStacks/mysql.png', label: 'MySQL' },
    ],
    links: {
      github: 'https://github.com/yourname/goldenkey',
    },
  },
];
