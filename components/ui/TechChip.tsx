import Image from 'next/image';
import { ShieldCheck, Server, Rocket, type LucideIcon } from 'lucide-react';
import { StackItem } from '@/lib/skills-data';

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Server,
  Rocket,
};

type TechChipProps = {
  item: StackItem;
  borderColor?: string;
};

export default function TechChip({
  item,
  borderColor = 'border-black dark:border-beige',
}: TechChipProps) {
  const isLucide = item.kind === 'lucide';

  return (
    <div
      className={`flexRow gap-x-0.5 rounded-sm border p-1 md:py-0 lg:px-1.5 bg-beige/70 dark:bg-black ${borderColor}`}
    >
      <div className="relative aspect-square w-4">
        {isLucide ? (
          (() => {
            const Icon = ICON_MAP[item.image];
            return Icon ? (
              <Icon className="h-4 w-4 text-black dark:text-beige" aria-hidden />
            ) : null;
          })()
        ) : (
          <div className="relative h-4 w-4">
            <Image src={item.image} alt={item.label} fill className="object-contain" />
          </div>
        )}
      </div>

      <p className="ty-tech-btn whitespace-nowrap overflow-hidden text-black dark:text-beige p-1 md:p-0.5 ">
        {item.label}
      </p>
    </div>
  );
}
