import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/home.js";
import Data from "./src/data.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Data />
        <Home />
        <Text></Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",

    justifyContent: "center"
  }
});
