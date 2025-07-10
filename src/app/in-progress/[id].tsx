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
import { useCallback, useState } from "react";
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
  const [isRemovingTransactionId, setIsRemovingTransactionId] = useState<
    number | null
  >(null);
  const params = useLocalSearchParams<{ id: string }>();
  const { show } = useTargetDatabase();
  const { listByTargetId, remove } = useTransactionsDatabase();

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
    } catch (error) {
      Alert.alert("Error", "Não foi possivel carregar os detalhes da meta");
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }

  async function removeTransaction(id: number) {
    try {
      setIsRemovingTransactionId(id);
      await remove(id);
      await fetchDetails();

      return Alert.alert("Sucesso!", "Transação deletada com sucesso!");
    } catch (error) {
      Alert.alert(
        "Error!",
        "Não foi possivel remover a transação, tente novamente."
      );
    } finally {
      setIsRemovingTransactionId(null);
    }
  }

  async function handleRemove(id: string) {
    Alert.alert("Remover", "Deseja realmente remover essa transação?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        style: "destructive",
        onPress: () => removeTransaction(+id),
      },
    ]);
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
          onPress: () => router.navigate(`/target?id=${params.id}`),
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction
            data={item}
            onRemove={() => handleRemove(item.id)}
            isRemoving={isRemovingTransactionId === +item.id}
          />
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
