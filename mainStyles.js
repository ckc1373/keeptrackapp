import React from 'react';
import { StyleSheet } from 'react-native';



const mainStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  green: {
    backgroundColor: '#15ff58'
  },
  blue: {
    backgroundColor: '#55b0ff'
  },
  dark:{
    color: '#343a40',
  },
  darkBackground: {
    backgroundColor: '#343a40'
  },
  button:{
    width: 300,
    borderRadius: 5,
    marginTop: 20
  },
});

export default mainStyles
