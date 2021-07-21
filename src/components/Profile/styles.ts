import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  pic: {
    height: 70,
    width: 70,
    borderWidth: 3,
    borderColor: colors.purple,
    borderRadius: 30,
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 90,
    marginTop: 15
  },
  profileText: {
    marginLeft: 10,
  },
  name: {
    fontFamily: fonts.heading,
    color: colors.purple,
    fontSize: 18,
  },
  edit: {
    fontFamily: fonts.text,
    color: colors.purple,
  },
  plano :{
    fontFamily: fonts.subHeading,
    color: colors.purple,
    fontStyle: 'italic'
  },
  logoutIcon: {
    color: colors.purple,
    marginLeft: 270,
    marginTop: -45,
  },
  iconContainer: {
    marginBottom: 20,
  },
});
