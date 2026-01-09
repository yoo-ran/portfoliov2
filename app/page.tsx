import Hero from '@/components/Hero';
import TechStacks from '@/components/TechStacks';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testmonial';

export default function Home() {
  return (
    <main className="flexCol w-full dark:bg-black my-16 px-[1rem] md:px-[2rem] lg:px-[5rem] xl:px-[7.5rem] ">
      <Hero />
      <TechStacks />
      <Projects />
      <Testimonials />
    </main>
  );
}
