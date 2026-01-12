import { ChevronRight } from 'lucide-react';
type Props = {
  links: {
    github?: string;
    live?: string;
  };
};

export default function LinkChip({ links }: Props) {
  return (
    <>
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flexRow justify-center py-0.5 pl-3 pr-1 lg:py-1 lg:pl-5 lg:pr-3 border rounded-sm hover:bg-black hover:text-white transition"
        >
          <p className="ty-body2 capitalize ">github</p>
          <ChevronRight className="w-4 h-4  " />
        </a>
      )}
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flexRow justify-center py-0.5 pl-3 pr-1 lg:py-1 lg:pl-5 lg:pr-3 border rounded-sm hover:bg-black hover:text-white transition"
        >
          <p className="ty-body2 capitalize ">Live Site</p>
          <ChevronRight className="w-4 h-4  " />
        </a>
      )}
    </>
  );
}
