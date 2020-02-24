import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Home from "./src/home.js";
export default class App extends React.Component {
  render() {
    let data = [
      {
        value: "A1"
      },
      {
        value: "B1"
      },
      {
        value: "C1"
      }
    ];
    return (
      <View style={styles.container}>
        <Text>Cabeçalho</Text>
        <Text>Cabeçalho</Text>
        <Text>Cabeçalho</Text>
        <Text>Cabeçalho</Text>
        <Dropdown label="Selecione um territorio" data={data} />
        <Home />
        <Text>Rodapé.</Text>
        <Text>Rodapé</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",

    justifyContent: "center"
  },
  itensText: {
    flex: 1,
    backgroundColor: "#f5fcff",
    alignItems: "center",
    justifyContent: "center"
  }
});
