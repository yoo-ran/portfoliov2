import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-11/12 md:w-10/12 flexCol ">
      <section className="py-4 md:py-10 flexCol sm:flex-row sm:justify-between w-full gap-y-4">
        <div className="sm:w-1/2 md:w-5/12">
          <h2 className="ty-h2">Yooran Kim</h2>
          <p className="ty-body2 hidden sm:block">
            As a front-end developer, I thrive on the challenge of transforming concepts
            into tangible, interactive solutions.{' '}
          </p>
        </div>
        <div className="w-3/8 md:w-1/2 ">
          <h3 className="ty-h3">Menu</h3>
          <div className="flexCol  uppercase">
            <Link href="/" className="ty-body2">
              Home
            </Link>
            <Link href="/about" className="ty-body2">
              About
            </Link>
            <Link href="/projects" className="ty-body2">
              Projects
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full border-t-1 py-4 md:py-10 flexCol sm:items-center">
        <p className="ty-body2">&copy; 2025 Yooran Kim. All right reserved.</p>
        <span className="ty-tech-btn">
          Built using Next.js, Typescript, and Tailwind CSS
        </span>
      </section>
    </div>
  );
}
