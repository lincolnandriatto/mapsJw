import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Maps from "./maps.js";

export default class Home extends React.Component {
  render() {
    return <Maps style={styles.map} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300
  },
  map: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300
  }
});
