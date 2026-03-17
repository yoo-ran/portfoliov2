import { dejAppDetail } from './dej-app';
import { goldenKeyDetail } from './golden-key';
import { ProjectDetail } from './types';

export const PROJECT_DETAILS: ProjectDetail[] = [goldenKeyDetail, dejAppDetail];

export function getProjectBySlug(slug: string) {
  return PROJECT_DETAILS.find((project) => project.slug === slug);
}

export * from './types';
export * from './golden-key';
export * from './dej-app';