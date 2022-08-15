import React from "react";
import {NativeBaseProvider, extendTheme} from "native-base";
import Card from "./Card/Card";

export default function App() {
  return (
    <NativeBaseProvider>
      <Card price="R$ 150,00" title="Limpeza de pele" desc="Descrição do procedimento"/>
      <Card price="R$ 180,00" title="Aplicação de Botox" desc="Descrição do procedimento"/>
      <Card price="R$ 200,00" title="Peeling facial" desc="Descrição do procedimento"/>
    </NativeBaseProvider>
  );
}

