import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Polygon,
  Callout,
  Marker
} from "react-native-maps";
export default class Maps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        region={{
          latitude: -23.629847,
          longitude: -46.586819,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
      >
        <Polygon
          coordinates={
            this.props.territorioSelecionado
              ? JSON.parse(this.props.territorioSelecionado).coordenadas
              : [{ name: "1", latitude: -23.629847, longitude: -46.586819 }]
          }
          fillColor={"rgba(100,100,200,0.3)"}
          strokeWidth={3}
        />
        <Marker coordinate={{ latitude: -23.629847, longitude: -46.586819 }}>
          <Callout>
            <Text>Insteresting city{this.props.territorioSelecionado}</Text>
          </Callout>
        </Marker>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
});
