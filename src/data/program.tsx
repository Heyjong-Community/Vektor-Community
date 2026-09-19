import type { ReactNode } from 'react';
import { Book, Calendar, Code, Users, type LucideIcon } from 'lucide-react';

export interface ProgramItem {
  icon: LucideIcon;
  title: ReactNode;
  text: string;
  label: string;
}

export const programs: ProgramItem[] = [
  {
    icon: Book,
    title: (
      <>
        Learning
        <br />
        &amp; Sharing
      </>
    ),
    text: 'Belajar bersama dan berbagi pengetahuan.',
    label: 'LEARNING',
  },
  {
    icon: Users,
    title: (
      <>
        Mentorship
        <br />
        &amp; Career
      </>
    ),
    text: 'Pendampingan untuk pengembangan karier.',
    label: 'MENTORSHIP',
  },
  {
    icon: Code,
    title: (
      <>
        Project
        <br />
        Collaboration
      </>
    ),
    text: 'Mengubah ide menjadi karya nyata.',
    label: 'COLLABORATION',
  },
  {
    icon: Calendar,
    title: (
      <>
        Community
        <br />
        Events
      </>
    ),
    text: 'Bertemu, berdiskusi, dan membangun koneksi.',
    label: 'COMMUNITY',
  },
];