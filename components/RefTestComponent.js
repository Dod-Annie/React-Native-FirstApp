import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class RefTestComponent extends React.Component { 
  state={
    name:'小红'
  }
  render() {
    return (
      <Text style={{fontSize:20,backgroundColor:'red'}}>Hello {this.state.name}</Text>
    )
  }
}
