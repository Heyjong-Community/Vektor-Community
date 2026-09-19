import DynamicIcon from 'lucide-react/dynamic';
import { IconName } from './types';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export const Icon = ({ name, size = 24, className }: IconProps) => {
  return <DynamicIcon name={name} size={size} className={className} />;
};
