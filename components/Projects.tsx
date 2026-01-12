import { PROJECTS } from '@/lib/projects-data';
import ProjectCard from './ui/ProjectCard';
import FeaturedProject from './FeaturedProject';

export default function Projects() {
  const featuredProject = PROJECTS[0];
  const restProjects = PROJECTS.slice(1);

  return (
    <section className="flexCol gap-y-3 w-full dark:bg-black">
      <h2 className="ty-h2">Projects</h2>
      <FeaturedProject project={featuredProject} />
      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        {restProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
