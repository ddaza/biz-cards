import { MetroConfig } from "metro-config";
import { getDefaultConfig } from "expo/metro-config";

const config: MetroConfig = getDefaultConfig(__dirname);

// Customize the resolverMainFields
if (config.resolver) {
  config.resolver.resolverMainFields = ["react-native", "browser", "main"];
}

export default config;
