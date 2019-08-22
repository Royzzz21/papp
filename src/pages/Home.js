import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, } from 'react-navigation';

import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';



const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-paper`;
          
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }  

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#b0003a',
      inactiveTintColor: '#f48fb1',
      showLabel: false,
      style:{
        borderTopWidth:1,
        borderTopColor:'#bdbdbd'
      },
    },
  }
);

const AppContainer =  createAppContainer(TabNavigator);

export default class Home extends React.Component {
  render() {
    return <AppContainer />;
  }
}