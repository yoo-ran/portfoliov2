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
    <section className="flexCol gap-y-10 w-10/12 self-center h-svh dark:bg-black">
      <div className="flexRow w-full">
        <div className="w-full md:w-5/8 lg:w-full flexCol items-center space-y-16 ">
          <FadeUp>
            <h1 className="font-logo font-black text-center tracking-wide  leading-none text-[3.6rem] md:text-[7.7rem] lg:text-[12rem] ">
              Yooran Kim
            </h1>
          </FadeUp>
          <ul className="w-2/3 text-center ">
            <FadeUp>
              <li className="font-label text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold lg:mb-4">
                Full-Stack Developer
              </li>
              <li className="text-[0.75rem] md:text-[0.875rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                I translate product goals into usable interfaces by simplifying UX,
                designing clear flows, building reusable components, and delivering stable
                integrations.
              </li>
            </FadeUp>
          </ul>
        </div>
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
    </section>
  );
}
