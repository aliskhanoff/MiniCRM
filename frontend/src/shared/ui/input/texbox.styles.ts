import { type IElementRoundedProps, SizeMap } from '@/shared';

export const getRoundedClass = ({ rounded, roundedSize }: IElementRoundedProps) => {
  if (!rounded) return '';
  switch (roundedSize) {
    case 'sm':
      return 'rounded-sm';
    case 'md':
      return 'rounded-md';
    case 'lg':
      return 'rounded-lg';
    case 'full':
      return 'rounded-full';
    default:
      return 'rounded';
  }
};

