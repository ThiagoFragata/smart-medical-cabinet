import { Stack } from "expo-router/stack";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: "#191919",
        headerStyle: {
          backgroundColor: "#D6D58E",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
