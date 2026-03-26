import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore full-stack projects by Yooran Kim, including responsive web applications built with Next.js, React, TypeScript, Node.js, and SQL.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Yooran Kim',
    description:
      'Explore full-stack projects by Yooran Kim, including responsive web applications built with Next.js, React, TypeScript, Node.js, and SQL.',
    url: '/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Yooran Kim',
    description:
      'Explore full-stack projects by Yooran Kim, including responsive web applications built with Next.js, React, TypeScript, Node.js, and SQL.',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
