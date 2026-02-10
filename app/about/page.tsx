'use client';

import Reveal from '@/components/motion/RevealScroll';

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
      <section className="flexCol gap-y-4 w-full">
        <div className="flexRow items-end w-full">
          <div>
            <p className="ty-subtitle capitalize leading-none">about me</p>
            <h1 className="ty-header-title leading-none uppercase">yooran kim</h1>
          </div>
          <div className="relative w-1/4 aspect-3/4 md:w-1/6">
            <Image
              src="/images/hero.png"
              alt="Hero"
              fill
              className="object-cover -z-10"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 ty-body1">
          As a Full-Stack Developer, I thrive on the challenge of transforming concepts
          into tangible, interactive solutions. 
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
            As a front-end developer, I thrive on the challenge of transforming concepts
            into tangible, interactive solutions. Coding isn't just a skill for me; it's a
            journey where I put together all the knowledge that I have stacked and
            discover the answers with the insight I've honed. Coding is always wait for me
            at the finish line with the answer.
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
          <div className="w-full flexCol gap-3 md:flex-row justify-start lg:gap-6">
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
          <div className="w-full flexCol gap-3 md:flex-row justify-start lg:gap-6">
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
