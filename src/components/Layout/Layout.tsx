import { SessionProviders } from "@/lib/next-auth/providers";
import React, { JSX, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return <SessionProviders>{children}</SessionProviders>;
};

export default Layout;
