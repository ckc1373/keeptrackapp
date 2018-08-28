import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login'
import Home from './components/Home'
import Team from './components/Team'
import RecentRuns from './components/RecentRuns'
import AddRun from './components/AddRun'
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
  Team: {
    screen: Team,
  },
  RecentRuns: {
    screen: RecentRuns,
  },
  AddRun: {
    screen: AddRun,
  },
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
},
{initialRouteName: 'Home'});
