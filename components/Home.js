import React from 'react'
// import { Button } from 'antd-mobile'
import { StyleSheet, Text, View, Navigator} from 'react-native'
import HelloComponent from './HelloComponent'
import LifecycleComponent from './LifecycleComponent'
import PropsTestComponent from './PropsTestComponent'
import RefTestComponent from './RefTestComponent'
import FlexBoxTest from './FlexBoxTest'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      remove:false
    })
  }
  render() {
    var view = this.state.remove?null:<LifecycleComponent/>
    return (
      <View>
        <Text onPress={()=>{
          this.setState({
            remove:!this.state.remove
          })}}>Open up App.js to start working on your app!!!</Text>
        <HelloComponent/>
        {view}
        <PropsTestComponent name='小华'/>
        <FlexBoxTest/>
      </View>
    );
  }
}

