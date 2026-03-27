'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { NAV } from '@/lib/constant/nav';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export default function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
    flexRow border rounded-md
    w-[20%] md:w-[30%] lg:w-[20%] xl:w-[24%]
    px-4 py-1 xl:px-4 xl:py-3
    backdrop-blur-md"
    >
      <Link
        key={'/'}
        href={'/'}
        className="font-logo font-bold italic text-md md:text-xl lg:text-3xl hover:text-highlight"
      >
        YR
      </Link>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-x-2 xl:gap-x-3 uppercase  ">
        {NAV.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 ty-body2 font-black font-title text-md lg:text-xl xl:text-2xl hover:text-highlight"
            >
              <span className="relative z-10">{item.label}</span>

              {active && (
                <motion.span
                  layoutId="header-underline"
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
