import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class Logo extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image source={require('../../images/Logo.jpg')}
                       style={{width: 200, height: 70, borderRadius: 20, borderWidth: 2, borderColor: '#b4004e', marginVertical: 20}} />
                <Text style={styles.logoText}>Welcome to Christian Dating App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      

    },
    logoText: {
      fontSize: 16,
      color: '#ad1457'
    }
  });

export default Logo;