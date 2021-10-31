import React, { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Profile } from "../../../components/Profile";
import { Context } from "../../../contexts/context";
import { styles } from "./styles";

export function Summary() {
  const navigation = useNavigation();
  const { objGeral, objEspecifico, amostra } = useContext(Context);

  return (
    <SafeAreaView>
      <Profile />
      <Text style={styles.header}>Revise o seu trabalho:</Text>
      <View style={styles.container}>
        <View style={styles.squareTitle}>
          <Text style={styles.title}>Objetivo Geral:</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ObjetivoGeral")}>
            <Icon name="edit" size={18} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.square}>
          <Text style={styles.text}>{objGeral}</Text>
        </View>
        <View style={styles.squareTitle}>
          <Text style={styles.title}>Objetivos Específicos:</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ObjetivosEspecificos")}>
            <Icon name="edit" size={18} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.square}>
          <Text style={styles.text}>{objEspecifico}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.squareTitle}>
          <Text style={styles.title}>Amostra:</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Amostra")}>
            <Icon name="edit" size={18} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.square}>
          <Text style={styles.text}>{amostra}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
