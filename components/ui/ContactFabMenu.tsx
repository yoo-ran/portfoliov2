'use client';

import { motion } from 'framer-motion';
import { CONTACT_FAB_ITEMS } from '@/lib/contactFab-data';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function ContactFabMenu() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="fixed bottom-2 right-2 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6 xl:bottom-8 xl:right-8
                 flexCol gap-y-2 z-50"
    >
      {CONTACT_FAB_ITEMS.map((itemData) => {
        const Icon = itemData.icon;

        return (
          <motion.a
            key={itemData.id}
            href={itemData.href}
            target={itemData.external ? '_blank' : undefined}
            rel={itemData.external ? 'noopener noreferrer' : undefined}
            aria-label={itemData.label}
            variants={item}
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fab-item  rounded-full
                       p-2 md:p-3 lg:p-3 xl:p-5
                       bg-highlight shadow-sm/50"
          >
            <Icon className="text-beige w-4 h-4 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-10 xl:h-10" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
