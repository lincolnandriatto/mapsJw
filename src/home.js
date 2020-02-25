import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Data from "./data.js";
import Maps from "./maps.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.selecionaTerritorio = this.selecionaTerritorio.bind(this);
    this.state = {
      territorioSelecionado: "",
      territorios: [
        {
          coordenadas: [
            { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
            { name: "2", latitude: 37.7896386, longitude: -122.421646 },
            { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
            { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
            { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
          ]
        },
        {
          coordenadas: [
            { name: "1", latitude: 37.7825259, longitude: -122.4351431 },
            { name: "2", latitude: 37.7896386, longitude: -122.421646 },
            { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
            { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
            { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
          ]
        }
      ]
    };
  }

  selecionaTerritorio(value) {
    if (value === "Território1") {
      this.setState({
        territorioSelecionado: JSON.stringify(this.state.territorios[0])
      });
    } else {
      this.setState({
        territorioSelecionado: JSON.stringify(this.state.territorios[1])
      });
    }
  }

  render() {
    if (!this.state.territorioSelecionado) {
      this.state.territorioSelecionado = JSON.stringify(
        this.state.territorios[0]
      );
    }

    return (
      <View style={styles.container}>
        <Text style={{ borderWidth: 1, width: 300 }}>Territórios</Text>
        <Data selecionaTerritorio={this.selecionaTerritorio} />
        <Maps territorioSelecionado={this.state.territorioSelecionado} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
