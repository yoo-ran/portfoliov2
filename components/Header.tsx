'use client';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export default function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-4 lg:top-12 xl:top-12 z-50 flexRow border rounded-md w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 py-1 lg:py-2 xl:px-5 xl:py-3 backdrop-blur-md">
      <p className="font-logo font-bold italic text-lg md:text-xl lg:text-2xl">YR</p>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-x-2 lg:gap-x-2 uppercase font-black font-title text-md lg:text-xl">
        <a className="hover:underline" href="#home">
          Home
        </a>
        <a className="hover:underline" href="#about">
          About
        </a>
        <a className="hover:underline" href="#projects">
          Projects
        </a>
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
