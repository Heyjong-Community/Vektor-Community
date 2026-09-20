import { lazy, Suspense, type ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import type { IconName } from '../../types/icon';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  size?: number;
  className?: string;
}

const iconMap = Object.fromEntries(
  Object.entries(dynamicIconImports).map(([name, importIcon]) => [name, lazy(importIcon)]),
) as Partial<Record<IconName, ComponentType<LucideProps>>>;

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <span
          className={className}
          style={{
            width: size,
            height: size,
            display: 'inline-block',
          }}
        />
      }
    >
      <LucideIcon size={size} className={className} {...props} />
    </Suspense>
  );
};
