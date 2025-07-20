import React, { JSX, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

export default Layout;
