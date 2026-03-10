'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import DemoVideo from '../DemoVideo';

export type FeatureDemoItem = {
  title: string;
  caption: string;
  youtubeId: string;
  points: string[];
};

type Props = {
  items: FeatureDemoItem[];
};

function DemoCard({ item }: { item: FeatureDemoItem }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="grid md:grid-cols-2 gap-y-2 gap-x-16 items-center rounded-3xl border p-5 space-y-4 lg:min-h-[30rem] bg-black"
    >
      <DemoVideo youtubeId={item.youtubeId} title={item.title} />

      <div className="flexCol gap-y-4 text-beige">
        <h3 className="ty-body1 lg:text-lg font-bold">{item.title}</h3>
        <p className="ty-body1 opacity-80">{item.caption}</p>
        <ul className="space-y-2">
          {item.points.map((point) => (
            <li key={point} className="ty-body2 opacity-80">
              • {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function DesktopTabs({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hidden md:block space-y-6">
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-4 py-2 ty-body1 transition ${
                isActive
                  ? 'bg-black text-beige border-black'
                  : 'bg-transparent text-black/70 border-black/20 hover:border-black/40 hover:text-black'
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div key={items[activeIndex].title}>
            <DemoCard item={items[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MobileAccordion({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-3 md:hidden">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-3xl border border-black/10"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(isActive ? -1 : index)}
              className="flex w-full items-center justify-between px-4 py-4 text-left bg-white"
            >
              <span className="ty-body1 font-medium">{item.title}</span>
              <span className="text-xl leading-none">{isActive ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className=" bg-black">
                    <DemoCard item={item} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FeatureWalkthroughStack({ items }: Props) {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="ty-body1 mt-3 text-black/70 dark:text-beige/70">
          Demo videos of the main product workflows, showing how users can upload, manage,
          edit, search, and filter property listings in one system.
        </p>
      </div>
      <DesktopTabs items={items} />
      <MobileAccordion items={items} />
    </section>
  );
}
