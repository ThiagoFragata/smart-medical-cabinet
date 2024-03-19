import { StyleSheet } from "react-native";

import { scaleFontSize } from "../functions/fontSize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: scaleFontSize(32),
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    gap: scaleFontSize(16),
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
  button: {
    color: "#FFFAFA",
    fontWeight: "bold",
    textAlign: "center",
    padding: scaleFontSize(14),
    backgroundColor: "#042940",
    borderRadius: scaleFontSize(8),
  },
  buttonText: {
    color: "#FFFAFA",
    fontWeight: "bold",
    textAlign: "center",
  },
});
