import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, StyleSheet  } from 'react-native';


import Header from "../components/Header/Header";
import Posts from "../components/Posts/Posts";
import {Actions} from 'react-native-router-flux';

  


class HomeScreen extends Component {
      home(){
        Actions.home()
    }
    render() {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
          <Header />
          <Posts />
        </View>
      );
    }
  }



export default HomeScreen;