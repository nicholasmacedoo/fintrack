import { Button } from "@/components/button";
import { CurrencyInput } from "@/components/currency-input";
import { Input } from "@/components/input";
import { PageHeader } from "@/components/page-header";
import { TransactionType } from "@/components/transaction-type";
import { useTransactionsDatabase } from "@/database/use-transaction-database";
import { TransactionTypes } from "@/utils/transaction-types";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, StatusBar, View } from "react-native";

export default function Transaction() {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(TransactionTypes.Input);
  const params = useLocalSearchParams<{ id: string }>();
  const [isCreating, setIsCreating] = useState(false);
  const [observation, setObservation] = useState("");
  const transactionsDatabase = useTransactionsDatabase();

  async function handleCreate() {
    try {
      if (amount <= 0) {
        return Alert.alert(
          "Atenção!",
          "Preencha o valor. A transação deve ser maior que zero."
        );
      }

      setIsCreating(true);

      await transactionsDatabase.create({
        target_id: Number(params.id),
        amount: type === TransactionTypes.Output ? amount * -1 : amount,
        observation,
      });

      Alert.alert("Sucesso", "Transação foi salva com sucesso!", [
        {
          text: "Ok",
          onPress: router.back,
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a transação");
      console.log(error);
      setIsCreating(false);
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <StatusBar barStyle="dark-content" />
      <PageHeader
        title="Nova transação"
        subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />

        <CurrencyInput
          label="Valor (R$)"
          value={amount}
          onChangeValue={setAmount}
        />

        <Input
          label="Motivo"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
          onChangeText={setObservation}
        />

        <Button title="Salvar" onPress={handleCreate} isLoading={isCreating} />
      </View>
    </View>
  );
}
