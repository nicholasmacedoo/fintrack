import { colors, fonts } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.gray[500],
    marginBottom: 4,
  },
  status: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  value: {
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  target: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.gray[500]
  },
  percentage: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.blue[500]
  },
  progress: {
    marginTop: 16,
    width: '100%',
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.gray[300],
    overflow: 'hidden'
  },
  currentProgress: {
    height: 5,
    backgroundColor: colors.blue[500]
  },
});
