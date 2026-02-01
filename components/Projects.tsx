import { PROJECTS } from '@/lib/projects-data';
import ProjectCard from './ui/ProjectCard';

type Props = {
  selectedTech?: string[]; // used on Projects page
  startIndex?: number; // used on Home page
  limit?: number; // used on Home page
};

export default function Projects({ selectedTech = [], startIndex = 0, limit }: Props) {
  const normalized = selectedTech.map((t) => t.toLowerCase().trim());

  const filtered =
    normalized.length === 0
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.techStacks.some((t) => normalized.includes(t.label.toLowerCase().trim())),
        );

  const sliced =
    limit != null
      ? filtered.slice(startIndex, startIndex + limit)
      : filtered.slice(startIndex);

  if (sliced.length === 0) {
    return (
      <div className="w-full py-10 text-center ty-body2 opacity-70">
        No projects to show.
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      {sliced.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
