'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export default function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 lg:top-12 xl:top-12 z-50 flexRow border rounded-md w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-1 lg:py- xl:px-4 xl:py-3 backdrop-blur-md">
      <p className="font-logo font-bold italic text-lg md:text-xl lg:text-2xl">YR</p>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-x-2 lg:gap-x-2 uppercase  ">
        {NAV.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 ty-body2 font-black font-title text-md lg:text-xl"
            >
              <span className="relative z-10">{item.label}</span>

              {active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 bottom-1 h-[2px] bg-black"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <button
        id="menuBtn"
        onClick={onToggleMenu}
        className="md:hidden ml-auto flexCol gap-y-0.5"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        aria-controls="mobileMenu"
      >
        <span className="bg-stone-900 w-4 h-0.5 rounded-sm" />
        <span className="bg-stone-900 w-4 h-0.5 rounded-sm" />
        <span className="bg-stone-900 w-4 h-0.5 rounded-sm" />
      </button>
    </header>
  );
}
