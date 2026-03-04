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
    image: '/images/projects/goldenkey.jpg',
    title: 'Golden Key',
    type: 'Team',
    description:
      ' This project is a full-stack CRUD application built with React.js, Node.js, and MySQL for a real estate business to upload, manage, and filter properties, improving listing organization.',
    techStacks: [
      { image: '/images/techStacks/node.png', label: 'Node.js' },
      { image: '/images/techStacks/react.png', label: 'React' },
      { image: '/images/techStacks/html5.png', label: 'HTML5' },
      { image: '/images/techStacks/css.png', label: 'CSS3' },
      { image: '/images/techStacks/tailwind.png', label: 'Tailwind' },
      { image: '/images/techStacks/mysql.png', label: 'MySQL' },
      { image: '/images/techStacks/express.png', label: 'Express' },
      { image: '/images/techStacks/postman.svg', label: 'Postman' },
    ],
    links: {
      github: 'https://github.com/yoo-ran/goldenkey',
      live: 'https://ai-pet.vercel.app',
    },
  },
  {
    image: '/images/projects/dejapp.png',
    title: 'DEJ APP',
    type: 'Team',
    description:
      'The DEJ app simplifies real estate searches with an intuitive interface, detailed property info, and advanced filters. Users can easily browse, save favorites, and find the perfect property.',
    techStacks: [
      { image: '/images/techStacks/node.png', label: 'Node.js' },
      { image: '/images/techStacks/react.png', label: 'React Native' },
      { image: '/images/techStacks/html5.png', label: 'HTML5' },
      { image: '/images/techStacks/css.png', label: 'CSS3' },
      { image: '/images/techStacks/api.png', label: 'REST API' },
      { image: '/images/techStacks/postman.svg', label: 'Postman' },
      { image: '/images/techStacks/api.svg', label: 'API Integration' },
    ],
    links: {
      github: 'https://github.com/yoo-ran/dejapp',
      live: 'https://ai-pet.vercel.app',
    },
  },
];
