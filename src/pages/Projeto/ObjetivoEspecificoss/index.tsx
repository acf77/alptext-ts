import React, { useContext } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { InputForm } from "../../../components/InputForm";
import { ButtonSave } from "../../../components/ButtonSave";
import { ButtonCancel } from "../../../components/ButtonCancel";
import { Header } from "../../../components/Header";
import { TooltipInfo } from "../../../components/TooltipInfo";
import { Profile } from "../../../components/Profile";
import { Context } from "../../../contexts/context";

import { styles } from "./styles";

export function ObjetivosEspecificos() {
  const { objEspecifico, setObjEspecifico } = useContext(Context);
  const navigation = useNavigation();

  function handleNavigation() {
    if (objEspecifico === "") {
      alert("Preencha o campo para continuar!");
    } else {
      navigation.navigate("Amostra");
    }
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
        <InputForm title="Objetivo Geral" onChangeText={setObjEspecifico} />
        <View style={styles.buttons}>
          <ButtonSave title="Salvar" onPress={handleNavigation} />
          <ButtonCancel title="Cancelar" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
