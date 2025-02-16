import { Image, StyleSheet, Platform } from "react-native";
import { Asset } from "expo-asset";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: papayawhip;
  height: 100%;
`;

const reactLogo = Asset.fromModule(
  require("@/assets/images/partial-react-logo.png"),
).uri;

export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      {/* headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    headerImage={
      <Image source={{ uri: reactLogo }} style={styles.reactLogo} />
    }
    >*/}
      <StyledView />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: "absolute",
  // },
});
