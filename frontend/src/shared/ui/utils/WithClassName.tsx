import type { SharedComponentProps } from '@/shared/models';
import React from 'react';

export const WithClassName = ({ className, children, ...rest }: SharedComponentProps) => {
  if (className === undefined || className === '') return React.cloneElement(children, { ...rest });

  return React.cloneElement(children, {
    className,
    ...rest,
  });
};

export default WithClassName;
