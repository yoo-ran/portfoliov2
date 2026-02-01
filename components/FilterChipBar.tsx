'use client';

import FilterChip from '@/components/ui/FilterChip';
import { TECH_FILTERS } from '@/lib/tech-data';
type Props = {
  selected: string[]; // labels
  onChange: (next: string[]) => void;
};

export default function FilterChipBar({ selected, onChange }: Props) {
  const toggle = (label: string) => {
    const key = label.toLowerCase();
    const has = selected.some((s) => s.toLowerCase() === key);

    if (has) {
      onChange(selected.filter((s) => s.toLowerCase() !== key));
    } else {
      onChange([...selected, label]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <FilterChip
        label="All"
        isActive={selected.length === 0}
        onClick={() => onChange([])}
      />

      {TECH_FILTERS.map((t) => (
        <FilterChip
          key={t.label}
          label={t.label}
          isActive={selected.some((s) => s.toLowerCase() === t.label.toLowerCase())}
          onClick={() => toggle(t.label)}
        />
      ))}
    </div>
  );
}
