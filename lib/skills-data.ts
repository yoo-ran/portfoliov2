import { TECH_ICON } from './constant/tech-icons';

import {
  Braces,
  Server,
  Database,
  Rocket,
  Wrench,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export type StackItem = {
  label: string;
  image: string;
  kind?: 'img' | 'lucide';
};

export type SkillCardData = {
  title: string;
  icon: LucideIcon;
  advanced: StackItem[];
  intermediate: StackItem[];
};

export const SKILL_CARDS: SkillCardData[] = [
  {
    title: 'Frontend',
    icon: Braces,
    advanced: [
      { label: 'JavaScript (ES6+)', kind: 'img', image: TECH_ICON.javascript },
      { label: 'HTML5', kind: 'img', image: TECH_ICON.html },
      { label: 'CSS3', kind: 'img', image: TECH_ICON.css },
      { label: 'React', kind: 'img', image: TECH_ICON.react },
      { label: 'Tailwind CSS', kind: 'img', image: TECH_ICON.tailwind },
      { label: 'GSAP', kind: 'img', image: TECH_ICON.gsap },
    ],
    intermediate: [
      { label: 'Next.js', kind: 'img', image: TECH_ICON.next },
      { label: 'TypeScript', kind: 'img', image: TECH_ICON.typescript },
      { label: 'Framer Motion', kind: 'img', image: TECH_ICON.framer },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    advanced: [
      { label: 'Node.js', kind: 'img', image: TECH_ICON.node },
      { label: 'Express', kind: 'img', image: TECH_ICON.express },
      { label: 'REST APIs', kind: 'img', image: TECH_ICON.api },
    ],
    intermediate: [
      { label: 'Authentication (JWT / Sessions)', kind: 'img', image: TECH_ICON.jwt },
      { label: 'CORS & Security Headers', kind: 'lucide', image: 'Server' },
    ],
  },
  {
    title: 'Data',
    icon: Database,
    advanced: [
      { label: 'PostgreSQL', kind: 'img', image: TECH_ICON.postgres },
      { label: 'MySQL', kind: 'img', image: TECH_ICON.mysql },
    ],
    intermediate: [{ label: 'Prisma ORM', image: TECH_ICON.prisma }],
  },
  {
    title: 'Deployment',
    icon: Rocket,
    advanced: [
      { label: 'Vercel', kind: 'img', image: TECH_ICON.vercel },
      { label: 'Heroku', kind: 'img', image: TECH_ICON.heroku },
      { label: 'GitHub Actions (CI/CD)', kind: 'img', image: TECH_ICON.github },
    ],
    intermediate: [
      {
        label: 'Environment Variables & Secrets',
        kind: 'lucide',
        image: 'Rocket',
      },
      { label: 'Production Debugging', kind: 'lucide', image: 'Rocket' },
    ],
  },
  {
    title: 'Tools & Best Practices',
    icon: Wrench,
    advanced: [
      { label: 'Git & GitHub', kind: 'img', image: TECH_ICON.github },
      { label: 'Postman', kind: 'img', image: TECH_ICON.postman },
      { label: 'Reusable Component Patterns', kind: 'img', image: TECH_ICON.react },
    ],
    intermediate: [
      { label: 'ESLint', kind: 'img', image: TECH_ICON.eslint },
      { label: 'Testing (Jest)', kind: 'img', image: TECH_ICON.jest },
    ],
  },
  {
    title: 'Security & Integrations',
    icon: ShieldCheck,
    advanced: [
      { label: 'JWT', kind: 'img', image: TECH_ICON.jwt },
      { label: 'Session Handling', kind: 'lucide', image: 'ShieldCheck' },
    ],
    intermediate: [
      { label: 'API Integrations', kind: 'lucide', image: 'ShieldCheck' },
      { label: 'Access Control (Auth Guards)', kind: 'img', image: TECH_ICON.react },
    ],
  },
];
