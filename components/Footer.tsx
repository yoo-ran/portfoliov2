'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { NAV } from '@/lib/constant/nav';

function normalizePath(path: string) {
  if (path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="w-11/12 md:w-10/12 flexCol lg:mt-20">
      <section className="py-4 md:py-10 flexCol sm:flex-row sm:justify-between w-full gap-y-4">
        <div className="sm:w-1/2 md:w-5/12 space-y-2 xl:space-3">
          <h2 className="ty-h2">Yooran Kim</h2>
          <p className="ty-body2 hidden sm:block">
            As a front-end developer, I thrive on the challenge of transforming concepts
            into tangible, interactive solutions.{' '}
          </p>
        </div>
        <div className="flexCol lg:gap-y-2 xl:gap-y-4 w-3/8 md:w-1/2 ">
          <h3 className="ty-h3">Menu</h3>
          <nav className="flexCol lg:gap-y-2 xl:gap-y-3  uppercase">
            {NAV.map((item) => {
              const active = normalizePath(pathname) === normalizePath(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative ty-body2 hover:text-highlight"
                >
                  <span className="relative z-10">{item.label}</span>

                  {active && (
                    <motion.span
                      layoutId="footer-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black/80"
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
      <section className="w-full xl:space-y-2 border-t-1 py-4 md:py-10 flexCol sm:items-center">
        <p className="ty-body2">&copy; 2025 Yooran Kim. All right reserved.</p>
        <span className="ty-tech-btn">
          Built using Next.js, Typescript, Tailwind CSS and Framer Motion :)
        </span>
      </section>
    </div>
  );
}
