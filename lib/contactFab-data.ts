import { Mail, Linkedin, Github } from 'lucide-react';

export type ContactFabItem = {
  id: 'email' | 'linkedin' | 'github';
  label: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

export const CONTACT_FAB_ITEMS: ContactFabItem[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'yuranm80@gmail.com',
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yooran/',
    icon: Linkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/yoo-ran',
    icon: Github,
    external: true,
  },
];
