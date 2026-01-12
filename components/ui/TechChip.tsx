import Image from 'next/image';
import { StackItem } from '@/lib/skills-data';

export default function TechChip({ item }: { item: StackItem }) {
  return (
    <div className="flexRow gap-x-0.5 bg-beige/70 rounded-sm px-1 py-0.5 dark:bg-black">
      <div className="relative w-4 aspect-square">
        <Image
          src="/images/techStacks/html5.png"
          alt="Hero"
          fill
          className="object-cover "
        />
      </div>
      <p className="ty-tech-btn text-black">{item.label}</p>
    </div>
  );
}
