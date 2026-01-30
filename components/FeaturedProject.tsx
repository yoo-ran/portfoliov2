import Image from 'next/image';
import { Project } from '@/lib/projects-data';

import TechChip from './ui/TechChip';
import LinkChip from './ui/LinkChip';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flexCol justify-start gap-y-4 w-full bg-black p-4 text-beige rounded-sm md:rounded-md lg:rounded-lg lg:p-6 xl:p-7 xl:gap-y-5 dark:border-beige">
      <div className="w-full flexCol md:flex-row justify-between gap-4 lg:gap-x-10">
        <div className="relative w-full lg:w-1/2 aspect-16/9">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top rounded-md"
          />
        </div>
        <div className=" w-full lg:w-1/2 h-1/3 flexCol justify-start gap-y-2 lg:gap-y-4">
          <div className="flexRow justify-start gap-x-2">
            <p className="ty-h2 leading-none">{project.title}</p>
            <span className="ty-tech-btn ">({project.type} Project)</span>
          </div>
          <p className="ty-body2">{project.description}</p>
          <div className="w-full flexRow flex-wrap justify-start gap-1 mt-4">
            {project.techStacks.map((tech, idx) => (
              <TechChip key={`${project.title}-${tech.label}-${idx}`} item={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="ty-h3">Key Features</p>
        <ul className="list-disc ml-4 ty-body2">
          <li>
            Login / Logout: Impelemented secure user authentication using JWT and session
            management
          </li>
          <li>
            Upload Property: Created a input form to save property details with image
            uploads in the database
          </li>
          <li>
            Login / Logout: Impelemented secure user authentication using JWT and session
            management
          </li>
          <li>
            Excel Upload: Built Excel upload and AG-Grid table integration for bulk
            property import, editing and database sync.
          </li>
          <li>
            Property Detail: Implemented editable property pages withe CRUD feautures.
          </li>
          <li>
            Search / Filter: Designed an advanced filters and keyword search for quick
            access
          </li>
        </ul>
      </div>
      <div className="flexRow justify-end gap-x-2 border-t-2 w-full pt-3 lg:pt-4">
        <LinkChip links={project.links} />
      </div>
    </div>
  );
}
