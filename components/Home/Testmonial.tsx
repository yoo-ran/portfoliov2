'use client';

import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { TESTIMONIALS } from '../../lib/testimonials-data';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

function wrapIndex(i: number, len: number) {
  return ((i % len) + len) % len;
}

const SWIPE_THRESHOLD = 90;

export default function TestimonialCarousel() {
  const total = TESTIMONIALS.length;
  const isMdUp = useMediaQuery('(min-width: 768px)');
  const perView = isMdUp ? 2 : 1;

  // Desktop peek needs +1 card rendered
  const renderCount = Math.min(isMdUp ? perView + 1 : perView, total);
  const step = Math.min(perView, total);

  const reduceMotion = useReducedMotion();
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const prev = () => setIndex(([i]) => [wrapIndex(i - step, total), -1]);
  const next = () => setIndex(([i]) => [wrapIndex(i + step, total), 1]);

  const visible = useMemo(() => {
    return Array.from(
      { length: renderCount },
      (_, k) => TESTIMONIALS[(index + k) % total],
    );
  }, [index, renderCount, total]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 70 : -70, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -70 : 70, opacity: 0 }),
  };

  return (
    <div className="relative w-full ">
      {/* 
        Desktop “peek” trick:
        - constrain visible area to a fixed-ish width (so 2 cards fit + a bit)
        - overflow-hidden clips, so the 3rd card peeks in
      */}
      <div className="relative overflow-hidden md:mx-auto md:max-w-10/12">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={`${index}-${perView}`}
            custom={direction}
            variants={reduceMotion ? {} : variants}
            initial={reduceMotion ? false : 'enter'}
            animate={reduceMotion ? { opacity: 1 } : 'center'}
            exit={reduceMotion ? undefined : 'exit'}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            // Swipe/drag only on mobile
            drag={isMdUp ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (isMdUp) return;
              const swipe = info.offset.x;
              if (swipe < -SWIPE_THRESHOLD) next();
              if (swipe > SWIPE_THRESHOLD) prev();
            }}
            className={isMdUp ? 'flex gap-4' : 'w-full'}
          >
            {visible.map((t, i) => (
              <div
                key={`${t.author}-${i}`}
                className={[
                  'flexCol justify-between gap-y-5 border border-2 rounded-sm p-6',
                  'h-[20rem] md:h-[20rem] lg:h-[24rem]',
                  isMdUp ? 'shrink-0 w-[30rem]' : 'w-full',
                ].join(' ')}
              >
                <Quote />
                <p className="ty-body1 italic line-clamp-7 text-ellipsis h-full overflow-y-auto">
                  "{t.quote}"
                </p>
                <div className="ty-body1 font-semibold leading-none">
                  <p>{t.author}</p>
                  <p className="ty-body2 opacity-70">{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-4 w-full">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="hover:opacity-60 hover:cursor-pointer
          "
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="hover:opacity-60 hover:cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
