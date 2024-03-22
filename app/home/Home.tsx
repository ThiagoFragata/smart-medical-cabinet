import { appFirebase } from "@/firebaseConfig";
import { Text } from "@/src/components/atoms/text";
import { getGreeting } from "@/src/functions/getGreeting";
import { scaleSize } from "@/src/functions/scaleSize";
import { styles } from "@/src/styles/home";
import { useQuery } from "@tanstack/react-query";
import { getDatabase, onValue, ref } from "firebase/database";
import { FlatList, RefreshControl, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MedicamentProps, renderHeader, renderItems } from ".";


export default function Home() {
  const { top } = useSafeAreaInsets();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["medicaments"],
    queryFn: async () => {
      const db = getDatabase(appFirebase);
      const medicamentsURL = ref(db, "medicaments/");

      const medicaments = new Promise((resolve, reject) => {
        onValue(
          medicamentsURL,
          (snapshot) => {
            const data = snapshot.val();
            const arrayMedicaments = Object.keys(data).map((key) => {
              return { id: key, ...data[key] };
            });

            resolve(arrayMedicaments);
          },
          (error) => {
            reject(error);
          }
        );
      });
      return medicaments as unknown as MedicamentProps[];
    },
    initialData: [] as MedicamentProps[],
  });

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
        refreshControl={<RefreshControl />}
        refreshing={isLoading}
        data={data}
        keyExtractor={(item) => item.medicament}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        contentContainerStyle={{
          gap: scaleSize(16),
          paddingBottom: top,
          paddingHorizontal: scaleSize(4),
        }} />
    </View>
  );
}
