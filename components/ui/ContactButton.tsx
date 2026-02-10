'use client';

import { motion } from 'framer-motion';

export default function ContactBtn() {
  return (
    <motion.button
      whileHover={{ backgroundColor: 'highlight', color: 'black' }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="
        px-5 py-1
        md:px-6 md:py-2
        lg:px-7 lg:py-3
        xl:px-12 xl:py-6
        border-2 rounded-sm md:rounded-md
        bg-black text-beige ty-button
        dark:bg-beige dark:text-black
        hover:cursor-pointer
      "
    >
      Contact
    </motion.button>
  );
}
