import React, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { Context } from "../../contexts/context";

export function Summary() {
  const { objGeral } = useContext(Context);

  return (
    <SafeAreaView>
      <Text>Objetivo Geral: {objGeral}</Text>
    </SafeAreaView>
  );
}
