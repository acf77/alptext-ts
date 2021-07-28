import React from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { InputForm } from "../../components/InputForm";
import { ButtonSave } from "../../components/ButtonSave";
import { ButtonCancel } from "../../components/ButtonCancel";
import { Header } from "../../components/Header";
import { TooltipInfo } from "../../components/TooltipInfo";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";

export function ObjetivosEspecificos() {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("Summary");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Profile />
        <View style={styles.header}>
          <Header title="Objetivos Específicos" />
          <TooltipInfo
            info="Escreva dois ou três componentes específicos que a sua pesquisa deseja responder. É complementar ao
                  Objetivo Geral."
          />
        </View>
        <InputForm title="Objetivo Geral" />
        <View style={styles.buttons}>
          <ButtonSave title="Salvar" onPress={handleNavigation} />
          <ButtonCancel title="Cancelar" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
