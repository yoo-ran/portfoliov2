'use client';

import { useEffect } from 'react';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div
      id="mobileMenu"
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      {/* Panel */}
      <aside
        className={`flexCol absolute top-0 right-0 h-screen w-full bg-beige p-6 shadow-lg transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flexRow w-full">
          <span className="font-semibold font-logo text-2xl">YR</span>
          <button
            id="closeBtn"
            onClick={onClose}
            className="flexRow justify-center w-10 h-10 rounded-full border-2 font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className=" flexCol gap-3 h-full">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="uppercase ty-header-title font-black hover:underline"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flexCol gap-y-4 ">
          <div className="flexCol">
            <strong>Email Address</strong>
            <a href="mailto:yuranm80@gmail.com">yuranm80@gmail.com</a>
          </div>

          <div className="flexRow justify-start gap-x-2 font-bold">
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
