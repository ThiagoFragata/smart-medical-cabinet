import { Dimensions, StyleSheet } from "react-native";

import { scaleFontSize } from "../functions/fontSize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "flex-start",
    marginTop: scaleFontSize(8),
    paddingHorizontal: scaleFontSize(24),
    paddingVertical: scaleFontSize(8),
    width: Dimensions.get("window").width,
  },
  title: {
    fontSize: scaleFontSize(28),
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: scaleFontSize(14),
    color: "#38434D",
    textAlign: "center",
  },
});
