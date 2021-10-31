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

export function MenuButtonBrown({ title, subtitle, ...rest }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity {...rest} style={styles.buttonArtigo}>
        <Text style={styles.buttonArtigoTitle}>{ title }</Text>
        <Text style={styles.buttonArtigoSubtitle}>
          { subtitle }
        </Text>
        <Text style={styles.buttonArtigoAbra}>{"<<"} abra o modelo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
