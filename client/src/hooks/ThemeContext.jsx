import { createContext, useContext } from "react";
import useTheme from "./useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const theme = useTheme(); // only call the hook once here
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

// Custom hook to use the theme in any component
export function useThemeContext() {
  return useContext(ThemeContext);
}
