import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Data from "./data.js";
import Maps from "./maps.js";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.selecionaTerritorio = this.selecionaTerritorio.bind(this);
    this.setTerritoriosLista = this.setTerritoriosLista.bind(this);
    this.state = {
      territorioSelecionado: "",
      territoriosListaDataBase: []
      // territorios: [
      //   {
      //     coordenadas: [
      //       { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
      //       { name: "2", latitude: 37.7896386, longitude: -122.421646 },
      //       { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
      //       { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
      //       { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
      //     ]
      //   },
      //   {
      //     coordenadas: [
      //       { name: "1", latitude: 37.7825259, longitude: -122.4351431 },
      //       { name: "2", latitude: 37.7896386, longitude: -122.421646 },
      //       { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
      //       { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
      //       { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
      //     ]
      //   }
      // ]
    };
  }

  selecionaTerritorio(value) {
    this.setState({ valorSelecionado1: value });
    if (value === "Territorio1") {
      this.setState({
        territorioSelecionado: JSON.stringify(
          this.state.territoriosListaDataBase[0].territorio
        )
      });
    } else {
      this.setState({
        territorioSelecionado: JSON.stringify(
          this.state.territoriosListaDataBase[1].territorio
        )
      });
    }
  }

  setTerritoriosLista(territorios) {
    if (this.state) {
      this.state.territoriosListaDataBase = territorios;
    }
  }

  render() {
    // if (!this.state.territorioSelecionado) {
    //   this.state.territorioSelecionado = JSON.stringify(
    //     this.state.territorios[0]
    //     // this.state.territoriosListaDataBase[0].territorio
    //   );
    // }
    return (
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 1,
            borderWidth: 1,
            width: "100%",
            backgroundColor: "blue",
            alignItems: "center"
          }}
        >
          <Text style={{ alignItems: "center", fontSize: 28, color: "white" }}>
            Territórios
          </Text>
        </View>
        <Data
          selecionaTerritorio={this.selecionaTerritorio}
          territoriosLista={this.setTerritoriosLista}
        />
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
