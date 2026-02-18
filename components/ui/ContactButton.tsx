'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type Props = {
  label: string;
  icon?: LucideIcon;
  href?: string;
  target?: '_blank' | '_self';
  onClick?: () => void;
  className?: string;
};

export default function ContactBtn({
  label,
  icon: Icon,
  href,
  target = '_self',
  onClick,
  className = '',
}: Props) {
  const base = `
    inline-flex items-center justify-center gap-2
    px-5 py-1 md:px-6 md:py-2 lg:px-7 lg:py-3 xl:px-12 xl:py-6
    border-2 rounded-sm md:rounded-md
    bg-black text-beige ty-button
    dark:bg-beige dark:text-black
    hover:cursor-pointer
    hover:bg-highlight hover:text-black
    dark:hover:bg-highlight dark:hover:text-black
  `;

  const content = (
    <>
      {Icon ? <Icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" /> : null}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={base + ' ' + className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={base + ' ' + className}
    >
      {content}
    </motion.button>
  );
}
