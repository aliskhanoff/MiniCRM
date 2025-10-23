import type { HTMLAttributes } from 'react';

export type SharedProps<T extends HTMLElement = HTMLElement> = HTMLAttributes<T> & {
  name?: string;
  className?: string;
  ref?: React.Ref<T>;
  children?: React.ReactElement | any;
};
