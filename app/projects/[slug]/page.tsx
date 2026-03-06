import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECT_DETAILS, getProjectBySlug } from '@/lib/project-details';

import { ArrowBigRight } from 'lucide-react';

import TechChip from '@/components/ui/TechChip';
import FeatureWalkthroughStack from '@/components/motion/FeatureWalkthroughStack';

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
    <main className="px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-20">
        <Link
          href="/projects"
          className="inline-block text-sm underline underline-offset-4"
        >
          Back to Projects
        </Link>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flexCol gap-y-6">
            <div>
              <p className="ty-body2 opacity-70">
                {project.meta.teamType} · {project.meta.platform} ·{' '}
                {project.meta.timeline}
              </p>
              <h1 className="ty-h1 font-bold">{project.title}</h1>
            </div>

            <p className="ty-body1 leading-6 opacity-80">{project.summary}</p>

            <div className="grid gap-3 sm:grid-cols-3 w-full">
              <div className="lg:rounded-xl col-span-2 border p-4">
                <p className="text-sm opacity-60">Role</p>
                <p className="mt-1 ty-body1 font-medium">{project.meta.role}</p>
              </div>
              <div className="lg:rounded-xl border p-4">
                <p className="text-sm opacity-60">Timeline</p>
                <p className="mt-1 ty-body1 font-medium">{project.meta.timeline}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 ">
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
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border w-full h-full">
            <Image
              src={project.heroImage}
              alt={`${project.title} hero image`}
              fill
              className="object-cover object-right"
            />
          </div>
        </section>

        <section className="flexRow gap-10">
          <div className="space-y-4">
            <h2 className="ty-h3 font-semibold">{project.problem.title}</h2>
            <p className="max-w-3xl border p-4 rounded-xl leading-8 opacity-80">
              {project.problem.content}
            </p>
          </div>
          <ArrowBigRight className="lg:w-10 lg:mt-10 text-black/70" />
          <div className="space-y-4">
            <h2 className="ty-h3 font-semibold">{project.solution.title}</h2>
            <p className="max-w-3xl border p-4 rounded-xl leading-8 opacity-80">
              {project.solution.content}
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="ty-h3 font-semibold">My Contributions</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {project.contributions.map((item) => (
              <article key={item.title} className="rounded-3xl border p-6">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 leading-7 opacity-80">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="ty-h3 font-semibold">Key Workflows</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {project.workflows.map((workflow) => (
              <article key={workflow.title} className="rounded-3xl border p-6">
                <h3 className="text-lg font-medium">{workflow.title}</h3>
                <ul className="mt-4 space-y-2">
                  {workflow.points.map((point) => (
                    <li key={point} className="opacity-80">
                      • {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="ty-h3 font-semibold">Technical Decisions</h2>
          <div className="space-y-4">
            {project.technicalDecisions.map((item) => (
              <article key={item.title} className="rounded-3xl border p-6">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 leading-7 opacity-80">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="ty-h3 font-semibold">Challenges & Solutions</h2>
          <div className="space-y-5">
            {project.challenges.map((item) => (
              <article key={item.title} className="rounded-3xl border p-6">
                <h3 className="text-lg font-medium">{item.title}</h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-sm font-medium opacity-60">Problem</p>
                    <p className="mt-1 leading-7 opacity-80">{item.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium opacity-60">Approach</p>
                    <p className="mt-1 leading-7 opacity-80">{item.approach}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium opacity-60">Result</p>
                    <p className="mt-1 leading-7 opacity-80">{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="ty-h3 font-semibold">Impact</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {project.impact.map((item) => (
              <article key={item.label} className="rounded-3xl border p-6">
                <h3 className="text-lg font-medium">{item.label}</h3>
                <p className="mt-3 leading-7 opacity-80">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="ty-h3 font-semibold">Gallery</h2>
          <div className="space-y-8">
            <FeatureWalkthroughStack items={project.featureDemos} />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="ty-h3 font-semibold">What I Learned</h2>
            <ul className="space-y-2">
              {project.learnings.map((item) => (
                <li key={item} className="opacity-80">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="ty-h3 font-semibold">Next Steps</h2>
            <ul className="space-y-2">
              {project.nextSteps.map((item) => (
                <li key={item} className="opacity-80">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
