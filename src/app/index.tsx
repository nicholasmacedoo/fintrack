import { Button } from "@/components/button";
import { Header } from "@/components/home/header";
import { List } from "@/components/list";
import { Target } from "@/components/target";
import { router } from "expo-router";
import { StatusBar, View } from "react-native";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.150,00" },
  output: { label: "Saídas", value: "- R$ 800,00" },
};

const targets = [
  {
    name: "Pintar parede da sala de estar",
    current: "350,00",
    percentage: "70%",
    target: "500,00",
  },
  {
    name: "Comprar nova cadeira de escritório",
    current: "450,00",
    percentage: "50%",
    target: "900,00",
  },
  {
    name: "Reformar banheiro social",
    current: "2.500,00",
    percentage: "25%",
    target: "10.000,00",
  },
  {
    name: "Trocar piso da cozinha",
    current: "800,00",
    percentage: "40%",
    target: "2.000,00",
  },
  {
    name: "Adquirir nova TV para o quarto",
    current: "1.500,00",
    percentage: "75%",
    target: "2.000,00",
  },
  {
    name: "Instalar ar condicionado no quarto",
    current: "0,00",
    percentage: "0%",
    target: "2.800,00",
  },
  {
    name: "Comprar máquina de lavar louça",
    current: "1.000,00",
    percentage: "50%",
    target: "2.000,00",
  },
  {
    name: "Organizar armário da despensa",
    current: "100,00",
    percentage: "20%",
    target: "500,00",
  },
  {
    name: "Fazer manutenção do carro",
    current: "200,00",
    percentage: "20%",
    target: "1.000,00",
  },
  {
    name: "Economizar para viagem de férias",
    current: "3.000,00",
    percentage: "30%",
    target: "10.000,00",
  },
];

export default function App() {
  function navigateNewTarget() {
    router.navigate("/target");
  }

  function navigateInProgress(id: string) {
    router.navigate(`/in-progress/${id}`);
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Header data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Target data={item} onPress={() => navigateInProgress(item.name)} />
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
