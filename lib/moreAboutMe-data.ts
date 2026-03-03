// moreAboutMe.data.ts
import { Code, Rocket, Sparkles, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type MoreAboutMeCardData = {
  icon: LucideIcon; // card title icon
  title: string;
  items: string[]; // 👈 just content
};

export const MORE_ABOUT_ME: MoreAboutMeCardData[] = [
  {
    icon: Code,
    title: 'Coding Philosophy',
    items: [
      'Clarity over complexity in code and experience',
      'Reusable components for consistency and efficiency',
      'Scalable structure built for maintainability',
      'Structured problem-solving with thoughtful execution',
    ],
  },
  {
    icon: Sparkles,
    title: 'Values',
    items: [
      'Clear and honest communication',
      'Consistency in execution, quality, and care',
      'Thoughtfulness in every detail and decision',
      'Curiosity that drives continuous growth',
    ],
  },
  {
    icon: Wrench,
    title: 'How I Build',
    items: [
      'Starting with the user and the problem',
      'Exploring thoughtful solutions to real needs',
      'Translating ideas into practical solutions',
      'Refining through iteration, feedback, and detail',
    ],
  },
  {
    icon: Rocket,
    title: 'What I’m Focused On Right Now',
    items: [
      'Strengthening end-to-end full-stack development',
      'Refining component-driven interfaces and systems',
      'Building scalable and maintainable solutions',
      'Exploring thoughtful AI integration in web experiences',
    ],
  },
];
