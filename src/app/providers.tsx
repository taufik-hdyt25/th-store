"use client";
import { SessionProviders } from "@/lib/next-auth/providers";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React, { Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <SessionProviders>
        <ColorModeScript initialColorMode="light" />
        <ChakraProvider>{children}</ChakraProvider>
      </SessionProviders>
    </Fragment>
  );
};

export default Providers;
