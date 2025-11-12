import React from 'react'
import type { IElementThemeProps, ThemeColor, SharedComponentProps, IElementColorTypeProps } from '@/shared';

type WithColorTypeProps = SharedComponentProps<HTMLDivElement> & IElementThemeProps;

export const baseColors: Record<ThemeColor, string> = {
  primary: 'blue',
  info: 'cyan',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  dark: 'gray',
  light: 'slate',
};

type ColorThemeProps = IElementColorTypeProps & IElementThemeProps;


export const getColorClasses = ({ color = 'primary', theme = 'light' }: ColorThemeProps) => {
  
  const base = baseColors[color];
  
  return {
    text: theme === 'dark' ? `text-${base}-100` : `text-${base}-900`,
    border: theme === 'dark' ? `dark:border-${base}-600` : `border-${base}-300`,
    focus: `focus:ring-${base}-500 focus:border-${base}-500 dark:focus:border-${base}-500`,
    hover: `hover:border-${base}-500`,
    label: `peer-focus:text-${base}-600 peer-focus:dark:text-${base}-500`,
  };
};

export const WithColorType = (props: WithColorTypeProps) => {
  const { color, className, ...rest } = props;
  
  const _colorClasses = getColorClasses({ theme: 'light', color: "dark" });
  const _colorClass = color === 'light' ? 'text-black bg-white' : 'text-white bg-black';
  const _children = React.cloneElement(props.children, rest);

  return (
    <div className={`${_colorClass} ${className}`} {...rest}>
      {_children}
    </div>
  );
};

export default WithColorType;
