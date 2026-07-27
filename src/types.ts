import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  features: string[];
  image: string;
  links: { label: string; url: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
