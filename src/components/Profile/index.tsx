import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

import pic from "../../assets/pic.png";

export function Profile() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image source={pic} style={styles.pic} />
      </TouchableOpacity>
      <View style={styles.profileText}>
        <Text style={styles.name}>Antonio Carlos Filho</Text>
        <Text style={styles.edit}>editar perfil</Text>
        <Text style={styles.plano}>plano freemium</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="logout" size={32} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
