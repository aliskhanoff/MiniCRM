import React from 'react';

interface LayoutProps {
  children?: React.ReactNode | any;
  navbar?: React.ReactNode | any;
}

export const Layout = (props: LayoutProps) => {
  return <div>{props.children}</div>;
};

export default Layout;
