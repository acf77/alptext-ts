import { StyleSheet } from "react-native";

import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "center",
    height: '100%',
    aspectRatio: 2 / 1
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.purple,
    marginBottom: 30,
    fontWeight: "bold",
  },
});
