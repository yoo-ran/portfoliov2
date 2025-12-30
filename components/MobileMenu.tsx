'use client';
import { useState } from 'react';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobileMenu"
      className={`fixed flexCol justify-between top-0 right-0 z-50 h-full w-full bg-white p-6 shadow-lg  md:hidden transform transition-transform duration-300 ease-in-out
      ${open ? 'translate-x-0' : 'translate-x-full'}
      `}
      role="dialog"
      aria-modal="true"
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

      <nav className="flexCol gap-y-2  uppercase font-black font-title text-2xl">
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
      <div className="flexCol gap-y-4">
        <div className="flexCol">
          <strong>Email Address</strong>
          <a href="#">yuranm80@gmail.com</a>
        </div>
        <div className="flexRow justify-start gap-x-2 font-bold">
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
        </div>
      </div>
    </div>
  );
}
