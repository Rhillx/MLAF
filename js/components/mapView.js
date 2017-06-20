import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';
// import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    mapRegion: { latitude: 37.78825, longitude: 122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

   


  render() {
   

    return (
      <View style={styles.container}>
       <MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

});