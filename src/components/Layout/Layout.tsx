"use client";

import { Box } from "@chakra-ui/react";
import React, { JSX, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return <Box>{children}</Box>;
};

export default Layout;
