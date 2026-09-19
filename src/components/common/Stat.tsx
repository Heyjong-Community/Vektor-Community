// Stat.tsx
import type { LucideIcon } from 'lucide-react';

interface StatProps {
  icon: LucideIcon;
  number: number;
  label: string;
}

function Stat({ icon: Icon, number, label }: StatProps) {
  return (
    <div
      data-reveal
      className='group flex items-center gap-4 opacity-0 translate-y-5 transition-all duration-700 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100'
    >
      <div className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-blue-300 transition group-hover:bg-blue-600 group-hover:text-white'>
        <Icon size={25} />
      </div>
      <div>
        <strong className='font-display text-3xl font-semibold'>
          <span data-count={number}>0</span>+
        </strong>
        <small className='mt-0.5 block text-xs text-slate-500'>{label}</small>
      </div>
    </div>
  );
}

export default Stat;
