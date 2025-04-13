/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import {
  DarkTheme,
  DefaultTheme,
  Theme as ThemeType,
} from "@react-navigation/native";
import type { ColorSchemeName } from "react-native";

export type ColorNameType = NonNullable<ColorSchemeName>;

export const Colors = {
  Night: "#0C1214",
  DarkPurple: "#332b3d",
  ChineseViolet: "#68597b",
  Wisteria: "#bda0e2",
  Magnolia: "#f3edfb",
  WhiteSmoke: "#f5f5f5",
  Bone: "#d4d4c2",
  White: "#fcfcfc",
};

/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

export const ColorsByProp = {
  light: {
    text: Colors.Night,
    background: Colors.Bone,
    tint: Colors.Magnolia,
    icon: Colors.Wisteria,
    tabIconDefault: Colors.ChineseViolet,
    tabIconSelected: Colors.Magnolia,
  },
  dark: {
    text: Colors.White,
    background: Colors.Night,
    tint: Colors.Magnolia,
    icon: Colors.Wisteria,
    tabIconDefault: Colors.Wisteria,
    tabIconSelected: Colors.White,
  },
};

export const DefaultThemes: Record<string, ThemeType> = {
  light: DefaultTheme,
  dark: DarkTheme,
};

export const THEME_LIGHT: ColorNameType = "light";
export const THEME_DARK: ColorNameType = "dark";
