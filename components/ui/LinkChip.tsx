import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Props = {
  links: {
    github?: string;
    detail?: string;
  };
};

export default function LinkChip({ links }: Props) {
  const items = [
    links.github && {
      label: 'GitHub',
      href: links.github,
      isExternal: true,
    },
    links.detail && {
      label: 'View Detail',
      href: `/projects/${links.detail}`,
      isExternal: false,
    },
  ].filter(Boolean) as {
    label: string;
    href: string;
    isExternal: boolean;
  }[];

  return (
    <>
      {items.map((item) =>
        item.isExternal ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flexRow xl:gap-x-3 border rounded-sm px-2 py-1 md:px-3 md:py-1.5 xl:px-4 xl:py-3  hover:bg-beige hover:text-black transition"
          >
            <p className="ty-body2 capitalize">{item.label}</p>
            <ChevronRight className="w-4 h-4" />
          </a>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="flexRow xl:gap-x-3 border rounded-sm px-2 py-1 md:px-3 md:py-1.5 xl:px-4 xl:py-3  hover:bg-beige hover:text-black transition"
          >
            <p className="ty-body2 capitalize">{item.label}</p>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ),
      )}
    </>
  );
}
