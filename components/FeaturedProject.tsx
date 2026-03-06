import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects-data';

import TechChip from './ui/TechChip';
import LinkChip from './ui/LinkChip';

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <div className="flexCol justify-start gap-y-4 w-full h-full bg-black p-4 text-beige rounded-sm md:rounded-md lg:rounded-lg lg:p-6 xl:p-7 xl:gap-y-5 dark:border-beige">
      <div className="w-full flexCol justify-between gap-4 lg:gap-x-10">
        <div className="flexRow items-start gap-x-3">
          <div className="relative w-full lg:w-1/2 aspect-16/9">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top rounded-md"
            />
          </div>
          <div className="flexCol gap-6 lg:w-1/2">
            <div className="flexCol  gap-y-1">
              <p className="ty-h2 leading-none">{project.title}</p>
              <span className="ty-tech-btn italic ">
                {project.type} Project · {project.platform}
              </span>
            </div>
            <p className="ty-body1">{project.description}</p>
            <div className="w-full flexRow flex-wrap justify-start gap-1 ">
              {project.techStacks.map((tech, idx) => (
                <TechChip key={`${project.title}-${tech.label}-${idx}`} item={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className=" w-fullflexCol justify-start gap-y-2 lg:gap-y-4">
          <div className="hidden md:block">
            <p className="ty-h3">Highlights</p>
            <ul className="flexCol lg:gap-y-1 list-disc ml-4 ty-body1 lg:mt-3">
              <li>
                Implemented secure authentication and session flow for protected
                account-based access
              </li>
              <li>
                Built property upload and edit features with CRUD functionality, making
                listing management more efficient
              </li>
              <li>
                Added Excel import and AG Grid integration to reduce repetitive manual
                entry for large datasets
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flexRow justify-end gap-x-2 border-t-2 w-full pt-3 lg:pt-6 lg:mt-4">
        <LinkChip links={project.links} />
        <Link href={`/projects/${project.slug}`}>View Details</Link>
      </div>
    </div>
  );
}
