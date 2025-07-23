"use client";
import { SessionProviders } from "@/lib/next-auth/providers";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Fragment, ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

interface IProps {
  children: ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <SessionProviders>
          <ColorModeScript initialColorMode="light" />
          <ChakraProvider>{children}</ChakraProvider>
        </SessionProviders>
      </QueryClientProvider>
    </Fragment>
  );
};

export default Providers;
