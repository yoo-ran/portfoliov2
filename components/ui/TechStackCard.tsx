import TechChip from './TechChip';
import { SkillCardData } from '@/lib/skills-data';

export default function TechStacksCard({ data }: { data: SkillCardData }) {
  const Icon = data.icon;

  return (
    <div className="flexCol justify-start gap-y-3 xl:gap-y-6 w-full bg-black p-4 md:p-5 rounded-sm md:rounded-md lg:p-6 xl:p-8 lg:rounded-lg dark:bg-black">
      <div className="flexRow gap-x-2">
        <Icon className="border rounded-sm p-1 text-white" aria-hidden />
        <p className="capitalize ty-h3 text-white">{data.title}</p>
      </div>

      <div className="flexCol gap-y-1">
        <p className="capitalize ty-subtitle text-white">advanced</p>
        <div className="flexRow flex-wrap justify-start gap-0.5 md:gap-1 xl:gap-2">
          {data.advanced.map((item) => (
            <TechChip key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div className="flexCol gap-y-1">
        <p className="capitalize ty-subtitle text-white">intermediate</p>
        <div className="flexRow flex-wrap justify-start gap-0.5 md:gap-1 xl:gap-2">
          {data.intermediate.map((item) => (
            <TechChip key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
