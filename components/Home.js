import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  ListView,
  RefreshControl
} from 'react-native';
import { Button, Header, List, ListItem, Divider, Text as Title } from 'react-native-elements'


import mainStyles from '../mainStyles.js'



export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    // let user;
    // AsyncStorage.getItem('token').then((result) => {
    //   return JSON.parse(result)})
    // .then((value) => {
    //   if(value && value.userId){
    //     user = value.userId
    //     this.setState({
    //       userId: value.userId,
    //     })
    //   }
  }

  logout() {
    this.props.navigation.push('Login')
    // fetch(global.url + '/logout')
    // .then(resp => {
    //   console.log('Logout');
    //   AsyncStorage.removeItem('token')
    //   .then(this.props.navigation.push('Login'))
    //   .catch((err)=>{console.log(err)})
    // })
    // .catch((err) => {
    //   console.log("error:", err);
    // });
  }


  render() {
    return (
      <View style={{flex:1}}>
        <Header
          leftComponent={{ type: 'entypo', icon: 'log-out', color: '#fff', onPress: () => this.logout() }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          outerContainerStyles={mainStyles.darkBackground}
        />
  </View>
    );
  }
}



const styles = StyleSheet.create({

});
