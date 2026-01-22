import TechStacksCard from '../../components/ui/TechStackCard';
import MoreAboutMe from '@/components/ui/MoreAboutMeCard';
import { SKILL_CARDS } from '@/lib/skills-data';
import Image from 'next/image';
export default function AboutPage() {
  return (
    <main className="flexCol gap-y-18 w-full dark:bg-black py-36  px-[1rem] md:px-[2rem] lg:px-[5rem] xl:px-[7.5rem] ">
      {/* HERO SECTION */}
      <section className="flexCol gap-y-4">
        <div className="flexRow w-full">
          <div>
            <p className="ty-subtitle capitalize leading-none">about me</p>
            <h1 className="ty-header-title leading-none uppercase">yooran kim</h1>
          </div>
          <div className="relative w-1/4 aspect-3/4">
            <Image
              src="/images/hero.png"
              alt="Hero"
              fill
              className="object-cover -z-10"
              priority
            />
          </div>
        </div>
        <div className=" w-full ty-body1">
          As a Full-Stack Developer, I thrive on the challenge of transforming concepts
          into tangible, interactive solutions. 
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="flexCol gap-y-2">
        <div className="flexRow gap-x-2">
          <p className="bg-black w-3 h-3"></p>
          <h2 className="ty-h2 capitalize">bio</h2>
        </div>
        <div className="ty-body1">
          As a front-end developer, I thrive on the challenge of transforming concepts
          into tangible, interactive solutions. Coding isn't just a skill for me; it's a
          journey where I put together all the knowledge that I have stacked and discover
          the answers with the insight I've honed. Coding is always wait for me at the
          finish line with the answer.
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="flexCol gap-y-2">
        <div className="flexRow gap-x-2">
          <p className="bg-black w-3 h-3"></p>
          <h2 className="ty-h2 capitalize">education</h2>
        </div>
        <div className="flexCol gap-y-6">
          <ul className="flexCol w-full">
            <li className="flexCol gap-y-1 w-full">
              <p className="ty-body1 font-bold">
                New Media and Web Development (Diploma)
              </p>
              <ul className="flexRow w-full justify-between ty-body2">
                <li>British Columbia Institute of Technology (BCIT)</li>
                <li>May 2023 – Nov 2024</li>
              </ul>
            </li>
          </ul>
          <ul className="flexCol w-full">
            <li className="flexCol gap-y-1 w-full">
              <p className="ty-body1 font-bold">Web Development (Certificate)</p>
              <ul className="flexRow w-full justify-between ty-body2">
                <li>Tamwood College</li>
                <li>Oct 2022 - Mar 2024</li>
              </ul>
            </li>
          </ul>
          <ul className="flexCol  w-full">
            <li className="flexCol gap-y-1 w-full">
              <p className="ty-body1 font-bold">Food Marketing and Safety (Bachelor) </p>
              <ul className="flexRow w-full justify-between ty-body2">
                <li>Konkuk University</li>
                <li>Mar 2017 - Mar 2022</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="flexCol gap-y-2 w-full">
        <div className="flexRow gap-x-2">
          <p className="bg-black w-3 h-3"></p>
          <h2 className="ty-h2 capitalize">experience</h2>
        </div>
        <div className="flexCol w-full">
          <ul className="flexCol w-full">
            <li className=" w-full">
              <p className="ty-body1 font-bold">Full-Stack Developer (Co-op) </p>
              <ul className="flexRow justify-between ty-body2">
                <li>Golden Key Real Estate</li>
                <li>Sep 2024 - Nov 2024</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* TECH SECTION */}
      <section className="flexCol gap-y-2 w-full">
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

      {/* MORE ABOUT ME SECTION */}
      <section className="flexCol gap-y-2 w-full">
        <div className="flexRow gap-x-2">
          <p className="bg-black w-3 h-3"></p>
          <h2 className="ty-h2 capitalize">more about me</h2>
        </div>
        <div className="w-full">
          <MoreAboutMe />
        </div>
      </section>
    </main>
  );
}
