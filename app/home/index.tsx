import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text } from "@/src/components/atoms/text";
import { ItemMedicament } from "@/src/components/molecules/itemMedicament";
import { getGreeting } from "@/src/functions/getGreeting";
import { scaleSize } from "@/src/functions/scaleSize";
import { styles } from "@/src/styles/home";
import { theme } from "@/src/theme";

interface MedicamentProps {
  id: string;
  name: string;
  amount: number;
  updateAt: string;
}

const DATA: MedicamentProps[] = [
  { id: "1", name: "Paracetamol", amount: 10, updateAt: "17 de mar de 2024 às 21:35" },
  { id: "2", name: "Ibuprofeno", amount: 15, updateAt: "18 de mar de 2024 às 10:15" },
  { id: "3", name: "Dipirona", amount: 8, updateAt: "18 de mar de 2024 às 14:45" },
  { id: "4", name: "Cetoprofeno", amount: 20, updateAt: "19 de mar de 2024 às 09:30" },
  { id: "5", name: "Aspirina", amount: 12, updateAt: "20 de mar de 2024 às 16:20" },
  { id: "6", name: "Omeprazol", amount: 5, updateAt: "21 de mar de 2024 às 11:10" },
];

const renderHeader = () => (
  <Text type="heading" value="Meus remédios" style={{ marginTop: scaleSize(16) }} />
);

const renderItems = ({ item }: { item: MedicamentProps }) => (
  <View style={styles.itemList}>
    <View style={styles.vStack}>
      <ItemMedicament icon="badgeInfo" label={"Porta"} value={item.id} />
      <ItemMedicament icon="pill" label={"Remédio"} value={item.name} />
      <ItemMedicament icon="calendar" label={"Última dose"} value={item.updateAt} />
    </View>
    <View>
      <Text type="paragraph" value={"Quantidade"} textStyle={{ color: theme.colors.gray }} />
      <Text type="title" value={item.amount} textStyle={{ fontSize: scaleSize(64) }} />
    </View>
  </View>
);

export default function Home() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text type="title" value={`👋`} textStyle={{ fontSize: scaleSize(48) }} />
        <View>
          <Text type="title" value={`Olá, ${getGreeting()}`} />
          <Text type="subtitle" value="Seja bem-vindo(a)" />
        </View>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        contentContainerStyle={{
          gap: scaleSize(16),
          paddingBottom: bottom,
          paddingHorizontal: scaleSize(4),
        }}
      />
    </View>
  );
}
