import { Calendar, Code, Target, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface StatItem {
  icon: LucideIcon;
  number: number;
  label: string;
}

export const statCards: StatItem[] = [
  { icon: Users, number: 500, label: 'Anggota' },
  { icon: Code, number: 50, label: 'Proyek & Karya' },
  { icon: Target, number: 1000, label: 'Penerima Manfaat' },
  { icon: Calendar, number: 5, label: 'Program Rutin' },
];
