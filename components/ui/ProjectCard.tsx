import Image from 'next/image';
import Link from 'next/link';
import TechChip from './TechChip';
import LinkChip from './LinkChip';
import { Project } from '@/lib/projects/projects-data';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flexCol justify-start gap-y-4 w-full h-full bg-black p-4 text-beige rounded-sm md:rounded-md lg:rounded-lg lg:p-5 xl:p-6 lg:gap-y-5 dark:border-beige">
      <div className="relative w-full aspect-16/9">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top rounded-md"
        />
      </div>
      <div className=" w-full lg:h-1/3 flexCol justify-start gap-y-4 lg:gap-y-2">
        <div className="flexCol  gap-y-1">
          <h3 className="ty-h3 leading-none">{project.title}</h3>
          <span className="ty-body2 italic">
            {project.type} Project · {project.platform}
          </span>
        </div>
        <p className="ty-body1">{project.description}</p>
        <div className="w-full flexRow flex-wrap justify-start gap-1 mt-4">
          {project.techStacks.map((tech, idx) => (
            <TechChip key={`${project.title}-${tech.label}-${idx}`} item={tech} />
          ))}
        </div>
      </div>
      <div className="flexRow justify-end gap-x-2 border-t-2 w-full pt-3 lg:pt-4 ">
        <LinkChip links={project.links} />
      </div>
    </div>
  );
}
