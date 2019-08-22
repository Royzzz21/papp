import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, StyleSheet  } from 'react-native';



class SearchBar extends Component {
    render(){
        return(
            <View style={{width: "56%", height: "100%", backgroundColor: '#c2185b', justifyContent: "center"}}  >
                <TouchableOpacity style={{ backgroundColor: "#e91e63", borderRadius: 20, height: "70%", paddingVertical: 1 }}>
                    <Ionicons name="ios-search" style={{ fontSize: 25, paddingVertical: 2, paddingLeft: 10, height: "100%"}} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default SearchBar;