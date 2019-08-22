import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';

import Searchbar from '../SearchBar/SearBar';
import {Actions} from 'react-native-router-flux';



class Header extends Component {

    constructor(props){
        super(props)
    }
    
    chat() {
        Actions.chat()
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'row', justifyContent: "center"}}>
                    <TouchableOpacity  style={{width: "22%", height: "100%", backgroundColor: '#c2185b', alignItems: "center", justifyContent: "center" }} onPress={this.chat} activeOpacity={.7}>
                        <Ionicons adjustsFontSizeToFit={true} name="ios-chatbubbles"  style={{  fontSize: 30, paddingVertical: 10}} />
                    </TouchableOpacity>
                        <Searchbar />
                    <TouchableOpacity style={{width: "22%", height: "100%", backgroundColor: '#c2185b', alignItems: "center", justifyContent: "center"}}  onPress={this.home} activeOpacity={.7}>
                        <Ionicons name="ios-menu" adjustsFontSizeToFit={true} style={{ fontSize: 30, paddingVertical: 10 }} />
                    </TouchableOpacity>
            </View>  
        );
    }
}

export default Header;