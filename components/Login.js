import React from 'react';
import {
  StyleSheet, Text, View, TextInput, AsyncStorage, Image,
} from 'react-native';
import {
  Button, FormLabel, FormValidationMessage, Header,
} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import mainStyles from '../mainStyles.js'


export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: '',
      passwordError: false,
      usernameError: false,
    };
  }

  componentDidMount() {
    // AsyncStorage.getItem('token').then(result => JSON.parse(result))
    //   .then((value) => {
    //     if (value && value.userId) {
    //       this.props.navigation.push('Home')
    //     }
    //   });
  }

  login() {
    this.props.navigation.push('Home')
    // if (!this.state.username) {
    //   this.setState({ usernameError: true });
    // }
    // if (!this.state.password) {
    //   this.setState({ passwordError: true });
    // } else {
    // }
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{ text: 'Login', style: { color: '#fff' } }}
          // outerContainerStyles={{}}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />
        <View style={mainStyles.container}>
            <View>
              <Text />
            </View>
            <View>
              <Text />
            </View>
            <KeyboardAwareScrollView>
              <FormLabel labelStyle={{ textAlign: 'center' }}>
                Username
              </FormLabel>
              <TextInput
                style={{
                  height: 40,
                  width: 375,
                  borderBottomWidth: 1,
                  borderBottomColor: '#343a40',
                  textAlign: 'center',
                }}
                onChangeText={text => this.setState({ username: text, usernameError: false })}
                value={this.state.username}
              />
              {this.state.usernameError
                ? (
                  <FormValidationMessage>
                    {'Username Incorrect'}
                  </FormValidationMessage>
                )
                : null}
              <FormLabel labelStyle={{ textAlign: 'center' }}>
                Password
              </FormLabel>
              <TextInput
                secureTextEntry
                style={{
                  height: 40,
                  width: 375,
                  borderBottomWidth: 1,
                  borderBottomColor: '#343a40',
                  textAlign: 'center',
                }}
                onChangeText={text => this.setState({ password: text, passwordError: false })}
                value={this.state.password}
              />
              {this.state.passwordError
                ? (
                  <FormValidationMessage>
                    {'Password Incorrect'}
                  </FormValidationMessage>
                )
                : null}
              <Button
                icon={{ name: 'login', type: 'entypo' }}
                title="Login"
                onPress={() => { this.login(); }}
                buttonStyle={{ alignSelf: 'center' }}
              />
            </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});
