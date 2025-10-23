export interface IThemeTypeProps {
  theme?: 'light' | 'dark';
}

export interface IElementColorTypeProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export interface IElementRoundedProps {
  rounded?: boolean;
  roundedSize?: 'sm' | 'md' | 'lg' | 'full';
}
