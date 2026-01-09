import ContactBtn from './ui/ContactButton';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flexCol gap-y-10 w-full py-12 dark:bg-black">
      <h1 className="font-title font-black uppercase w-full text-center leading-none text-[3.6rem] md:text-[7.7rem] lg:text-[12rem] xl:text-[16rem]">
        Yooran Kim
      </h1>
      <div className="flexCol w-full  gap-y-2">
        <div className="w-full md:w-5/8 lg:w-7/12 flexRow lg:items-end">
          <ul className="w-3/5 ">
            <li className="font-label text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-1 xl:mb-2">
              Full-Stack Developer
            </li>
            <li className="text-[0.75rem] md:text-[0.875rem] lg:text-[1.25rem] xl:text-[1.5rem]">
              Open to job opportunities worldwide. Passionate about building polished,
              intuitive, and thoughtful digital experiences that leave a mark.
            </li>
          </ul>
          <div className="relative w-1/4 md:w-1/3 lg:w-1/3 aspect-3/4">
            <Image
              src="/images/hero.png"
              alt="Hero"
              fill
              className="object-cover -z-10"
              priority
            />
          </div>
        </div>
        <div className="flexRow items-end w-full">
          <div>
            <ContactBtn />
          </div>
          <ul className="flexCol items-end uppercase">
            <li className="font-label text-[0.875rem] md:text-[1.125rem] lg:text-[1.5rem] xl:text-[2rem] leading-none">
              Available for
            </li>
            <li className="flexRow">
              <span className="w-3 md:w-4 lg:w-5 xl:w-7 aspect-square rounded-full mr-2 xl:mr-4 bg-highlight"></span>
              <p className="ty-header-title leading-none">work</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
