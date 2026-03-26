import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Yooran Kim, a full-stack developer focused on building clear, user-friendly web applications with Next.js, React, TypeScript, Node.js, and SQL.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Yooran Kim',
    description:
      'Learn more about Yooran Kim, a full-stack developer focused on building clear, user-friendly web applications with Next.js, React, TypeScript, Node.js, and SQL.',
    url: '/about',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Yooran Kim',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Yooran Kim',
    description:
      'Learn more about Yooran Kim, a full-stack developer focused on building clear, user-friendly web applications with Next.js, React, TypeScript, Node.js, and SQL.',
    images: ['/og-image.png'],
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yooran Kim',
    jobTitle: 'Full-Stack Developer',
    url: 'https://yourdomain.com/about',
    sameAs: [
      'https://github.com/yourusername',
      'https://www.linkedin.com/in/yourusername/',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'SQL',
      'Full-Stack Development',
      'Frontend Development',
      'Backend Development',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'BCIT',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <AboutPageClient />
    </>
  );
}
