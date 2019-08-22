import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Form extends Component {

    constructor(props){
        super(props)
    }
    
    home(){
        Actions.home()
    }



    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           placeholder="Email"
                           placeholderTextColor="#f48fb1"/>
                <TextInput style={styles.inputBox}
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor="#f48fb1"/>
                <TouchableOpacity style={styles.button} onPress={this.home}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 25,
        fontSize:16,
        color: '#f48fb1',
        marginVertical: 1,
        textAlign: 'center' 
    },
    button: {
        width: 300,
        backgroundColor: '#e91e63',
        marginVertical: 5,
        paddingVertical: 12,
        borderRadius: 25
    },  
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
  });

export default Form;