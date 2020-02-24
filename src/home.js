import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Polygon,
  Callout,
  Marker
} from "react-native-maps";
export default class Home extends React.Component {
  state = {
    coordenadas: [
      { name: "1", latitude: 37.8025259, longitude: -122.4351431 },
      { name: "2", latitude: 37.7896386, longitude: -122.421646 },
      { name: "3", latitude: 37.7665248, longitude: -122.4161628 },
      { name: "4", latitude: 37.7734153, longitude: -122.4577787 },
      { name: "5", latitude: 37.7948605, longitude: -122.4596065 }
    ]
  };
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
          coordinates={this.state.coordenadas}
          fillColor={"rgba(100,100,200,0.3)"}
          strokeWidth={3}
        />
        <Marker coordinate={{ latitude: 37.8025259, longitude: -122.4351431 }}>
          <Callout>
            <Text>Insteresting city</Text>
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
    justifyContent: "center"
  }
});
