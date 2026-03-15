'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'vertical' | 'horizontal' | 'both';

type FloatingMotionProps = {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

export default function FloatingMotion({
  children,
  direction = 'vertical',
  distance = 10,
  duration = 2,
  delay = 0,
  className = '',
}: FloatingMotionProps) {
  const animate =
    direction === 'vertical'
      ? { y: [0, -distance, 0] }
      : direction === 'horizontal'
        ? { x: [0, distance, 0] }
        : {
            x: [0, distance, 0],
          };

  return (
    <motion.div
      className={className}
      animate={animate}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
