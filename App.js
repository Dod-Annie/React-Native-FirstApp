import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import HelloComponent from './components/HelloComponent'
import LifecycleComponent from './components/LifecycleComponent'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      remove:false
    })
  }
  render() {
    var view = this.state.remove?null:<LifecycleComponent/>
    return (
      <View style={styles.container}>
        <Text onPress={()=>{
          this.setState({
            remove:!this.state.remove
          })}}>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automasticallyw reload.</Text>
        <Text>Shake your phone sto open the developer menu.</Text>
        <HelloComponent/>
        {view}
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
