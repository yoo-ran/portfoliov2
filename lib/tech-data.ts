import { PROJECTS } from './projects-data';

export type TechFilter = {
  label: string;
  image?: string; // optional (use first seen image)
};

export const TECH_FILTERS: TechFilter[] = Array.from(
  new Map(
    PROJECTS.flatMap((p) => p.techStacks).map((t) => [
      t.label.toLowerCase(), // key (normalize)
      { label: t.label, image: t.image }, // value
    ]),
  ).values(),
);
