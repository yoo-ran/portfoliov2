import { Braces, Database, type LucideIcon } from 'lucide-react';

// Reusable types
export type StackItem = {
  label: string;
  image: string; // per-chip icon (or you can set to null if you want)
};

export type SkillLevels = {
  stacks: StackItem[]; // chips
};

export type SkillCardData = {
  title: string;
  icon: LucideIcon;
  advanced: StackItem[];
  intermediate: StackItem[];
};

// Example data
export const SKILL_CARDS: SkillCardData[] = [
  {
    title: 'Frontend',
    icon: Braces,
    advanced: [
      { label: 'HTML', image: '/images/techStacks/html5.png' },
      { label: 'CSS', image: '/images/techStacks/html5.png' },
      { label: 'Tailwind', image: '/images/techStacks/html5.png' },
      { label: 'React', image: '/images/techStacks/html5.png' },
    ],
    intermediate: [
      { label: 'Next.js', image: '/images/techStacks/html5.png' },
      { label: 'TypeScript', image: '/images/techStacks/html5.png' },
      { label: 'Framer Motion', image: '/images/techStacks/html5.png' },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    advanced: [
      { label: 'Node.js', image: '/images/techStacks/html5.png' },
      { label: 'Express', image: '/images/techStacks/html5.png' },
    ],
    intermediate: [
      { label: 'Prisma', image: '/images/techStacks/html5.png' },
      { label: 'PostgreSQL', image: '/images/techStacks/html5.png' },
      { label: 'MySQL', image: '/images/techStacks/html5.png' },
    ],
  },
];
