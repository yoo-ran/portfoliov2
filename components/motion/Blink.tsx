'use client';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function Blink({ children }: Props) {
  return (
    <motion.span
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className=""
    >
      {children}
    </motion.span>
  );
}
