import { LucideIcon } from 'lucide-react';

export interface QuickActionConfig {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  count: number;
  linkTo: string;
  tooltip: string;
}

export interface QuickActionCardProps extends QuickActionConfig {}