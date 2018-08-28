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



export default class AddRun extends React.Component {
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


  render() {
    return (
      <View style={{flex:1}}>
        <Header
          leftComponent={{ type: 'entypo', icon: 'home', color: '#fff', onPress: () => this.props.navigation.push('Home')}}
          centerComponent={{ text: 'Add Run', style: { color: '#fff' } }}
          outerContainerStyles={mainStyles.darkBackground}
        />
  </View>
    );
  }
}



const styles = StyleSheet.create({

});
