"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
type Theme = "light" | "dark";

interface AppContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const AppContext = createContext<AppContextProps | undefined>(undefined);
export const Provider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used inside Provider");
  return context;
};
