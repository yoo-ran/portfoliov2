'use client';

import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

import FilterChip from '@/components/ui/FilterChip';
import Projects from '@/components/Projects';
import { PROJECTS } from '@/lib/projects-data';

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // unique tech labels from your project data
  const techOptions = useMemo(() => {
    const labels = PROJECTS.flatMap((p) => p.techStacks.map((t) => t.label.trim()));
    const unique = Array.from(new Set(labels.map((l) => l.toLowerCase())));

    // keep original casing from first occurrence
    const labelMap = new Map<string, string>();
    labels.forEach((l) => {
      const key = l.toLowerCase();
      if (!labelMap.has(key)) labelMap.set(key, l);
    });

    return unique.map((k) => labelMap.get(k)!).sort((a, b) => a.localeCompare(b));
  }, []);

  const toggleTech = (label: string) => {
    const key = label.toLowerCase().trim();
    const has = selectedTech.some((t) => t.toLowerCase().trim() === key);

    setSelectedTech((prev) =>
      has ? prev.filter((t) => t.toLowerCase().trim() !== key) : [...prev, label],
    );
  };

  const clearAll = () => setSelectedTech([]);

  return (
    <main className="flexCol gap-y-14 lg:gap-y-22 xl:gap-y-26 w-full py-36">
      {/* INTRO */}
      <section className="flexCol gap-y-4 w-full">
        <div className="w-full">
          <p className="text-center ty-subtitle leading-none">Portfolio</p>
          <h2 className="text-center uppercase ty-header-title leading-none">projects</h2>
        </div>
        <div className="ty-body2 text-center w-full">
          Explore some of the personal and team based projects I have built showcasing my
          skills and expertise
        </div>
      </section>

      {/* FILTER CHIPS */}
      <section className="flexRow gap-x-4 justify-center w-full">
        <SlidersHorizontal className="w-4" />

        <div className="flex flex-wrap gap-2">
          <FilterChip
            label="All"
            isActive={selectedTech.length === 0}
            onClick={clearAll}
          />

          {techOptions.map((label) => {
            const active = selectedTech.some(
              (t) => t.toLowerCase().trim() === label.toLowerCase().trim(),
            );

            return (
              <FilterChip
                key={label}
                label={label}
                isActive={active}
                onClick={() => toggleTech(label)}
              />
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <Projects selectedTech={selectedTech} />
    </main>
  );
}
