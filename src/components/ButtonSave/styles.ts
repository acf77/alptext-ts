import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  cadastrar: {
    width: 164,
    height: 64,
    backgroundColor: colors.purple,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 15,
  },
  cadastrarInvalid: {
    opacity: 0.5,
  },
  salvarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: fonts.text,
  },
});
