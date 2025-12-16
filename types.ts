import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SpecItem {
  title: string;
  value: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento grid layout
}

export interface DetailedFeature {
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  imageAlt: string;
}