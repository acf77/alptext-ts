import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonCancel({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={styles.cancelar}
    >
      <Text style={styles.salvarText}> {title} </Text>
    </TouchableOpacity>
  );
}
