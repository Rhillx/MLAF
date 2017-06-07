import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
           <Image source={require('./assets/images/logo370113.jpg')} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);