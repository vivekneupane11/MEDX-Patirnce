import { LucideIcon } from 'lucide-react';

export interface StatCardConfig {
  title: string;
  value: (stats: any) => number | string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  linkTo: string;
  bgColor: string;
  iconColor: string;
}

export interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  linkTo: string;
  bgColor: string;
  iconColor: string;
}