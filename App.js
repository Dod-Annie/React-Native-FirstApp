import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import HelloComponent from './components/HelloComponent'
import LifecycleComponent from './components/LifecycleComponent'
import PropsTestComponent from './components/PropsTestComponent'
import RefTestComponent from './components/RefTestComponent'
import FlexBoxTest from './components/FlexBoxTest'
import Home from './components/Home'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let defaultName = 'Home'
    let defaultComponent = Home;
    return (
      // <View style={styles.container}>
      //   <Home/>
      // </View>
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
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
