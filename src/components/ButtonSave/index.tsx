import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonSave({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.cadastrar}
    >
      <Text style={styles.salvarText}> {title} </Text>
    </TouchableOpacity>
  );
}
