import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Fire from "./Fire.js";
import { Dropdown } from "react-native-material-dropdown";

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.formataCoordenadas = this.formataCoordenadas.bind(this);
    this.state = {
      territoriosLista: [],
      label: props.territorioSelecionado
    };
  }

  componentWillMount() {
    // Fire.db()
    //   .set({
    //     territorios: [
    //       {
    //         name: "Territorio1",
    //         ruas: [
    //           { id: 1, nome: "Avenida Patente" },
    //           { id: 2, nome: "Mario Navarro da Costa" }
    //         ],
    //         coordenadas: [
    //           { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
    //           { name: "2", latitude: 37.7896386, longitude: -122.421646 },
    //           { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
    //           { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
    //           { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
    //         ]
    //       },
    //       {
    //         name: "Territorio2",
    //         ruas: [
    //           { id: 3, nome: "Pelegrino Varoni" },
    //           { id: 4, nome: "Lotuf" }
    //         ],
    //         coordenadas: [
    //           { name: "1", latitude: 37.7825259, longitude: -122.4351431 },
    //           { name: "2", latitude: 37.7896386, longitude: -122.421646 },
    //           { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
    //           { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
    //           { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
    //         ]
    //       }
    //     ]
    //   })
    //   .then(() => {
    //     console.log("Insert");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    Fire.getValue(data => {
      let mapas = JSON.parse(data);
      let territoriosLista = [];
      let index = 0;

      while (true) {
        if (mapas.territorios[index] && mapas.territorios[index].name) {
          territoriosLista.push({
            value: mapas.territorios[index].name,
            label: mapas.territorios[index].name,
            territorio: this.formataCoordenadas(mapas.territorios[index])
          });
        } else {
          break;
        }
        index += 1;
      }

      this.props.territoriosLista(territoriosLista);

      this.setState(previousState => ({
        territoriosLista,
        mapas
      }));
    });
  }

  formataCoordenadas(territorio) {
    let index = 0;
    let coordenadaLista = [];
    let result = { coordenadas: [] };
    while (true) {
      if (territorio.coordenadas[index]) {
        coordenadaLista.push(territorio.coordenadas[index]);
      } else {
        break;
      }
      index += 1;
    }
    result.coordenadas = coordenadaLista;
    return result;
  }

  render() {
    return (
      <View style={styles.container}>
        <Dropdown
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
          label="Selecione um território"
          onChangeText={this.props.selecionaTerritorio}
          data={this.state.territoriosLista}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5fcff",
    width: "100%"
  }
});
