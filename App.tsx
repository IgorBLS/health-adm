import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import Card from "./Card/Card";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Card price="R$ 150,00" title="Limpeza de pele" desc="Descrição do procedimento"/>
      <Card price="R$ 180,00" title="Aplicação de Botox" desc="Descrição do procedimento"/>
      <Card price="R$ 200,00" title="Peeling facial" desc="Descrição do procedimento"/>
    </NativeBaseProvider>
  );
}

