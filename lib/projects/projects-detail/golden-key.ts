import { ProjectDetail } from './types';
import { DEFAULT_PROJECT_SECTION_NAV } from './constants';
import {
  Blocks,
  Code,
  Database,
  FolderTree,
  FolderUp,
  KeyRound,
  LayoutGrid,
  Settings,
  Swords,
  Workflow,
} from 'lucide-react';

export const goldenKeyDetail: ProjectDetail = {
  slug: 'golden-key',
  title: 'Golden Key',
  summary:
    'A full-stack real estate management platform built to streamline property uploads, edits, filtering, and bulk listing management.',
  heroImage: '/images/projects/golden-key/goldenkey.jpg',
  meta: {
    teamType: 'Team Project',
    platform: 'Full-stack Web App',
    timeline: '2024',
    role: 'Frontend & Backend Development',
  },
  techStacks: [
    { image: '/images/techStacks/node.png', label: 'Node.js' },
    { image: '/images/techStacks/react.png', label: 'React' },
    { image: '/images/techStacks/tailwind.png', label: 'Tailwind' },
    { image: '/images/techStacks/mysql.png', label: 'MySQL' },
    { image: '/images/techStacks/express.png', label: 'Express' },
    { image: '/images/techStacks/jwt.webp', label: 'JWT' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/yoo-ran/goldenkey' },
    { label: 'Product Walkthrough', href: '#product-walkthrough' },
  ],

  sectionNav: DEFAULT_PROJECT_SECTION_NAV,

  overview: {
    title: 'Overview',
    content:
      'Golden Key is a real estate management platform built for organizing property listings through upload, editing, filtering, and bulk data handling. The project focused on making listing management more efficient and easier to maintain in one place.',
  },
  problem: {
    title: 'The Problem',
    content:
      'Managing property listings manually can become repetitive and difficult to organize, especially when handling multiple records, image uploads, and frequent updates. The goal was to build a system that made listing workflows more structured, editable, and scalable.',
  },
  solution: {
    title: 'The Solution',
    content:
      'To solve this, we developed a full-stack CRUD platform with secure authentication, listing upload and edit flows, filtering tools, image support, and Excel import for bulk operations. The platform was designed to centralize property management into one streamlined workflow.',
  },
  contributions: [
    {
      icon: KeyRound,
      title: 'Authentication Flow',
      description:
        'Implemented secure login/logout and session handling to support protected account-based access.',
    },
    {
      icon: FolderUp,
      title: 'Property CRUD',
      description:
        'Built property upload, detail, edit, and delete flows for managing listings more efficiently.',
    },
    {
      icon: Database,
      title: 'Bulk Data Management',
      description:
        'Integrated Excel upload and AG Grid editing to reduce repetitive manual entry and support larger datasets.',
    },
    {
      icon: Blocks,
      title: 'Backend Integration',
      description:
        'Connected frontend workflows with Node.js, Express, and MySQL for persistent data handling.',
    },
  ],
  workflows: [
    {
      title: 'Authentication',
      points: ['Secure login and logout flow', 'Session-based access management'],
    },
    {
      title: 'Property Management',
      points: [
        'Create, edit, and delete property listings',
        'View and update property detail pages',
        'Upload listing-related data and images',
      ],
    },
    {
      title: 'Bulk Operations',
      points: [
        'Import listing data through Excel',
        'Edit table data using AG Grid',
        'Support more efficient bulk record management',
      ],
    },
  ],
  technicalDecisions: [
    {
      icon: LayoutGrid,
      title: 'AG Grid for bulk editing',
      description:
        'AG Grid was chosen because the project needed spreadsheet-like interaction for bulk property management, making large listing datasets easier to edit and review.',
    },
    {
      icon: Database,
      title: 'MySQL for structured listing data',
      description:
        'MySQL supported the relational nature of property records, helping keep listing information organized and queryable.',
    },
    {
      icon: Code,
      title: 'React for UI workflow clarity',
      description:
        'React helped structure reusable UI components for forms, listing tables, and detail views across the application.',
    },
  ],
  challenges: [
    {
      icon: Swords,
      title: 'Managing bulk listing data',
      problem: 'Handling many property records manually was repetitive and inefficient.',
      approach:
        'Integrated Excel upload and AG Grid editing to support bulk operations in a more manageable interface.',
      result: 'This made larger datasets easier to review, edit, and maintain.',
    },
    {
      icon: Swords,
      title: 'Keeping listing workflows organized',
      problem: 'Property data, edits, and detail views needed a more connected flow.',
      approach:
        'Built CRUD-based upload and detail pages that centralized listing actions into one consistent system.',
      result:
        'This improved organization and made day-to-day listing management more streamlined.',
    },
  ],
  impact: [
    {
      icon: Workflow,
      label: 'Workflow Efficiency',
      description:
        'Made listing upload, editing, and filtering more organized in one system.',
    },
    {
      icon: Settings,
      label: 'Reduced Manual Work',
      description: 'Bulk Excel import and grid editing reduced repetitive manual entry.',
    },
    {
      icon: FolderTree,
      label: 'Scalable Management',
      description: 'Supported handling larger sets of property data more effectively.',
    },
  ],
  learnings: [
    'Learned how to structure CRUD workflows more clearly across frontend and backend.',
    'Improved understanding of relational data handling with MySQL.',
    'Gained experience designing data-heavy interfaces that still feel manageable for users.',
  ],
  nextSteps: [
    'Add role-based access permissions',
    'Improve validation and error states in forms',
    'Enhance advanced filtering and search options',
    'Optimize image upload and management flow',
  ],

  featureDemos: [
    {
      title: '1. Property Upload',
      mediaType: 'video',
      youtubeId: '2NY9xY6h01s',
      caption:
        'Built a property upload workflow that helps business owners add and organize listing information more efficiently.',
      points: [
        'Save property details into the database',
        'Auto-generate addresses during upload',
        'Upload and associate property images',
      ],
    },
    {
      title: '2. Excel Upload & AG Grid',
      mediaType: 'video',
      youtubeId: 'uWogRpcHPqI',
      caption:
        'Created a bulk listing workflow using Excel upload and AG Grid for spreadsheet-like property management.',
      points: [
        'Upload property data from Excel',
        'Display listings in an editable AG Grid table',
        'Improve efficiency when managing larger datasets',
      ],
    },
    {
      title: '3. Database Synchronization',
      mediaType: 'video',
      youtubeId: 'd1bNx1v0ajg',
      caption:
        'Implemented synchronization logic to compare uploaded Excel data with existing database records.',
      points: [
        'Compare uploaded rows against current records',
        'Keep property data aligned with the database',
        'Support more reliable bulk updates',
      ],
    },
    {
      title: '4. Property Detail Management',
      mediaType: 'video',
      youtubeId: '6_3yzysPa3E',
      caption:
        'Developed dynamic property detail workflows for viewing, editing, saving, and deleting listings.',
      points: [
        'Fetch and display database-backed property details',
        'Toggle between view mode and edit mode',
        'Save changes in real time and update the UI instantly',
        'Delete properties while keeping the database synchronized',
      ],
    },
    {
      title: '5. Search',
      mediaType: 'video',
      youtubeId: 'YHwr3I-KOjU',
      caption:
        'Built a search flow that helps users find listings by building name or address.',
      points: [
        'Search by building name',
        'Search by old and new address',
        'Fetch matching results from the database',
      ],
    },
    {
      title: '6. Filter',
      mediaType: 'video',
      youtubeId: 'feEBMU2NjNA',
      caption:
        'Added real-time filtering to help users narrow listings by relevant property conditions.',
      points: [
        'Filter by residence type',
        'Filter by parking and bathrooms',
        'Filter by approval date',
        'Pass selected criteria to the listing page in real time',
      ],
    },
  ],
};
