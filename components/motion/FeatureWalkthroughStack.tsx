'use client';

import { motion } from 'framer-motion';

export type FeatureDemoItem = {
  title: string;
  caption: string;
  youtubeId: string;
  points: string[];
};

type Props = {
  items: FeatureDemoItem[];
};

function DemoCard({ item, index }: { item: FeatureDemoItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="grid grid-cols-2 gap-x-16 items-center rounded-3xl border p-5 space-y-4 lg:min-h-[30rem] bg-black"
    >
      <div className="overflow-hidden rounded-2xl border h-full">
        <div className="relative aspect-video w-full h-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${item.youtubeId}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flexCol gap-y-4 text-beige">
        <h3 className="text-xl font-medium">{item.title}</h3>
        <p className="mt-2 leading-7 opacity-80">{item.caption}</p>
        <ul className="space-y-2">
          {item.points.map((point) => (
            <li key={point} className="opacity-80">
              • {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function DesktopStack({ items }: Props) {
  return (
    <div className="relative hidden md:block">
      <div className="space-y-24">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="sticky top-24"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{
              zIndex: items.length - index,
            }}
          >
            <div
              className="mx-auto max-w-5xl"
              style={{
                transform: `translateY(${index * 10}px)`,
              }}
            >
              <DemoCard item={item} index={index} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MobileList({ items }: Props) {
  return (
    <div className="grid gap-6 md:hidden">
      {items.map((item, index) => (
        <DemoCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}

export default function FeatureWalkthroughStack({ items }: Props) {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="ty-h3 font-semibold">Core Workflows</h2>
        <p className="mt-3 leading-7 text-black/70 dark:text-beige/70">
          A walkthrough of the main product flows built for property upload, bulk data
          handling, editing, search, and filtering.
        </p>
      </div>

      <DesktopStack items={items} />
      <MobileList items={items} />
    </section>
  );
}
