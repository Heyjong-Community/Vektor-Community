import type { ReactNode } from 'react';

function Reveal({
  children,
  direction = 'up',
  className = '',
}: {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}) {
  const offset = direction === 'left' ? '-translate-x-8' : direction === 'right' ? 'translate-x-8' : 'translate-y-8';

  return (
    <div
      data-reveal
      className={`opacity-0 ${offset} transition-all duration-1000 ease-out data-[visible=true]:translate-x-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
