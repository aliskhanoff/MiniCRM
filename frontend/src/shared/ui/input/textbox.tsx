import { WithClassName } from '@/shared/ui/utils';
import type { TextBoxProps } from './types.ts'
import { useId } from 'react';
import { getElementSize } from '@/shared';

export const TextBoxNormal = ({ label, placeholder, className, id, theme, size = "md", ...rest }: TextBoxProps) => {

  const _id = id || useId();
  const _size = getElementSize(size);
  

  return (
        <div>
            <label htmlFor={_id} className={ `block mb-2 text-sm font-medium text-gray-900 dark:text-white` }>{label}</label>
            <input {...rest} type="text" id={_id} className={ `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}` } placeholder={placeholder} required />
        </div>
        )
};

export const TextBoxBase = (props: TextBoxProps) => (
  <WithClassName {...props}>
    <input />
  </WithClassName>
);
