import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo/Logo';
import Form from '../components/Form/Form';

import {Actions} from 'react-native-router-flux';

class Login extends Component {

    signup(){
        Actions.signup()
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#78002e" barStyle="light-content" />
                <Logo />
                <Form type="Login" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}>Signup</Text>
                    </TouchableOpacity>    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fce4ec',
    },
    signupTextCont: {
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical:16,
      flexDirection: 'row'
    },
    signupText: {
        color: '#ad1457',
        fontSize: 14
    },
    signupButton: {
        fontSize: 15,
        fontWeight: '500',
        color: '#8c0032',
    }
  });

export default Login;