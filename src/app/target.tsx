import { Button } from "@/components/button";
import { CurrencyInput } from "@/components/currency-input";
import { Input } from "@/components/input";
import { PageHeader } from "@/components/page-header";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

export default function Target() {
  const { create } = useTargetDatabase();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const params = useLocalSearchParams<{ id?: string }>();

  function handleSave() {
    if (!name.trim() || amount <= 0)
      return Alert.alert("Atenção", "Preencha nome e valor.");

    setIsSubmiting(true);

    if (params.id) {
      // update
    }
    return hanldeCreate();
  }

  async function hanldeCreate() {
    try {
      await create({ name, amount });
      Alert.alert("Nova meta", "Meta criada com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Não foi possivel criar a meta");
      console.log(error);
    } finally {
      setIsSubmiting(false);
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da meta"
          placeholder="Ex.: Viagem para praia, Apple Watch"
          value={name}
          onChangeText={setName}
        />
        <CurrencyInput
          label="Valor alvo"
          value={amount}
          onChangeValue={setAmount}
        />
        <Button title="Salvar" onPress={handleSave} isLoading={isSubmiting} />
      </View>
    </View>
  );
}
