import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { ObjetivoGeral } from '../pages/ObjetivoGeral';
import { ObjetivosEspecificos } from '../pages/ObjetivoEspecificoss'
import { Summary } from "../pages/Summary";


const Stack = createStackNavigator();

export function Routes () {
    return (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="ObjetivoGeral" component={ObjetivoGeral} />
        <Stack.Screen name="ObjetivosEspecificos" component={ObjetivosEspecificos} />
        <Stack.Screen name="Summary" component={Summary} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}
