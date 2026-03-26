import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
type Props = {
  links: {
    github?: string;
    detail?: string;
  };
};

export default function LinkChip({ links }: Props) {
  return (
    <>
      {links.github && (
        <a
          href={links.github}
          rel="noopener noreferrer"
          className="flexRow justify-center py-1.5 pl-5 pr-3 lg:py-1 lg:pl-5 lg:pr-3 border rounded-sm hover:bg-black hover:text-white transition"
        >
          <p className="ty-body2 capitalize ">github</p>
          <ChevronRight className="w-4 h-4  " />
        </a>
      )}

      {links.detail && (
        <Link
          href={`/projects/${links.detail}`}
          rel="noopener noreferrer"
          className="flexRow justify-center py-1.5 pl-5 pr-3 lg:py-1 lg:pl-5 lg:pr-3 border rounded-sm hover:bg-black hover:text-white transition"
        >
          <p className="ty-body2 capitalize ">View Detail</p>
          <ChevronRight className="w-4 h-4  " />
        </Link>
      )}
    </>
  );
}
