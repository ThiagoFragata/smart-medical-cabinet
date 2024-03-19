import { Dimensions } from "react-native";

export function scaleFontSize(fontSize: number, baseWidth = 375) {
  const { width } = Dimensions.get("window");
  const scaleFactor = width / baseWidth;

  return Math.round(fontSize * scaleFactor);
}
