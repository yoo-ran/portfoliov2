import type { LucideIcon } from 'lucide-react';
import { Braces, Globe, Database, Wrench, Layers } from 'lucide-react';

// Reusable types
export type StackItem = {
  label: string;
  icon: LucideIcon; // per-chip icon (or you can set to null if you want)
};

export type SkillLevels = {
  icon: LucideIcon; // icon for the level row (Advanced/Intermediate)
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
      { label: 'HTML', icon: Globe },
      { label: 'CSS', icon: Globe },
      { label: 'Tailwind', icon: Globe },
      { label: 'React', icon: Braces },
    ],
    intermediate: [
      { label: 'Next.js', icon: Braces },
      { label: 'TypeScript', icon: Braces },
      { label: 'Framer Motion', icon: Braces },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    advanced: [
      { label: 'Node.js', icon: Wrench },
      { label: 'Express', icon: Wrench },
    ],
    intermediate: [
      { label: 'Prisma', icon: Database },
      { label: 'PostgreSQL', icon: Database },
      { label: 'MySQL', icon: Database },
    ],
  },
];
