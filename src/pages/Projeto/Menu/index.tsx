import { useNavigation } from "@react-navigation/native";
import React from "react";

import { MenuButtonPurple } from "../../../components/MenuButtonPurple";
import { MenuButtonBrown } from "../../../components/MenuButtonBrown";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";

export function Menu() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Escolha o seu modelo:</Text>
      <MenuButtonPurple
        title="Projeto de Pesquisa"
        subtitle="Proponha uma solução e organize suas idéias de pesquisa a serem
          executadas"
        onPress={() => navigation.navigate("ObjetivoGeral")}
      />
      <MenuButtonBrown
        title="Artigo Científico"
        subtitle="Descreva os seus resultados e mostre a importância da sua
    pesquisa para o mundo."
      />
      <MenuButtonPurple
        title="Plataforma Brasil"
        subtitle="Escreva seu projeto de pesquisa e submeta ao Comitê de Ética através da Plataforma Brasil"
      />
    </SafeAreaView>
  );
}
