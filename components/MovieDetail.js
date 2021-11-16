
import React, { Component } from 'react';
import service from '../api/service';

//import React, { useState } from 'react';
import {
    SafeAreaView,
    Image,
    ScrollView,
    ToastAndroid,
    BackHandler,Alert,
    TextInput,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';





export default class MovieDetail extends Component {


  
    
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;

        console.log(this.params)
        this.state = {
            movie:this.params.item,
        };
      }


      componentDidMount(){

        //console.log('detail',this.state.movie)
      }
    
    render(){

        return(
            <View> 
               
               <View  style={styles.width_view} >

                    <View style={styles.view_data} >
  <Text style={styles.moviet} >Title</Text>
  <Text style={styles.moviet} >: {this.state.movie.Title}</Text>
  </View>

  <View style={styles.view_data} >
  <Text style={styles.moviet} >Year</Text>
  <Text style={styles.moviet} >: {this.state.movie.Year}</Text>
  </View>

  <View style={styles.view_data} >
  <Text style={styles.moviet} >IMDB</Text>
  <Text style={styles.moviet} >: {this.state.movie.imdbID}</Text>
  </View>

  <View style={styles.view_data} >
  <Text style={styles.moviet} >Image</Text>
  <Text style={styles.moviet} >: {this.state.movie.Poster}</Text>
  </View>
               </View>
            </View>
        )
    }
    
    }


    const styles = StyleSheet.create({

  width_view:{
   width:'90%',
   margin:'10%',
    },

        container:{  
            flex: 1,  
            flexWrap: "wrap",
            flexDirection: 'row',// set elements horizontally, try column.  
        },  
        title:{
            alignSelf:'center',
            marginTop:8,
            fontWeight:'bold'
        },
        view_data:{
            flexDirection:"row"
        },
        iconContainer: {
          flexDirection: "row",
         
        },
        moviet:{
            color:'#000',
            fontWeight:'bold',
            width:'50%'
        },
        img:{
         alignSelf:'center',
         padding:30
        },
        container2:{  
            marginTop:160,
            flex: 1,  
            flexWrap: "wrap",
            flexDirection: 'row',// set elements horizontally, try column.  
        },  
        card: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          width:160,
          height:150,
          shadowOpacity: 0.26,
          elevation: 8,
          backgroundColor: 'white',
          padding: 22,
          margin:10,
          borderRadius: 10
        }
    ,
        inputView: {
          width: "100%",
          alignItems: "center",
          
        },
           img:{
             alignSelf:'center',
             padding:30
            },
           button:{
           //  width: "70%",
           fontSize:12,
           padding:5,
           height:30,
           alignSelf:'center'
           },
           view_img:{
             alignItems: "center",
             marginTop:'25%'
           },
           
           TextInput: {
             borderColor:"#D3D3D3",
             borderStyle:"solid",
             width:'90%',
             padding:10,
           //  borderRadius: 30,
             borderWidth: 1,
             margin:'5%',
             //marginRight:'20%'
           },
           main_view:{
            marginLeft:70,
            marginTop:'10%'
           }
      });
    

