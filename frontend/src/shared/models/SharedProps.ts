import type { HTMLAttributes } from 'react';
import type { IElementThemeProps, IElementSizeProps, IElementRoundedProps } from '@/shared';

export type SharedComponentProps<T extends HTMLElement = HTMLElement> = HTMLAttributes<T> 
& IElementThemeProps 
& IElementRoundedProps 
& IElementSizeProps
& {
  name?: string;
  className?: string;
  ref?: React.Ref<T>;
  children?: React.ReactElement | any;
};