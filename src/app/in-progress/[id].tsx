import { Button } from "@/components/button";
import { List } from "@/components/list";
import { Loading } from "@/components/loading";
import { PageHeader } from "@/components/page-header";
import { Progress } from "@/components/progress";
import { Transaction, TransactionProps } from "@/components/transaction";
import { useTransactionsDatabase } from "@/database/use-transaction-database";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { numberToCurrency } from "@/utils/numberToCurrency";
import { TransactionTypes } from "@/utils/transaction-types";

import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert, StatusBar, View } from "react-native";

export default function InProgress() {
  const [isFetching, setIsFetching] = useState(false);
  const [details, setDetails] = useState({
    name: "",
    current: "",
    target: "",
    percentage: 0,
  });
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const params = useLocalSearchParams<{ id: string }>();
  const { show } = useTargetDatabase();
  const { listByTargetId } = useTransactionsDatabase();

  async function fetchDetails() {
    try {
      setIsFetching(true);
      const response = await show(+params.id);
      const responseTransactions = await listByTargetId(+params.id);

      setDetails({
        name: response.name,
        current: numberToCurrency(response.current),
        percentage: response.percentage,
        target: numberToCurrency(response.amount),
      });

      setTransactions(
        responseTransactions.map((item) => ({
          id: String(item.id),
          value: numberToCurrency(item.amount),
          date: String(item.created_at),
          description: item.observation,
          type:
            item.amount < 0 ? TransactionTypes.Output : TransactionTypes.Input,
        }))
      );
      console.log(response);
    } catch (error) {
      Alert.alert("Error", "Não foi possivel carregar os detalhes da meta");
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDetails();
    }, [])
  );

  if (isFetching) return <Loading />;

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <StatusBar barStyle="dark-content" />
      <PageHeader
        title={details.name}
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
