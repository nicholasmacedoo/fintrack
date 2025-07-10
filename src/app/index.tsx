import { Button } from "@/components/button";
import { Header } from "@/components/home/header";
import { List } from "@/components/list";
import { Loading } from "@/components/loading";
import { Target, TargetProps } from "@/components/target";
import {
  TargetResponse,
  useTargetDatabase,
} from "@/database/useTargetDatabase";
import { numberToCurrency } from "@/utils/numberToCurrency";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StatusBar, View } from "react-native";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.150,00" },
  output: { label: "Saídas", value: "- R$ 800,00" },
};

export default function App() {
  const { listBySavedValue } = useTargetDatabase();
  const [targets, setTargets] = useState<TargetProps[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  function navigateNewTarget() {
    router.navigate("/target");
  }

  function navigateInProgress(id: string) {
    router.navigate(`/in-progress/${id}`);
  }

  async function fetchTargets() {
    setIsFetching(true);
    const data = await listBySavedValue();

    const targetFormatted = data.map((item) => ({
      id: String(item.id),
      name: item.name,
      current: numberToCurrency(item.current),
      percentage: item.percentage.toFixed(0) + "%",
      target: numberToCurrency(item.amount),
    }));

    setTargets(targetFormatted);
    setIsFetching(false);
  }

  useFocusEffect(
    useCallback(() => {
      fetchTargets();
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Header data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Target data={item} onPress={() => navigateInProgress(item.id)} />
        )}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={navigateNewTarget} />
      </View>
    </View>
  );
}
