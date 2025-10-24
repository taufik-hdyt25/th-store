"use client";

import { Box } from "@chakra-ui/react";
import React, { JSX, ReactNode } from "react";
import SideBar from "../Sidebar/Sidebar";

interface ILayoutProps {
  children: ReactNode;
  type?: "admin" | "user";
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  type = "user",
}): JSX.Element => {
  if (type === "admin") {
    return <SideBar>{children}</SideBar>;
  }
  return <Box>{children}</Box>;
};

export default Layout;
