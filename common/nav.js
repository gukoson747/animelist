import React,{ Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Homescreen from '../screen/homescreen';
import Addscreen from '../screen/addscreen';
import Editscreen from '../screen/editscreen';

export const AppDrawerNavigator = DrawerNavigator({
    Homescreen: { screen: Homescreen },
    Addscreen: { screen: Addscreen },
  },{
    initialRouteName: 'Homescreen'  
  }
) 

export const AppStackNavigator = StackNavigator({
    Menu: { 
        screen: AppDrawerNavigator,
        navigationOptions: {
            header: null
        } 
    },
    Editscreen: { 
        screen: Editscreen,
        navigationOptions: {
            header: null
        } 
    }
},{ 
    initialRouteName: 'Menu'
})
