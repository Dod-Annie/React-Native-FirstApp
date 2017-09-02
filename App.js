import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import HelloComponent from './HelloComponent'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automasticallyw reload.</Text>
        <Text>Shake your phone sto open the developer menu.</Text>
        <HelloComponent/>
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
