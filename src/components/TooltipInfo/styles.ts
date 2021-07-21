import { StyleSheet } from "react-native";

import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  circle: {
    alignSelf: "center",
    textAlign: "center",
    color: colors.purple,
    fontSize: 14,
    fontFamily: fonts.heading,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: colors.purple,
    borderRadius: 12,
    width: 24,
    marginHorizontal: 10,
  },
});
