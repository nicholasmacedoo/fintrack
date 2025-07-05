import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 324,
        paddingHorizontal: 24,
        paddingBottom: 18,
        gap: 18,
        justifyContent: 'flex-end'
    },
    label: {
        fontSize: 12,
        color: colors.white,
        fontFamily: fonts.regular
    },
    total: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.medium,
    },
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})