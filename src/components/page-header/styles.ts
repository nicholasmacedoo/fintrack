import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
    },
    title: {
        fontSize: 24,
        color: colors.black,
        fontFamily: fonts.bold,
        marginBottom: 8
    },
    subtitle: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fonts.regular
    }
})