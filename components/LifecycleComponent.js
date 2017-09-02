import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class LifecycleComponent extends React.Component {
constructor(props){
  super(props)
  console.log('————constructor————')
  this.state={
    count:0
  }
}

componentWillMount(){
  console.log('————componentWillMount————')
}

componentDidMount(){
  console.log('————componentDidMount————')
}

componentWillReceiveProps(nextProps){
  console.log('————componentWillReceiveProps————')
}

shouldComponentUpadate(nextProps,nextState){
  console.log('————shouldComponentUpadate————')
  return true
}

componentWillUpdate(nextProps,nextState){
  console.log('————componentWillUpdate————')
}

componentDidUpdate(prevProps,prevState){
  console.log('————componentDidUpdate————')
}

componentWillUnMount(){
  console.log('————componentWillUnMount————')
}

  render() {
    return (
      <View>
        <Text onPress={()=>{
          this.setState({
            count:this.state.count+1
          })}}>Hello!!!</Text>
        <Text>被点击了{this.state.count}次</Text>  
      </View>  
    )
  }
}

