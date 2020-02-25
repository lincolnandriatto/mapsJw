import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Fire from "./Fire.js";
import { Dropdown } from "react-native-material-dropdown";

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.seleciona = this.seleciona.bind(this);
    this.state = {
      mapas: { territorios: [{ name: "territorio1" }] },
      territoriosLista: [],
      valor: "test",
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
          territoriosLista.push({
            value: mapas.territorios[index].name,
            label: mapas.territorios[index].name
          });
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

  seleciona(value) {
    this.setState({ label: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Dropdown
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
          value={this.state.label}
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
