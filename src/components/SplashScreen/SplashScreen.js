import React, {Component} from 'react';
import {  Text, View, StyleSheet } from 'react-native';

import Logo from '../Logo/Logo';

class SplashScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
            <Logo />
          <Text style={styles.TextCont}>
            
          </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextCont: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
  });

  export default SplashScreen;