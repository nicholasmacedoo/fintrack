import { Text, View } from "react-native";
import Input, { CurrencyInputProps } from "react-native-currency-input";
import { styles } from "./styles";
import { colors } from "@/theme";

interface Props extends CurrencyInputProps {
  label: string;
}
export function CurrencyInput({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Input
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
        {...rest}
      />
    </View>
  );
}
