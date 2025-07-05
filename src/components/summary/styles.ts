import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 4
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    label: {
        fontSize: 12,
        color: colors.white,
        fontFamily: fonts.regular
    },
    value: {
        fontSize: 18,
        color: colors.white
    }
})