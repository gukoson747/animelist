import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppStackNavigator } from './common/nav'

class App extends Component {
  render() {
    return (
        <AppStackNavigator />
    );
  }
} 

export default App;