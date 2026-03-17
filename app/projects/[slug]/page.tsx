import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowBigDown, ArrowBigRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECT_DETAILS, getProjectBySlug } from '@/lib/projects/projects-detail/index';
import TechChip from '@/components/ui/TechChip';
import FeatureWalkthroughStack from '@/components/motion/FeatureWalkthroughStack';
import Reveal from '@/components/motion/RevealScroll';
import FadeUp from '@/components/motion/FadeUp';
import FloatingMotion from '@/components/motion/FloatingMotion';
import ProjectSubmenu from '@/components/ui/ProjectSubMenu';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECT_DETAILS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flexCol gap-y-14 md:gap-y-20 lg:gap-y-34 xl:gap-y-26 w-full py-20 lg:py-32">
      <ProjectSubmenu items={project.sectionNav} />

      <div className="flexRow justify-start gap-x-1 ">
        <ArrowLeft className="w-4 text-black/90" />
        <Link
          href="/projects"
          className=" inline-block ty-body2 underline underline-offset-4"
        >
          Back to Projects
        </Link>
      </div>
      <FadeUp>
        <section id="overview" className="grid gap-10 md:grid-cols-2 lg:items-start">
          <div className="flexCol gap-y-6">
            <div>
              <p className="ty-tech-btn opacity-70 mb-1 md:m-0">
                {project.meta.teamType} · {project.meta.platform} ·{' '}
                {project.meta.timeline}
              </p>
              <h1 className="ty-h1 font-bold">{project.title}</h1>
            </div>

            <p className="ty-body1 leading-6 opacity-80">{project.summary}</p>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-full">
              <div className="rounded-md lg:rounded-xl col-span-1 md:col-span-2 border p-3 md:p-4">
                <p className="text-sm opacity-60">Role</p>
                <p className="mt-1 ty-body1 font-medium">{project.meta.role}</p>
              </div>
              <div className="rounded-md lg:rounded-xl col-span-1 border p-3 md:p-4">
                <p className="text-sm opacity-60">Timeline</p>
                <p className="mt-1 ty-body1 font-medium">{project.meta.timeline}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStacks.map((tech, idx) => (
                <TechChip
                  key={`${project.title}-${tech.label}-${idx}`}
                  item={tech}
                  borderColor="black"
                />
              ))}
            </div>

            <div className=" flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  rel="noreferrer"
                  className="rounded-full flexRow border px-4 py-2 lg:px-5 lg:py-3 bg-black text-beige ty-body1 font-medium transition hover:-translate-y-0.5"
                >
                  {link.label}
                  <ArrowRight className="text-beige/80 w-4 ml-2" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border w-full h-full">
            <Image
              src={project.heroImage}
              alt={`${project.title} hero image`}
              fill
              className="object-cover md:object-right"
            />
          </div>
        </section>
      </FadeUp>
      <Reveal>
        <section className="flexCol items-center md:flex-row gap-4 lg:gap-10">
          <div id="problem" className="space-y-4 lg:space-y-8 flexCol h-full ">
            <h2 className="ty-h2 font-semibold">{project.problem.title}</h2>
            <p className="ty-body1 max-w-3xl border p-4 lg:p-6 rounded-xl leading-6 lg:leading-8 opacity-80 h-full">
              {project.problem.content}
            </p>
          </div>
          <div className="md:mt-10">
            <FloatingMotion direction="horizontal">
              <ArrowBigRight className="hidden md:block lg:w-10 text-black/80" />
            </FloatingMotion>
            <FloatingMotion direction="vertical">
              <ArrowBigDown className="md:hidden lg:w-10 text-black/80" />
            </FloatingMotion>
          </div>
          <div id="solution" className="space-y-4 lg:space-y-8 flexCol h-full">
            <h2 className="ty-h2 font-semibold">{project.solution.title}</h2>
            <p className="ty-body1 max-w-3xl border p-4 lg:p-6 rounded-xl leading-6 lg:leading-8 opacity-80 h-full">
              {project.solution.content}
            </p>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section id="contributions" className="space-y-6 lg:space-y-8">
          <h2 className="ty-h2 font-semibold">My Contributions</h2>
          <div className="grid gap-3 lg:gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {project.contributions.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border p-6 bg-black text-beige"
              >
                <div className="flexRow justify-start gap-2 ">
                  <item.icon className="w-5" />
                  <h3 className="ty-h3">{item.title}</h3>
                </div>
                <p className="ty-body1 mt-2 lg:mt-3 leading-6 lg:leading-8 opacity-80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
      <section id="workflows" className="space-y-6 lg:space-y-8 w-full">
        <h2 className="ty-h2 font-semibold">Key Workflows</h2>
        <div className="grid lg:gap-5 gap-3 lg:grid-cols-3">
          {project.workflows.map((workflow) => (
            <Reveal>
              <article
                key={workflow.title}
                className="rounded-xl border p-4 lg:p-6 h-full"
              >
                <h3 className="ty-h3">{workflow.title}</h3>
                <ul className="ty-body1 mt-2 lg:mt-3  space-y-2">
                  {workflow.points.map((point) => (
                    <li key={point} className="opacity-80">
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal>
        <section id="technical-decisions" className="space-y-6">
          <h2 className="ty-h2 font-semibold">Technical Decisions</h2>
          <div className="space-y-4 grid lg:grid-cols-3 lg:gap-5">
            {project.technicalDecisions.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border md:p-4 lg:p-6 lg:h-full bg-black text-beige"
              >
                <div className="flexRow justify-start gap-2 ">
                  <item.icon className="w-5" />
                  <h3 className="ty-h3 ">{item.title}</h3>
                </div>
                <p className="ty-body1 mt-2 lg:mt-3  opacity-80 lg:leading-8">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section id="challenges" className="space-y-6">
          <h2 className="ty-h2 font-semibold">Challenges & Solutions</h2>
          <div className="space-y-5 md:space-y-4 grid md:grid-cols-2 md:gap-3">
            {project.challenges.map((item) => (
              <article key={item.title} className="rounded-3xl border p-6 h-full md:p-5">
                <div className="flexRow justify-start gap-2">
                  <item.icon />
                  <h3 className="ty-h3">{item.title}</h3>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="ty-body2 font-medium opacity-60">Problem</p>
                    <p className="ty-body1 mt-1 opacity-90">{item.problem}</p>
                  </div>

                  <div>
                    <p className="ty-body2 font-medium opacity-60">Approach</p>
                    <p className="ty-body1 mt-1 opacity-90">{item.approach}</p>
                  </div>

                  <div>
                    <p className="ty-body2 font-medium opacity-60">Result</p>
                    <p className="ty-body1 mt-1 opacity-90">{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section id="impacts" className="space-y-6">
          <h2 className="ty-h2 font-semibold">Impacts</h2>
          <div className="grid gap-5 md:gap-3 lg:grid-cols-3">
            {project.impact.map((item) => (
              <article key={item.label} className="rounded-xl border lg:p-6 md:p-4">
                <div className="flexRow justify-start gap-x-2">
                  <item.icon />
                  <h3 className="ty-h3">{item.label}</h3>
                </div>
                <p className="ty-body1 mt-3 lg:leading-8 opacity-80">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
      <section id="product-walkthrough" className="space-y-6 w-full">
        <h2 className="ty-h2 font-semibold">Product Walkthrough</h2>
        <div className=" ">
          <FeatureWalkthroughStack items={project.featureDemos} />
        </div>
      </section>
      <Reveal>
        <section id="learnings" className="grid gap-8 md:grid-cols-2">
          <div id="learnings" className="space-y-4">
            <h2 className="ty-h2 font-semibold">What I Learned</h2>
            <ul className="space-y-2">
              {project.learnings.map((item) => (
                <li key={item} className="ty-body1 opacity-80">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="next-steps" className="space-y-4">
            <h2 className="ty-h2 font-semibold">Next Steps</h2>
            <ul className="space-y-2">
              {project.nextSteps.map((item) => (
                <li key={item} className="ty-body1 opacity-80">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
