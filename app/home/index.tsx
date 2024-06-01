import { useQuery } from "@tanstack/react-query";
import { onValue, ref, set } from "firebase/database";
import { Alert, FlatList, RefreshControl, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button } from "@/src/components/atoms/button";
import { Text } from "@/src/components/atoms/text";
import { ItemMedicament } from "@/src/components/molecules/itemMedicament";
import { formattingTimestamp } from "@/src/functions/formattingTimeStamp";
import { getGreeting } from "@/src/functions/getGreeting";
import { scaleSize } from "@/src/functions/scaleSize";
import { database } from "@/src/services/firebase";
import { styles } from "@/src/styles/home";
import { theme } from "@/src/theme";

interface CabinetProps {
  id: number;
  medicament: string;
  amount: number;
  updatedAt: number[];
}

export default function Home() {
  const { top } = useSafeAreaInsets();

  const { data, isLoading, isRefetching, isError, refetch } = useQuery({
    queryKey: ["cabinet"],
    queryFn: async () => {
      const cabinet = new Promise((resolve, reject) => {
        onValue(
          ref(database, "/cabinet"),
          (snapshot) => {
            const data = snapshot.val();
            const arrayCabinet = Object.keys(data).map((key) => {
              return { id: key, ...data[key] };
            });

            resolve(arrayCabinet);
          },
          (error) => {
            reject(error);
          },
        );
      });
      return cabinet as unknown as CabinetProps[];
    },
    initialData: [] as CabinetProps[],
  });

  const handleTakeMedicine = (item: CabinetProps) => {
    Alert.alert("Lembrete de medicação", "Está na hora de tomar seu remédio. Deseja confirmar?", [
      { text: "Cancelar" },
      { text: "OK", onPress: () => onTakeMedicine(item) },
    ]);
  };

  const onTakeMedicine = ({ id, medicament, amount, updatedAt }: CabinetProps) => {
    if (amount > 0) {
      set(ref(database, `cabinet/port${id}`), {
        id,
        medicament,
        amount: --amount,
        updatedAt: updatedAt ? [Date.now(), ...updatedAt] : [Date.now()],
      })
        .then(() => {
          Alert.alert("Horário registrado", "Um passo a mais para a recuperação!", [
            { text: "OK" },
          ]);
        })
        .catch((error) => {
          Alert.alert("Ops, algo deu errado", error.message, [{ text: "Tentar novamente" }]);
        })
        .finally(() => {
          refetch();
        });
    } else {
      Alert.alert("Ops, parece que seu remédio acabou", "Deseja comunicar seu médico?", [
        { text: "Sim" },
        { text: "Não" },
      ]);
    }
  };

  const renderItems = ({ item }: { item: CabinetProps }) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.itemList}>
          <View style={styles.vStack}>
            <ItemMedicament icon="badgeInfo" label={"Porta"} value={item.id} />
            <ItemMedicament icon="pill" label={"Remédio"} value={item.medicament} />
            {item.updatedAt && item.updatedAt.length > 0 && (
              <ItemMedicament
                icon="calendar"
                label={"Última dose"}
                value={formattingTimestamp(Number(item.updatedAt[0]))}
              />
            )}
          </View>
          <View>
            <Text type="paragraph" value={"Quantidade"} textStyle={{ color: theme.colors.gray }} />
            <Text type="title" value={item.amount} textStyle={{ fontSize: scaleSize(64) }} />
          </View>
        </View>

        <Button title={"Tomar remédio"} onPress={() => handleTakeMedicine(item)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text type="title" value={`👋`} />
        <View>
          <Text type="title" value={`Olá, ${getGreeting()}`} textStyle={{}} />
          <Text type="subtitle" value="Seja bem-vindo(a)" />
        </View>
      </View>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={theme.colors.dark}
            colors={[theme.colors.secondary.light]}
          />
        }
        refreshing={isLoading}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Text type="title" value="Meus remédios" style={{ marginTop: scaleSize(16) }} />
        }
        ListEmptyComponent={
          <View style={{ flex: 1 }}>
            {isError && (
              <Text type={"title"} value={"Não encontramos seus dados ou pode estar offline"} />
            )}
          </View>
        }
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        contentContainerStyle={{
          gap: scaleSize(16),
          paddingBottom: top,
          paddingHorizontal: scaleSize(4),
        }}
      />
    </View>
  );
}
