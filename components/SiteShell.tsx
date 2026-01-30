'use client';

import { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <main>{children}</main>
    </>
  );
}
