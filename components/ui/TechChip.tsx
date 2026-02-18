import Image from 'next/image';
import { ShieldCheck, Server, Rocket, type LucideIcon } from 'lucide-react';
import { StackItem } from '@/lib/skills-data';

const ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Server,
  Rocket,
};
export default function TechChip({ item }: { item: StackItem }) {
  const isLucide = item.kind === 'lucide';

  return (
    <div className="flexRow gap-x-0.5 bg-beige/70 rounded-sm px-1 py-0.5 dark:bg-black">
      <div className="relative w-4 aspect-square">
        {isLucide ? (
          (() => {
            const Icon = ICON_MAP[item.image];
            return Icon ? (
              <Icon className="w-4 h-4 text-black dark:text-beige" aria-hidden />
            ) : null;
          })()
        ) : (
          <div className="relative w-4 h-4">
            <Image src={item.image} alt={item.label} fill className="object-contain" />
          </div>
        )}
      </div>
      <p className="ty-tech-btn text-black whitespace-nowrap overflow-hidden ">
        {item.label}
      </p>
    </div>
  );
}
