import TechStacksCard from './ui/TechStackCard';
import { SKILL_CARDS } from '@/lib/skills-data';

export default function TechStacks() {
  return (
    <div className="flexCol gap-3 md:flex-row justify-start lg:gap-6 w-full dark:bg-black">
      {SKILL_CARDS.map((card) => (
        <TechStacksCard key={card.title} data={card} />
      ))}
    </div>
  );
}
