'use client';

import ContactBtn from '../ui/ContactButton';
import Image from 'next/image';
import FadeUp from '../motion/FadeUp';
import Blink from '../motion/Blink';

import { Copy, Linkedin } from 'lucide-react';

export default function Hero() {
  const email = 'yuranm80@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <section className="flexCol gap-y-10 w-full h-svh dark:bg-black">
      <div className="flexCol w-full  gap-y-2">
        <FadeUp>
          <h1 className="font-title  font-black uppercase  text-start leading-none text-[3.6rem] md:text-[7.7rem] lg:text-[10rem] ">
            Yooran <br />
            Kim
          </h1>
        </FadeUp>
        <div className="w-full md:w-5/8 lg:w-full flexRow lg:items-end">
          <ul className="w-1/2">
            <FadeUp>
              <li className="font-label text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-1 xl:mb-2">
                Full-Stack Developer
              </li>
            </FadeUp>
            <FadeUp>
              <li className="text-[0.75rem] md:text-[0.875rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                I <strong>translate product goals into usable interfaces</strong> by
                simplifying UX, designing clear flows, building reusable components, and
                delivering stable integrations.
              </li>
            </FadeUp>
          </ul>

          <FadeUp>
            <div className="relative w-1/4 md:w-1/3 lg:w-1/5 xl:w-1/4 aspect-3/4 ">
              <Image
                src="/images/hero.png"
                alt="Hero"
                fill
                className="object-cover -z-10"
                priority
              />
            </div>
          </FadeUp>
        </div>

        <div className="flexRow items-end w-full">
          <div>
            <ContactBtn label="Copy Email" icon={Copy} onClick={copyEmail} />
            <ContactBtn
              label="LinkedIn"
              icon={Linkedin}
              href="https://www.linkedin.com/in/your-handle"
              target="_blank"
            />
          </div>
          <ul className="flexCol items-end uppercase">
            <li className="font-label text-[0.875rem] md:text-[1.125rem] lg:text-[1.5rem] xl:text-[2rem] leading-none">
              Available for
            </li>
            <li className="flexRow lg:gap-x-3">
              <Blink>
                <p className="text-highlight lg:text-xl mt-2">●</p>
              </Blink>
              <p className="ty-header-title leading-none">work</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
