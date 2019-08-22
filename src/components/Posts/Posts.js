import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { ScrollView, TouchableNativeFeedback, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {OptimizedFlatList} from 'react-native-optimized-flatlist'

import WritePost from "./WritePost";

class MyListItem extends React.PureComponent {
  

  render() {
    
    return (
      <View style={{width: "100%", backgroundColor: '#fff' , marginVertical:5  }} >
      <View style={{ flexDirection: "row" }}>
          <Image source={require('../../images/profile.png')}
              style={styles.ProfilePhoto} />
          <View style={{ marginVertical: 30, marginHorizontal: 5}}>
          <Badge size="large" status="success" />
          </View>
          <View style={{ marginVertical: 25,}}>
              <Text>{this.props.name}</Text>
          </View>
      </View>
      <View>
          <Text style={{ padding: 20}} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
      </View>
      <View style={{ borderTopColor: "powderblue", borderTopWidth: 1 , flexDirection: "row" }}>
          <TouchableOpacity style={{ padding: 10, width: 205, alignItems: "center", justifyContent: "center", flexDirection:"row"}}>
              <Ionicons name="ios-heart" style={{ fontSize: 25, paddingVertical: 2, paddingLeft: 10, }} />
              <Text style={{ padding: 10}}>(5)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10,  width: 205, alignItems: "center", justifyContent: "center", flexDirection:"row"}}>
              <Ionicons name="ios-chatbubbles" style={{ fontSize: 25, paddingVertical: 2, paddingLeft: 10, }} />
              <Text style={{ padding: 10}}>(5)</Text>
          </TouchableOpacity>
      </View>
  </View>
    );
  }
}

const renderItem = ({ item }) => (<MyListItem  name={item.email} />);

class Data extends React.PureComponent {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/comments/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _keyExtractor = (item, index) => item.id;

  render () {
    return (
      <FlatList
      data={this.state.dataSource}
      initialNumToRender={8}
      maxToRenderPerBatch={2}
      onEndReachedThreshold={0.5}
      renderItem={renderItem}
      />
    );
  }
}

class Posts extends Component {   
    render() {

       

        return(
            <View style={styles.container} >
                <WritePost />
                <ScrollView showsVerticalScrollIndicator={false} >
                                        
                        <View style={styles.PostContainer}>
                            <Data />        
                        </View>     
                </ScrollView>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "93%",
      backgroundColor: "powderblue"
    },
    PostContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between"
    },
    ProfilePhoto: {
        width: 50, 
        height: 50, 
        borderRadius: 30, 
        borderWidth: 1, 
        marginVertical: 20, 
        marginHorizontal: 20, 
        borderBottomColor: "pink"
    }
  });

export default Posts;