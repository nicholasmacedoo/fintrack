import { Button } from "@/components/button";
import { List } from "@/components/list";
import { PageHeader } from "@/components/page-header";
import { Progress } from "@/components/progress";
import { Transaction, TransactionProps } from "@/components/transaction";
import { TransactionTypes } from "@/utils/transaction-types";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const details = {
  current: "R$ 500,80",
  target: "R$ 1.200,20",
  percentage: 60,
};

const transactions: TransactionProps[] = [
  {
    id: "12",
    value: "R$ 30,00",
    date: "05/07/2025",
    description: "CPA de 110% na casa de aposta",
    type: TransactionTypes.Input,
  },
  {
    id: "2",
    value: "R$ 20,00",
    date: "05/07/2025",
    description: "CPA de 110% na casa de aposta",
    type: TransactionTypes.Output,
  },
];
export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: "edit",
          onPress: () => {},
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação. Toque em nova transcação para guardar seu primeiro dinheiro aqui."
      />

      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
