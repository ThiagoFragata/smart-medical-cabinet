import { Stack } from "expo-router";
import { Text, View } from "react-native";

import { styles } from "@/src/styles/home";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Home",
        }}
      />
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>👋Olá</Text>
            <Text style={styles.subtitle}>Seja bem-vindo(a)</Text>
          </View>
        </View>
      </View>
    </>
  );
}
