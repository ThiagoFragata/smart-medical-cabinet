import { router } from "expo-router";
import { View } from "react-native";

import { OnboardingIcon } from "@/src/assets/svg";
import { Button } from "@/src/components/atoms/button";
import { Text } from "@/src/components/atoms/text";
import { scaleSize } from "@/src/functions/scaleSize";
import { styles } from "@/src/styles/onboarding";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <OnboardingIcon />

      <View style={styles.content}>
        <Text
          type={"title"}
          value={"Seja bem-vindo ao Smart Medical Cabinet"}
          textStyle={{ textAlign: "center", fontSize: scaleSize(28) }}
        />

        <Text
          type={"paragraph"}
          value={
            "Nosso app ajuda você a lembrar de tomar seus remédios. Receba lembretes e acompanhe sua saúde com facilidade. Pronto para começar?"
          }
          textStyle={{ textAlign: "center", fontSize: scaleSize(16) }}
        />

        <Button variant="primary" title="Começar" onPress={() => router.replace("/home")} />
      </View>
    </View>
  );
}
