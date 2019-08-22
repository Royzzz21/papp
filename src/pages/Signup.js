import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo/Logo';
import Form from '../components/Form/Form';

import {Actions} from 'react-native-router-flux';

class Signup extends Component {

    goBack() {
        Actions.pop();
    }

    render() {
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.signupButton}>Sign in</Text>
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
        fontSize: 16
    },
    signupButton: {
        fontSize: 20,
        fontWeight: '500',
        color: '#8c0032',
    }
  });

export default Signup;