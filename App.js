import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/home.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f5fcff",
    justifyContent: "center"
  }
});
