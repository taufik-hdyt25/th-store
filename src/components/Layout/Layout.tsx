"use client";

import { Box } from "@chakra-ui/react";
import React, { JSX, ReactNode } from "react";
import SideBar from "../Sidebar/Sidebar";
import { HeaderHome } from "../HeaderHome";
import { Background } from "../Background";

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

  return (
    <Box>
      <Background>
        <Box
          position="sticky"
          top="0"
          zIndex="10"
          bg="rgba(0, 0, 0, 0.6)"
          backdropFilter="auto"
          backdropBlur="10px"
        >
          <HeaderHome />
        </Box>
        {children}
      </Background>
    </Box>
  );
};

export default Layout;
