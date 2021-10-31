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

export function Amostra() {
  const { amostra, setAmostra } = useContext(Context);

  const navigation = useNavigation();

  function handleNavigation() {
    if (amostra === "") {
      alert("Preencha o campo para continuar!");
    } else {
      navigation.navigate("Summary");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Profile />
        <View style={styles.header}>
          <Header title="Amostra" />
          <TooltipInfo info="Descreva como serão recrutadas as pessoas ou os objetos da sua pesquisa." />
        </View>
        <InputForm title="Amostra" onChangeText={setAmostra} />
        <View style={styles.buttons}>
          <ButtonSave title="Salvar" onPress={() => handleNavigation()} />
          <ButtonCancel title="Cancelar" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
