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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.092,
          longitudeDelta: 0.035
        }}
      >
        <Polygon
          coordinates={
            this.props.territorioSelecionado
              ? JSON.parse(this.props.territorioSelecionado).coordenadas
              : [{ name: "1", latitude: 37.7825259, longitude: -122.4351431 }]
          }
          fillColor={"rgba(100,100,200,0.3)"}
          strokeWidth={3}
        />
        <Marker coordinate={{ latitude: 37.8025259, longitude: -122.4351431 }}>
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
