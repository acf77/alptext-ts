import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
};

export function MenuButtonPurple({ title, subtitle, ...rest }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity {...rest} style={styles.buttonProjeto}>
        <Text style={styles.buttonProjetoTitle}>{ title }</Text>
        <Text style={styles.buttonProjetoSubtitle}>
          {subtitle}
        </Text>
        <Text style={styles.buttonProjetoAbra}>abra o modelo {">>"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
