import type { SharedProps } from '@/shared/models';
import { WithClassName } from '../utils';

interface TextBoxProps extends SharedProps<HTMLInputElement> {
  type?: string;
  rounded?: boolean;
  pattern?: string;
  password?: boolean;
}

export const TextBox = (props: TextBoxProps) => (
  <WithClassName {...props}>
    <input />
  </WithClassName>
);
