import React, { createContext, useContext, useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";

import { ThemeName } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";

type contextType = Maybe<{
  theme: ColorSchemeName;
  toggleTheme: () => void;
}>;

const ThemeContext = createContext<contextType>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(ThemeName.light);

  const colorScheme = useColorScheme() ?? ThemeName.light;

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeName.light ? ThemeName.dark : ThemeName.light,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
