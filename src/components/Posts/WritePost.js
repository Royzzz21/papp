import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image  } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class WritePost extends Component {
    render () {
        return (
            <View style={{width: "100%", height: 50, backgroundColor: '#fff', flexDirection: 'row', }} >
                <TouchableOpacity style={{width: "20%", height: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
                        <Image source={require('../../images/profile.png')}
                    style={styles.ProfilePhoto} />
                </TouchableOpacity>
                <TouchableOpacity style={{width: "60%", height: 45, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 , borderColor: '#aebfbe'}} >
                    <Text> Whats On your Mind......</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={{width: "20%", height: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
                    <Ionicons adjustsFontSizeToFit={true} name="ios-image"  style={{  fontSize: 30, paddingVertical: 10, color: "#80d6ff"}} />  
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ProfilePhoto: {
        width: 30, 
        height: 30, 
        borderRadius: 30, 
        borderWidth: 1, 
        marginVertical: 20, 
        marginHorizontal: 20, 
        borderBottomColor: "pink"
    }
  });

export default WritePost;