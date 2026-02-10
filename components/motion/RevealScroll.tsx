'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

type Props = {
  children: React.ReactNode;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  direction = 'up', // ✅ default animation
  distance = 24,
  duration = 0.6,
  once = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -120px 0px',
    amount: 0.2,
  });

  // 🔑 Compute initial position based on direction
  const hidden = (() => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  })();

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : hidden}
      transition={{ duration, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
