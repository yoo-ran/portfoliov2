import { LucideIcon } from 'lucide-react';

export type ProjectNavItem = {
  id: string;
  label: string;
};

export type TechStack = {
  image: string;
  label: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMeta = {
  teamType: string;
  platform: string;
  timeline: string;
  role: string;
};

export type ProjectSection = {
  title: string;
  content: string;
};

export type ContributionItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type WorkflowItem = {
  title: string;
  points: string[];
};

export type TechnicalDecisionItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ChallengeItem = {
  icon: LucideIcon;
  title: string;
  problem: string;
  approach: string;
  result: string;
};

export type ImpactItem = {
  icon: LucideIcon;
  label: string;
  description: string;
};

export type FeatureDemoItem =
  | {
      title: string;
      caption: string;
      points: string[];
      mediaType: 'video';
      youtubeId: string;
    }
  | {
      title: string;
      caption: string;
      points: string[];
      mediaType: 'image';
      image: string;
      imageAlt?: string;
    };

export type ProjectDetail = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  meta: ProjectMeta;
  techStacks: TechStack[];
  links: ProjectLink[];
  overview: ProjectSection;
  problem: ProjectSection;
  solution: ProjectSection;
  contributions: ContributionItem[];
  workflows: WorkflowItem[];
  technicalDecisions: TechnicalDecisionItem[];
  challenges: ChallengeItem[];
  impact: ImpactItem[];
  learnings: string[];
  nextSteps: string[];
  featureDemos: FeatureDemoItem[];
  sectionNav: ProjectNavItem[];
};
