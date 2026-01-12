import TechStacksCard from './ui/TechStackCard';
import { SKILL_CARDS } from '@/lib/skills-data';

export default function TechStacks() {
  return (
    <section className="flexCol gap-y-3 w-full dark:bg-black">
      <h2 className="ty-h2">Tech Stacks</h2>
      <div className="w-full flexCol gap-3 md:flex-row justify-start lg:gap-6">
        {SKILL_CARDS.map((card) => (
          <TechStacksCard key={card.title} data={card} />
        ))}
      </div>
    </section>
  );
}
