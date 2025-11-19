import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import AboutPage from './about/page';
// import ProjectsPage from './projects/page';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <Header />
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        {/* <AboutPage /> */}
        {/* <ProjectsPage /> */}
        <Footer />
      </main>
    </div>
  );
}
