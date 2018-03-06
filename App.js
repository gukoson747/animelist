import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Homescreen from './screen/homescreen';
import Addscreen from './screen/addscreen';
import Editscreen from './screen/editscreen';

class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
} 

const AppDrawerNavigator = DrawerNavigator({
  Homescreen: { screen: Homescreen },
  Addscreen: { screen: Addscreen },
  Editscreen: { screen: Editscreen }
},{
  initialRouteName: 'Homescreen'
})



export default App;