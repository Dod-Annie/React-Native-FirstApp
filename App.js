import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import HelloComponent from './components/HelloComponent'
import LifecycleComponent from './components/LifecycleComponent'
import PropsTestComponent from './components/PropsTestComponent'
import RefTestComponent from './components/RefTestComponent'
import FlexBoxTest from './components/FlexBoxTest'

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
          })}}>Open up App.js to start working on your app!!</Text>
        <HelloComponent/>
        {view}
        <PropsTestComponent name='小华'/>
        <FlexBoxTest/>
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
