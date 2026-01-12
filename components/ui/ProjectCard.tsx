import Image from 'next/image';
import TechChip from './TechChip';
import LinkChip from './LinkChip';
import { Project } from '@/lib/projects-data';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flexCol justify-between gap-y-4 w-full bg-black p-4 text-beige rounded-sm md:rounded-md lg:rounded-lg lg:p-5 xl:p-6 lg:gap-y-5 dark:border-beige">
      <div className="relative w-full aspect-16/9">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top rounded-md"
        />
      </div>
      <div className=" w-full h-1/3 flexCol justify-start gap-y-2">
        <div className="flexRow justify-start gap-x-2">
          <p className="ty-h3 leading-none">{project.title}</p>
          <span className="ty-tech-btn ">({project.type} Project)</span>
        </div>
        <p className="ty-body2">{project.description}</p>
        <div className="w-full flexRow flex-wrap justify-start gap-1 mt-4">
          {project.techStacks.map((tech) => (
            <TechChip item={tech} />
          ))}
        </div>
      </div>
      <div className="flexRow justify-end gap-x-2 border-t-2 w-full pt-3 lg:pt-4 ">
        <LinkChip links={project.links} />
      </div>
    </div>
  );
}
