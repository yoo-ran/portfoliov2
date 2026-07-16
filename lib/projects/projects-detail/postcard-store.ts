import { ProjectDetail } from './types';
import { DEFAULT_PROJECT_SECTION_NAV } from './constants';
import {
  Bot,
  CreditCard,
  Database,
  Gauge,
  KeyRound,
  Mail,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Swords,
  TestTube,
  Workflow,
} from 'lucide-react';

export const postcardStoreDetail: ProjectDetail = {
  slug: 'postcard-store',
  title: 'Postcard Store',
  summary:
    'A full-stack e-commerce platform for selling original photography postcards, featuring Stripe checkout, AI-powered recommendations, and a fully automated CI/CD pipeline.',
  heroImage: '/images/projects/postcard-store/postcard-store.jpg',
  meta: {
    teamType: 'Solo Project',
    platform: 'Full-stack Web App',
    timeline: '2025 - 2026',
    role: 'Design, Development & Deployment',
  },
  techStacks: [
    { image: '/images/techStacks/nextjs.svg', label: 'Next.js' },
    { image: '/images/techStacks/typescript.png', label: 'TypeScript' },
    { image: '/images/techStacks/aws.png', label: 'AWS' },
    { image: '/images/techStacks/stripe.png', label: 'Stripe' },
    { image: '/images/techStacks/claude.jpeg', label: 'Claude' },
    { image: '/images/techStacks/postgresql.png', label: 'PostgreSQL' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/yoo-ran/postcard-store' },
    { label: 'Live Site', href: 'https://postcard-store.vercel.app/' },
    { label: 'Product Walkthrough', href: '#product-walkthrough' },
  ],

  sectionNav: DEFAULT_PROJECT_SECTION_NAV,

  overview: {
    title: 'Overview',
    content:
      'Postcard Store is an e-commerce platform built around my own photography, where visitors can browse, collect, and purchase postcards online. It combines a creative brand with production-grade engineering, covering the full lifecycle from product browsing to secure payment and order confirmation.',
  },
  problem: {
    title: 'The Problem',
    content:
      'Selling physical prints online requires more than a product page. It needs secure payments, reliable order handling, protection against abuse, and confidence that new code changes will not break checkout. The goal was to build a real store that could be trusted with real transactions, not just a demo.',
  },
  solution: {
    title: 'The Solution',
    content:
      'I built a full-stack Next.js application with Stripe-powered checkout, authenticated accounts, transactional email, and an AI recommender that suggests postcards based on customer preferences. The platform is protected with rate limiting and input validation, and every change is verified by an automated CI/CD pipeline with end-to-end tests before deployment.',
  },
  contributions: [
    {
      icon: ShoppingCart,
      title: 'E-commerce Core',
      description:
        'Built product browsing, cart management with Zustand, and a complete Stripe checkout and order flow.',
    },
    {
      icon: KeyRound,
      title: 'Authentication',
      description:
        'Implemented account-based access with NextAuth v5, supporting secure sign-in and protected user flows.',
    },
    {
      icon: Bot,
      title: 'AI Recommendations',
      description:
        'Integrated the Anthropic Claude API to recommend postcards based on customer taste and browsing context.',
    },
    {
      icon: Rocket,
      title: 'CI/CD & Deployment',
      description:
        'Set up a GitHub Actions pipeline with Playwright end-to-end tests and deployed to Vercel with Prisma Accelerate.',
    },
  ],
  workflows: [
    {
      title: 'Shopping & Checkout',
      points: [
        'Browse postcards and manage a persistent cart',
        'Pay securely through Stripe checkout',
        'Receive order confirmation emails via AWS SES',
      ],
    },
    {
      title: 'Accounts & Personalization',
      points: [
        'Sign in with NextAuth v5 session management',
        'Get AI-powered postcard recommendations',
        'View order history tied to the account',
      ],
    },
    {
      title: 'Reliability & Security',
      points: [
        'Rate limiting on API routes with Upstash Redis',
        'Input validation with Zod on every endpoint',
        'Automated Playwright e2e tests on every push',
      ],
    },
  ],
  technicalDecisions: [
    {
      icon: Database,
      title: 'Prisma with PostgreSQL and Accelerate',
      description:
        'Prisma provided type-safe database access for orders and products, while Prisma Accelerate handled connection pooling for serverless deployment on Vercel.',
    },
    {
      icon: ShieldCheck,
      title: 'Upstash Redis for rate limiting',
      description:
        'API routes needed protection from abuse without a dedicated server, so serverless-friendly Redis rate limiting was the right fit for the Vercel environment.',
    },
    {
      icon: TestTube,
      title: 'Playwright e2e tests in CI',
      description:
        'Because checkout is business-critical, I chose end-to-end tests that exercise real user flows, running automatically in GitHub Actions before every deployment.',
    },
  ],
  challenges: [
    {
      icon: Swords,
      title: 'Debugging the production deployment',
      problem:
        'The first Vercel deployment failed with a chain of interconnected issues, including a malformed database URL, top-level await breaking the build, and static generation conflicting with Prisma Accelerate.',
      approach:
        'I isolated each failure one at a time, reading build logs carefully, restructuring the auth setup to remove top-level await, and adjusting rendering strategy for database-dependent pages.',
      result:
        'The app deployed successfully, and I came away with a much deeper understanding of how Next.js builds, serverless databases, and environment configuration interact in production.',
    },
    {
      icon: Swords,
      title: 'Making the pipeline trustworthy',
      problem:
        'Automated tests failed in CI due to environment differences, including a Prisma seed incompatibility between tsx and ESM.',
      approach:
        'I reworked the seeding setup to be compatible with the CI environment and configured the workflow so tests run against a realistic database state.',
      result:
        'The pipeline now catches regressions before they reach production, so I can ship changes with confidence.',
    },
  ],
  impact: [
    {
      icon: Workflow,
      label: 'Production-Ready',
      description:
        'A live, deployed store handling real checkout flows with automated quality gates.',
    },
    {
      icon: Sparkles,
      label: 'Brand Foundation',
      description: 'Serves as the e-commerce home for my postcard photography brand.',
    },
    {
      icon: Gauge,
      label: 'Engineering Depth',
      description:
        'Demonstrates full-lifecycle skills: architecture, payments, testing, security, and deployment.',
    },
  ],
  learnings: [
    'Learned how to debug production-only failures by isolating one variable at a time instead of changing many things at once.',
    'Gained hands-on experience with payments, transactional email, and the operational side of running a real store.',
    'Understood how CI/CD and e2e testing change the way you write code, because every change must keep the pipeline green.',
  ],
  nextSteps: [
    'Add inventory tracking and low-stock indicators',
    'Expand the AI recommender with purchase history signals',
    'Improve Lighthouse performance scores, focusing on Total Blocking Time',
    'Add an admin dashboard for managing products and orders',
  ],

  featureDemos: [
    {
      title: '1. Browsing & Cart',
      mediaType: 'video',
      youtubeId: '3lWkonXzqME',
      caption:
        'Built a browsing and cart experience with Zustand state management that persists across the session.',
      points: [
        'Browse postcards with product detail pages',
        'Add and remove items from a persistent cart',
        'See live cart totals before checkout',
      ],
    },
    {
      title: '2. Stripe Checkout',
      mediaType: 'video',
      youtubeId: 'FOR2xxgorE0',
      caption:
        'Implemented a secure checkout flow with Stripe, from payment to order creation in the database.',
      points: [
        'Pay securely through Stripe checkout',
        'Create order records on successful payment',
        'Send confirmation emails via AWS SES',
      ],
    },
    {
      title: '3. AI Postcard Recommender',
      mediaType: 'video',
      youtubeId: 'gsL-2CsmGEQ',
      caption:
        'Integrated the Anthropic Claude API to suggest postcards that match each customer\u2019s taste.',
      points: [
        'Describe your preferences in natural language',
        'Receive tailored postcard recommendations',
        'Discover products beyond simple category filters',
      ],
    },
    {
      title: '4. Register, Login & Logout',
      mediaType: 'video',
      youtubeId: 'gD5Yyfe-UN0',
      caption:
        'Implemented a complete authentication flow with NextAuth v5, from account creation to secure session handling.',
      points: [
        'Register a new account with validated input',
        'Log in with credentials and start a secure session',
        'Log out and clear the session safely',
      ],
    },
  ],
};
