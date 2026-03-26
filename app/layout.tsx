import type { Metadata } from 'next';
import { Inter, Abel, Titillium_Web, Praise } from 'next/font/google';
import './globals.css';
import SiteShell from '@/components/SiteShell';
import Footer from '@/components/Footer';
import { ContactFabMenu } from '@/components/ui/ContactFabMenu';

// Main sans-serif (body)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Heading font
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // adjust to what you need
  variable: '--font-titillium',
});

// Label / UI font
const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abel',
});

// Label / UI font
const praise = Praise({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-praise',
});

const siteUrl = 'https://yourdomain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yooran Kim | Full-Stack Developer',
    template: '%s | Yooran Kim',
  },
  description:
    'Portfolio of Yooran Kim, a full-stack developer building responsive, user-focused web applications with Next.js, React, TypeScript, Node.js, and modern databases.',
  keywords: [
    'Yooran Kim',
    'Full-Stack Developer',
    'Full-Stack Web Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Web Developer Vancouver',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yooran Kim | Full-Stack Developer',
    description:
      'Full-stack developer portfolio showcasing responsive web apps, scalable backend systems, and user-focused digital experiences built with Next.js, React, TypeScript, Node.js, and SQL databases.',
    url: siteUrl,
    siteName: 'Yooran Kim Portfolio',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yooran Kim Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yooran Kim | Full-Stack Developer',
    description:
      'Portfolio of Yooran Kim, a full-stack developer building responsive, user-focused web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${titillium.variable}
          ${abel.variable}
          antialiased
          relative
          w-full
          px-[1rem] md:px-[2rem] lg:px-[7rem] xl:px-[10rem]
        `}
      >
        <SiteShell>{children}</SiteShell>
        <Footer />
        <ContactFabMenu />
      </body>
    </html>
  );
}
