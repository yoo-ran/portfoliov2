// moreAboutMe.data.ts
import { Code, Sparkles } from 'lucide-react';
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
      'Clean and maintainable code',
      'Readable over clever',
      'Consistent patterns & naming',
      'Small components, clear responsibility',
    ],
  },
  {
    icon: Sparkles,
    title: 'Values',
    items: [
      'Empathy-first UX',
      'Always learning and improving',
      'Empathy-first UX',
      'Always learning and improving',
    ],
  },
];
