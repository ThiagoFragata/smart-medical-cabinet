import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { OnboardingIcon } from "@/src/assets/svg";
import { styles } from "@/src/styles/onboarding";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <OnboardingIcon />

        <Text style={styles.title}>Seja bem-vindo ao Smart Medical Cabinet</Text>
        <Text style={styles.subtitle}>
          Nosso app ajuda você a lembrar de tomar seus remédios. Receba lembretes e acompanhe sua
          saúde com facilidade. Pronto para começar?
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.replace("/home")}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
