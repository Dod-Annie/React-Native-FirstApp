import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class PropsTestComponent extends React.Component {
  static defaultProps={
    name:'小明'
  }
  // static propsTypes={
  //   name:PropTypes.string
  // }
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    )
  }
}
