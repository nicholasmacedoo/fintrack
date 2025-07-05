import { Text, View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/theme/colors";
import { Separator } from "../ui/separator";
import { Summary, SummaryProps } from "../summary";

export interface HeaderDataProps {
  total: string;
  input: SummaryProps;
  output: SummaryProps;
}

interface Props {
  data: HeaderDataProps;
}

export function Header({ data }: Props) {
  return (
    <LinearGradient
      colors={[colors.blue[500], colors.blue[800]]}
      style={styles.container}
    >
      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.blue[400]} />

      <View style={styles.summaryContainer}>
        <Summary
          data={data.input}
          icon={{ name: "arrow-upward", color: colors.green[500] }}
        />

        <Summary
          data={data.output}
          icon={{ name: "arrow-downward", color: colors.red[400] }}
          align="right"
        />
      </View>
    </LinearGradient>
  );
}
