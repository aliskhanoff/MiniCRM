import type { SharedComponentProps, ThemeColor, ThemeSize } from '@/shared';

export type TextBoxVariant = 'normal' | 'floating' | 'floating_filled' | 'floating_outlined';

export interface TextBoxProps extends SharedComponentProps<HTMLInputElement> {
  type?: string;
  rounded?: boolean;
  pattern?: string;
  password?: boolean;
  variant?: TextBoxVariant;
  label?: string;
  placeholder?:string;
  value?: string;
  size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'
}


