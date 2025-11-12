import React, { useState, createContext, useContext } from 'react'

export const SizeMap: Record<ThemeSize, string> = {
  xs: 'text-xs p-1.5',
  sm: 'text-sm p-2',
  md: 'text-sm p-2.5',
  lg: 'text-base p-3',
  xl: 'text-lg p-4',
};

export type ThemeColor = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'light';
export type ThemeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ThemeType = 'light' | 'dark' | 'system';


export interface IElementRoundedProps {
  rounded?: boolean;
  roundedSize?: 'sm' | 'md' | 'lg' | 'full';
}

export const getElementSize = (sizeName: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => SizeMap[sizeName];

export const WithColorTheme = () => {

  const _themeType = localStorage.getItem("current_theme") || 'system';
  const [currentTheme, setTheme] = useState(_themeType);
  
  


  return (
    <div>
    </div>
  );
}