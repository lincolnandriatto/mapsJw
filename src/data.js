import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Fire from "./Fire.js";
import { Dropdown } from "react-native-material-dropdown";

export default class Data extends React.Component {
  state = {
    dados: [
      { name: "test", latitude: 37.8025259, longitude: -122.4351431 },
      { name: "test2", latitude: 37.7896386, longitude: -122.421646 }
    ],
    mapas: { territorios: [{ name: "territorio1" }] },
    territoriosLista: []
  };
  componentWillMount() {
    // Fire.db()
    //   .set({
    //     territorios: [
    //       {
    //         name: "Territorio1",
    //         ruas: [
    //           { id: 1, nome: "Avenida Patente" },
    //           { id: 2, nome: "Mario Navarro da Costa" }
    //         ]
    //       },
    //       {
    //         name: "Territorio2",
    //         ruas: [
    //           { id: 3, nome: "Pelegrino Varoni" },
    //           { id: 4, nome: "Lotuf" }
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
      let max = 1;

      while (true) {
        if (mapas.territorios[index].name) {
          territoriosLista.push({ value: mapas.territorios[index].name });
        } else {
          break;
        }
        index += 1;
        if (max < index) {
          break;
        }
      }

      this.setState(previousState => ({
        territoriosLista,
        mapas
      }));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Dropdown
          label="Selecione um território"
          data={this.state.territoriosLista}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5fcff"
  }
});
