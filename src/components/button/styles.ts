import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue[500],
        height: 48,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: fonts.medium,
        fontSize: 14,
        color: colors.white
    }
})