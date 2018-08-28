import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login'
import Home from './components/Home'


global.url = ''
//Navigator
export default createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
    navigationOptions: {
        gesturesEnabled: false,
    },
  },
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{initialRouteName: 'Home'});
