'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="fixed top-4 flexRow border rounded-sm w-10/12 px-4 py-1 ">
      <p className="font-logo font-bold italic text-lg md:text-xl lg:text-2xl">YR</p>
      <section className="hidden md:block">
        <nav className="flexRow gap-x-2 lg:gap-x-4  uppercase font-black font-title text-md lg:text-xl">
          <a className="hover:underline" href="#">
            Home
          </a>
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            projects
          </a>
        </nav>
      </section>

      <button
        id="menuBtn"
        onClick={() => setMenuOpen(true)}
        className="md:hidden flexCol gap-y-0.5"
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="mobileMenu"
      >
        <p className="bg-stone-900 w-4 h-0.5 rounded-sm"></p>
        <p className="bg-stone-900 w-4 h-0.5 rounded-sm"></p>
        <p className="bg-stone-900 w-4 h-0.5 rounded-sm"></p>
      </button>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}
