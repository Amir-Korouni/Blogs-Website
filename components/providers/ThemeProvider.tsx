import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export type ThemeType = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeType) => {
  return (
    <>
      <NextThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
      >
        {children}
      </NextThemeProvider>
    </>
  );
};

export default ThemeProvider;
