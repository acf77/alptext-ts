import { StyleSheet } from "react-native";
import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    fontFamily: fonts.heading,
    fontSize: 22,
    color: colors.purple,
    paddingVertical: 10,
  },
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: fonts.subHeading,
    fontSize: 18,
    color: colors.purple,
    paddingVertical: 10,
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 14,
  },
  square: {
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 10,
    padding: 10,
  },
  squareTitle: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  icon: {
    color: colors.purple,
    marginTop:12
  },
});
