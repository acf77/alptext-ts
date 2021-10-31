import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InputForm } from "../../../components/InputForm";
import { ButtonSave } from "../../../components/ButtonSave";
import { ButtonCancel } from "../../../components/ButtonCancel";
import { Header } from "../../../components/Header";
import { TooltipInfo } from "../../../components/TooltipInfo";

import { styles } from "./styles";
import { Profile } from "../../../components/Profile";
import { Context } from "../../../contexts/context";

export function ObjetivoGeral() {
  const { objGeral, setObjGeral } = useContext(Context);

  const navigation = useNavigation();

  function handleNavigation() {
    if (objGeral === "") {
      alert("Preencha o campo para continuar!");
    } else {
      navigation.navigate("ObjetivosEspecificos");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Profile />
        <View style={styles.header}>
          <Header title="Objetivo Geral" />
          <TooltipInfo info="Escreva o que deverá ser alcançado ao final da sua pesquisa. Inicie com um verbo no infinitivo." />
        </View>
        <InputForm title="Objetivo Geral" onChangeText={setObjGeral} />
        <View style={styles.buttons}>
          <ButtonSave title="Salvar" onPress={handleNavigation} />
          <ButtonCancel title="Cancelar" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
