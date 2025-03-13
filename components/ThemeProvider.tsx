import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme as ThemeType } from "@react-navigation/native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as ReactThemeProvider,
} from "@react-navigation/native";

import { THEME_DARK, THEME_LIGHT, ColorSchemeName } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";

type ThemeContextType = Maybe<{
  colors: ThemeType;
  theme: ColorSchemeName;
  toggleTheme: () => void;
}>;

const ThemeContext = createContext<ThemeContextType>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme() ?? THEME_LIGHT;

  const [theme, setTheme] = useState(THEME_LIGHT);
  const [colors, setColors] = useState(DefaultTheme);

  useEffect(() => {
    setTheme(colorScheme);
    setColors(colorScheme === THEME_DARK ? DarkTheme : DefaultTheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === THEME_LIGHT) {
        return THEME_DARK;
      }
      return THEME_LIGHT;
    });
  };

  return (
    <ThemeContext.Provider value={{ colors, theme, toggleTheme }}>
      <ReactThemeProvider
        value={colorScheme === THEME_DARK ? DarkTheme : DefaultTheme}
      >
        {children}
      </ReactThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
