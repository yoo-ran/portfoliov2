'use client';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type ProjectNavItem = {
  id: string;
  label: string;
};

type Props = {
  items: ProjectNavItem[];
};

export default function ProjectSubmenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // show after 300px
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed top-4 right-0 z-50 hidden md:block top-30 right-0 text-beige rounded-l-lg overflow-hidden"
        >
          <nav>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`text-sm  font-medium flexCol h-full w-full cursor-pointer px-3 py-3 bg-black/80 transition-transform hover:bg-black
                ${isOpen ? 'translate-x-30 rounded-l-lg' : 'translate-x-0 '}`}
              aria-expanded={isOpen}
              aria-controls="project-submenu"
            >
              {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>

            <div
              id="project-submenu"
              className={`bg-black/80 transition-transform ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
            >
              <ul className="flexCol gap-2 overflow-x-auto p-4">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="whitespace-nowrap ty-subtitle text-base  hover:border-b"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
