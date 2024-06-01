import { StyleSheet } from "react-native";

import { scaleSize } from "@/src/functions/scaleSize";
import { theme } from "@/src/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleSize(24),
    backgroundColor: theme.colors.light,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: scaleSize(16),
    marginBottom: scaleSize(24),
  },
  listContainer: {
    flexDirection: "column",
    borderRadius: scaleSize(24),
    padding: scaleSize(16),

    backgroundColor: theme.colors.light,
    shadowColor: theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  itemList: {
    flexDirection: "row",
    borderRadius: scaleSize(8),
    padding: scaleSize(16),
  },
  vStack: {
    flex: 1,
    gap: scaleSize(16),
  },
});
