import TechStacksCard from './ui/TechStackCard';
import { SKILL_CARDS } from '@/lib/skills-data';

export default function TechStacks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 w-full dark:bg-black">
      {SKILL_CARDS.map((card) => (
        <TechStacksCard key={card.title} data={card} />
      ))}
    </div>
  );
}
