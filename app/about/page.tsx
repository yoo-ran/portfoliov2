'use client';

import Reveal from '@/components/motion/RevealScroll';
import FadeUp from '@/components/motion/FadeUp';

import TechStacksCard from '@/components/ui/TechStackCard';
import MoreAboutMeCard from '@/components/ui/MoreAboutMeCard';

import { MORE_ABOUT_ME } from '@/lib/moreAboutMe-data';
import { SKILL_CARDS } from '@/lib/skills-data';
import { EDUCATION } from '@/lib/education-data';
import { EXPERIENCE } from '@/lib/experience-data';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flexCol gap-y-14 lg:gap-y-30 xl:gap-y-26 w-10/12 mx-auto py-36">
      {/* HERO SECTION */}
      <section className="flexRow gap-y-4 w-10/12 self-center">
        <FadeUp>
          <div className="flexCol w-full space-y-6">
            <div>
              <p className="ty-header lg:text-[5rem] leading-none flexRow items-end gap-x-4">
                Hi, my <br />
                name is <h1 className="font-logo font-bold leading-none">Yooran</h1>
              </p>
            </div>
            <div className="w-full md:w-2/3 ty-subtitle">
              I build web experiences with a strong focus on usability, consistency, and
              clean implementation.
            </div>
          </div>
        </FadeUp>

        <div className="relative w-1/4 aspect-3/4 md:w-1/5 lg:w-1/3">
          <Image
            src="/images/heroImage.png"
            alt="Hero"
            fill
            className="object-cover -z-10"
            priority
          />
        </div>
      </section>

      {/* BIO SECTION */}
      <Reveal>
        <section className="flexCol w-full md:flex-row md:justify-between gap-y-2">
          <div className="flexRow justify-start gap-x-2 w-2/12">
            <p className="bg-black w-3 h-3"></p>
            <h2 className="ty-h2 capitalize">bio</h2>
          </div>
          <div className="ty-body1 w-full md:w-2/3">
            I’m a full-stack developer focused on building digital experiences that are
            clear, functional, and thoughtfully crafted. I enjoy working across both
            frontend and backend, from creating intuitive interfaces to building reliable
            systems that support them. I believe good products should be technically
            solid, easy to use, and refined in the details.
          </div>
        </section>
      </Reveal>

      {/* EDUCATION SECTION */}
      <Reveal>
        <section className="flexCol w-full md:flex-row md:justify-between gap-y-2">
          <div className="flexRow justify-start gap-x-2">
            <p className="bg-black w-3 h-3"></p>
            <h2 className="ty-h2 capitalize">education</h2>
          </div>
          <div className="flex flex-col gap-6 md:w-2/3">
            {EDUCATION.map((item) => (
              <div key={item.id} className="flex flex-col gap-1">
                <p className="ty-body1 font-bold">{item.title}</p>

                <div className="flex items-baseline justify-between gap-6">
                  <p className="ty-body2 opacity-80">{item.school}</p>
                  <p className="ty-body2 whitespace-nowrap opacity-80">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* EXPERIENCE SECTION */}
      <Reveal>
        <section className="flexCol w-full md:flex-row md:justify-between gap-y-2">
          <div className="flexRow justify-start gap-x-2">
            <p className="bg-black w-3 h-3"></p>
            <h2 className="ty-h2 capitalize">experience</h2>
          </div>
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            {EXPERIENCE.map((item) => (
              <div key={item.id} className="flex flex-col gap-1">
                <p className="ty-body1 font-bold">{item.title}</p>

                <div className="flex items-baseline  justify-between gap-6">
                  <p className="ty-body2 opacity-80">{item.company}</p>
                  <p className="ty-body2 whitespace-nowrap opacity-80">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* TECH SECTION */}
      <Reveal>
        <section className="flexCol gap-y-2 w-full xl:gap-y-4">
          <div className="flexRow gap-x-2">
            <p className="bg-black w-3 h-3"></p>
            <h2 className="ty-h2 capitalize">tech stacks</h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 justify-start lg:gap-3">
            {SKILL_CARDS.map((card) => (
              <TechStacksCard key={card.title} data={card} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* MORE ABOUT ME SECTION */}
      <Reveal>
        <section className="flexCol gap-y-2 w-full xl:gap-y-4">
          <div className="flexRow gap-x-2">
            <p className="bg-black w-3 h-3"></p>
            <h2 className="ty-h2 capitalize">more about me</h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2  justify-start lg:gap-3">
            {MORE_ABOUT_ME.map((card) => (
              <MoreAboutMeCard
                key={card.title}
                icon={card.icon} // 👈 card title icon
                title={card.title}
                items={card.items}
              />
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
