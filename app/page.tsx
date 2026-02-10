import { PROJECTS } from '@/lib/projects-data';
import Reveal from '@/components/motion/RevealScroll';

import Hero from '@/components/Hero';
import TechStacks from '@/components/TechStacks';
import Projects from '@/components/Projects';
import FeaturedProject from '@/components/FeaturedProject';
import Testimonials from '@/components/Testmonial';

export default function Home() {
  const featured = PROJECTS[0];

  return (
    <section className="flexCol gap-y-12 w-full dark:bg-black mt-16">
      <Hero />
      <Reveal>
        <div className="flexCol gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 w-full">
          <h2 className="ty-h2">Tech Stacks</h2>
          <TechStacks />
        </div>
      </Reveal>
      <Reveal>
        <div className="flexCol gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 w-full">
          <h2 className="ty-h2">Projects</h2>
          {/* project[0] */}
          <FeaturedProject project={featured} />

          {/* project[1], project[2] */}
          <Projects startIndex={1} limit={2} />
        </div>
      </Reveal>
      <Reveal>
        <div className="flexCol gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 w-full">
          <h2 className="ty-h2">Testimonials</h2>
          <Testimonials />
        </div>
      </Reveal>
    </section>
  );
}
