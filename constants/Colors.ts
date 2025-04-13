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

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const DefaultThemes: Record<string, ThemeType> = {
  light: DefaultTheme,
  dark: DarkTheme,
};

export const THEME_LIGHT: ColorNameType = "light";
export const THEME_DARK: ColorNameType = "dark";
