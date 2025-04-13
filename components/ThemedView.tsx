import { View, type ViewProps } from "react-native";
import { useThemeProvider } from "./ThemeProvider";
import { ColorsByProp } from "@/constants/Colors";
import { useMemo } from "react";

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const { themeName } = useThemeProvider();

  const backgroundColor = useMemo(
    () => ColorsByProp?.[themeName]?.background,
    [themeName],
  );

  const styles = useMemo(
    () => [{ backgroundColor }, style],
    [backgroundColor, style],
  );

  return <View style={styles} {...otherProps} />;
}
