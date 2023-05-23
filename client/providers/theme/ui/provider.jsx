// Import global npm modules
import React from "react";
import { useAtomValue } from "jotai";
import { ThemeProvider } from "styled-components";

// Import local api modules
import { lightTheme } from "#/states/theme";

// Create Container ui
const Container = ({ children }) => {
  const light = useAtomValue(lightTheme);

  // Return jsx
  // return <ThemeProvider theme={checkDark ? dark : light }>
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

// Export default Container ui
export default Container;
