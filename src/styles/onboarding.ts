import { StyleSheet } from "react-native";

import { scaleSize } from "@/src/functions/scaleSize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: scaleSize(32),
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    gap: scaleSize(16),
  },
  title: {
    fontSize: scaleSize(28),
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: scaleSize(14),
    color: "#38434D",
    textAlign: "center",
  },
  button: {
    color: "#FFFAFA",
    fontWeight: "bold",
    textAlign: "center",
    padding: scaleSize(14),
    backgroundColor: "#042940",
    borderRadius: scaleSize(8),
  },
  buttonText: {
    color: "#FFFAFA",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: scaleSize(14),
  },
});
