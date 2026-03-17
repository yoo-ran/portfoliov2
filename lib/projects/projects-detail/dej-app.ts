import {
  Blocks,
  Code,
  Database,
  FolderTree,
  Heart,
  Search,
  Settings,
  Swords,
  Workflow,
} from 'lucide-react';
import { ProjectDetail } from './types';
import { DEFAULT_PROJECT_SECTION_NAV } from './constants';

export const dejAppDetail: ProjectDetail = {
  slug: 'dej-app',
  title: 'DEJ App',
  summary:
    'A mobile real estate app built around a custom property API, enabling listing discovery, filtering, detailed property views, and saved favorites through a structured end-to-end data flow.',
  heroImage: '/images/projects/dej-app/dejapp.png',
  meta: {
    teamType: 'Team Project',
    platform: 'Mobile App',
    timeline: '2024',
    role: 'Frontend & Backend Development',
  },
  techStacks: [
    { image: '/images/techStacks/react.png', label: 'React Native' },
    { image: '/images/techStacks/node.png', label: 'Node.js' },
    { image: '/images/techStacks/express.png', label: 'Express' },
    { image: '/images/techStacks/js.png', label: 'JavaScript' },
    { image: '/images/techStacks/heroku.svg', label: 'Heroku' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/yoo-ran/dej-app' },
    { label: 'Product Walkthrough', href: '#product-walkthrough' },
  ],

  sectionNav: DEFAULT_PROJECT_SECTION_NAV,

  overview: {
    title: 'Overview',
    content:
      'DEJ App is a mobile real estate platform designed to simplify property discovery through browsing, filtering, detailed listing views, and saved favorites. A key part of the project was building a custom property API from scratch, which allowed the app to serve structured listing data tailored to the exact product requirements.',
  },

  problem: {
    title: 'The Problem',
    content:
      'The project required reliable real estate listing data, but suitable free APIs were limited and did not align well with the product’s wireframe or feature needs. To move forward, the team needed a way to control the property schema, shape the dataset, and support features like category filtering, on-sale listings, and detail-based property browsing.',
  },

  solution: {
    title: 'The Solution',
    content:
      'To solve this, I built a custom property API using a structured JSON dataset, Node.js, and Express, then deployed it for live access. This created a controlled backend data source for the mobile app and supported a smoother frontend experience with property browsing, category filters, sale sections, detail fetching, and locally saved favorites.',
  },

  contributions: [
    {
      icon: Database,
      title: 'Custom Property API',
      description:
        'Built a custom property API from scratch using JSON, Node.js, and Express to serve real estate data tailored to the app’s wireframe and feature requirements.',
    },
    {
      icon: Blocks,
      title: 'Frontend–Backend Integration',
      description:
        'Connected the mobile app to the live API using Axios and useEffect, enabling dynamic data fetching for listing views and property details.',
    },
    {
      icon: Search,
      title: 'Property Discovery Flow',
      description:
        'Developed browsing experiences with category filtering, on-sale property sections, and detail screens to make listings easier to explore.',
    },
    {
      icon: Heart,
      title: 'Saved Favorites Experience',
      description:
        'Implemented persistent liked-property storage with AsyncStorage so users could save and manage listings across sessions.',
    },
  ],

  workflows: [
    {
      title: 'Custom API Setup',
      points: [
        'Defined the property schema based on product requirements',
        'Created a JSON dataset containing listing details, amenities, and images',
        'Built Express routes to expose the dataset as a live API',
        'Deployed the API to Heroku for production access',
      ],
    },
    {
      title: 'Property Discovery',
      points: [
        'Fetch listing data from the custom API',
        'Filter listings by category',
        'Display featured on-sale properties',
        'Navigate into detail views using property IDs',
      ],
    },
    {
      title: 'Saved Listings',
      points: [
        'Store liked properties in AsyncStorage',
        'Check whether a property has already been saved',
        'Remove saved listings and sync the UI state',
      ],
    },
  ],

  technicalDecisions: [
    {
      icon: Database,
      title: 'Custom API over third-party API',
      description:
        'A custom API was the best choice because free real estate APIs did not offer the flexibility or structure the project needed. Building the API internally made it possible to fully control the data model and support the UI more precisely.',
    },
    {
      icon: Code,
      title: 'Node.js and Express for lightweight API delivery',
      description:
        'Node.js and Express provided a simple and efficient way to expose JSON-based property data through REST endpoints that the app could consume reliably.',
    },
    {
      icon: Code,
      title: 'AsyncStorage for local persistence',
      description:
        'AsyncStorage was used to persist liked listings on the device, making the save experience lightweight and practical without requiring user authentication.',
    },
  ],

  challenges: [
    {
      icon: Swords,
      title: 'Lack of suitable real estate APIs',
      problem:
        'The team initially looked for a free real estate API, but available options were either limited or not suitable for the app’s required data structure.',
      approach:
        'I created a custom property dataset and built a Node.js and Express API to serve that data in a format aligned with the UI and wireframe.',
      result:
        'This gave the project a reliable and flexible backend data source while strengthening the end-to-end architecture.',
    },
    {
      icon: Swords,
      title: 'Maintaining saved state across the app',
      problem:
        'The app needed to clearly show whether a property had already been liked while keeping saved items persistent.',
      approach:
        'Used AsyncStorage with item existence checks and toggle logic to sync liked state between the UI and local storage.',
      result:
        'Users could save and remove listings confidently, with the interface reflecting the correct state consistently.',
    },
  ],

  impact: [
    {
      icon: Workflow,
      label: 'Stronger Data Ownership',
      description:
        'Building a custom API gave the project full control over listing structure, fields, and frontend compatibility.',
    },
    {
      icon: Settings,
      label: 'Better Product Fit',
      description:
        'The custom backend made it easier to support the exact browsing, filtering, and detail-view experience defined by the wireframe.',
    },
    {
      icon: FolderTree,
      label: 'End-to-End Development Experience',
      description:
        'The project connected backend API creation, deployment, frontend integration, and local persistence into one complete workflow.',
    },
  ],

  learnings: [
    'Learned how to design and deploy a custom API when third-party services did not meet product needs.',
    'Improved my understanding of end-to-end integration between backend data delivery and frontend mobile UI.',
    'Gained experience shaping data structures around real product requirements instead of adapting the UI to external API limitations.',
  ],

  nextSteps: [
    'Expand the custom API to support full CRUD operations',
    'Move saved listings from local storage to account-based persistence',
    'Add advanced filters such as price range, city, and amenities',
    'Improve loading, empty, and error states for a more polished experience',
  ],

  featureDemos: [
    {
      title: '1. Search by Category',
      mediaType: 'image',
      image: '/images/projects/dej-app/search.jpg',
      imageAlt: 'DEJ App home screen with category filter buttons',
      caption:
        'Built a category-based filtering flow on the home screen so users can quickly narrow listings by property type.',
      points: [
        'Filtered the property array based on the selected category',
        'Updated the displayed listing results dynamically',
        'Tracked the selected filter state to reflect active button styling',
      ],
    },
    {
      title: '2. On Sale Listings',
      mediaType: 'image',
      image: '/images/projects/dej-app/onsale.jpg',
      imageAlt: 'DEJ App on-sale property section',
      caption:
        'Added an on-sale section that highlights only properties marked with onSale status from the custom API.',
      points: [
        'Filtered API data using the onSale field',
        'Displayed only listings currently marked as on sale',
        'Created a more focused browsing experience for featured properties',
      ],
    },
    {
      title: '3. Saved Properties',
      mediaType: 'image',
      image: '/images/projects/dej-app/liked.jpg',
      imageAlt: 'DEJ App like screen showing saved properties',
      caption:
        'Developed a saved listings screen using AsyncStorage so users can keep and manage their favorite properties locally.',
      points: [
        'Fetched saved items from AsyncStorage on component mount',
        'Displayed persisted liked properties in a dedicated screen',
        'Supported removing saved items while updating both storage and UI state',
      ],
    },
  ],
};
