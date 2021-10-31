import { StyleSheet } from "react-native";

import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({

container: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    fontFamily: fonts.heading,
    fontSize: 28,
    color: colors.purple,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  buttonProjeto: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    height: '80%',
    aspectRatio: 2 / 1,
    alignSelf: 'center'
  },
  buttonProjetoTitle: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.heading,
    padding: 20,
  },
  buttonProjetoSubtitle: {
    fontFamily: fonts.subHeading,
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.white,
  },
  buttonProjetoAbra: {
    fontFamily: fonts.subHeading,
    color: colors.white,
    alignSelf: "flex-end",
    padding: 20,
    fontStyle: "italic",
  },
  buttonArtigo: {
    backgroundColor: colors.yellow,
    borderRadius: 10,
    height: 200,
    width: 380,
    marginVertical: 20,
    alignSelf: 'center'
  },
  buttonArtigoTitle: {
    fontSize: 24,
    color: colors.purple,
    fontFamily: fonts.heading,
    padding: 20,
    alignSelf: "flex-end",
  },
  buttonArtigoSubtitle: {
    fontFamily: fonts.subHeading,
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.purple,
    textAlign: "right",
  },
  buttonArtigoAbra: {
    fontFamily: fonts.subHeading,
    color: colors.purple,
    alignSelf: "flex-start",
    padding: 20,
    fontStyle: "italic",
  },
});