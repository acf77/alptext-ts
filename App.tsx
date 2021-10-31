import React from "react";
import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes/routes";
import { ContextProvider } from "./src/contexts/context";

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";

import {
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_600SemiBold,
    Poppins_600SemiBold,
    Poppins_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
