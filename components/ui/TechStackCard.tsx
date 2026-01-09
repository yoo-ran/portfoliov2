import { Monitor } from 'lucide-react';
import TechChip from './TechChip';
import { SkillCardData } from '@/lib/skills-data';

export default function TechStacksCard({ data }: { data: SkillCardData }) {
  return (
    <section className="flexCol gap-y-3 w-full border bg-black p-4 rounded-sm dark:bg-black">
      <div className="flexRow gap-x-2">
        <Monitor className="border rounded-sm p-1 text-white" />
        <p className="capitalize ty-h3 text-white">{data.title}</p>
      </div>

      <div className="flexCol gap-y-1">
        <p className="capitalize ty-subtitle text-white">advanced</p>
        <div className="flexRow gap-x-0.5">
          {data.advanced.map((item) => (
            <TechChip key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="flexCol gap-y-1">
        <p className="capitalize ty-subtitle text-white">intermediate</p>
        <div className="flexRow gap-x-0.5">
          {data.intermediate.map((item) => (
            <TechChip key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
