import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 8,
    },
    label: {
        color: colors.gray[500],
        fontFamily: fonts.medium,
        fontSize: 12
    },
    input: {
        color: colors.black,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[400]
    }
})