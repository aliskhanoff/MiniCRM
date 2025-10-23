import type { SharedProps } from '@/shared/models';
import React from 'react';

export const WithClassName = ({ className, children, ...rest }: SharedProps) => {
  if (className === undefined || className === '') return React.cloneElement(children, { ...rest });

  return React.cloneElement(children, {
    className,
    ...rest,
  });
};

export default WithClassName;
