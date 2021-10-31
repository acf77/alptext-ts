import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Menu } from "../pages/Projeto/Menu";
import { ObjetivoGeral } from "../pages/Projeto/ObjetivoGeral";
import { ObjetivosEspecificos } from "../pages/Projeto/ObjetivoEspecificoss";
import { Amostra } from "../pages/Projeto/Amostra";
import { Summary } from "../pages/Projeto/Summary";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ObjetivoGeral" component={ObjetivoGeral} />
        <Stack.Screen
          name="ObjetivosEspecificos"
          component={ObjetivosEspecificos}
        />
        <Stack.Screen name="Amostra" component={Amostra} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
