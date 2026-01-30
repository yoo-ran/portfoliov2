// MoreAboutMeCard.tsx
import type { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export default function MoreAboutMeCard({ icon: TitleIcon, title, items }: Props) {
  return (
    <div className="flexCol gap-y-3 xl:gap-y-6 w-full md:w-1/2 bg-black p-4 rounded-sm md:p-5 lg:p-6 xl:p-8 md:rounded-md lg:rounded-lg">
      <div className="flexRow gap-x-2">
        <TitleIcon className="border rounded-sm p-1 text-white" />
        <p className="capitalize ty-h3 text-white">{title}</p>
      </div>

      <ul className="flexCol gap-y-1 xl:gap-y-2 text-white pl-1">
        {items.map((content, idx) => (
          <li key={idx} className="flexRow gap-x-3">
            <TitleIcon className="w-4 h-4" />
            <p className="ty-body1">{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
