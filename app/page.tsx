import { PROJECTS } from '@/lib/projects-data';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/motion/RevealScroll';

import Hero from '@/components/Home/Hero';
import TechStacks from '@/components/TechStacks';
import Projects from '@/components/Projects';
import FeaturedProject from '@/components/FeaturedProject';
import Testimonials from '@/components/Home/Testmonial';

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
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 w-full">
            <div className="col-span-2 w-full">
              {/* project[0] */}
              <FeaturedProject project={featured} />
            </div>

            <div className="col-span-1 w-full">
              <ProjectCard key={PROJECTS[1].title} project={PROJECTS[1]} />
            </div>
          </div>
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
