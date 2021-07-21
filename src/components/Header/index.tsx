import React from "react";
import { Text, TextProps, View } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  return <Text style={styles.header} {...rest}>{title}</Text>;
}
