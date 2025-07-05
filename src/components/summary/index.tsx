import { ColorValue, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export interface SummaryProps {
  label: string;
  value: string;
}

interface Props {
  data: SummaryProps;
  icon: {
    name: keyof typeof MaterialIcons.glyphMap;
    color: ColorValue;
  };
  align?: "default" | "right";
}

export function Summary({ data, icon, align = "default" }: Props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          align === "right" && { justifyContent: "flex-end" },
        ]}
      >
        <MaterialIcons name={icon.name} color={icon.color} size={16} />
        <Text style={styles.label}>{data.label}</Text>
      </View>

      <Text style={styles.value}>{data.value}</Text>
    </View>
  );
}
