import Image from 'next/image';

export default function Header() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-32">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <h1>Header</h1>
    </main>
  );
}
