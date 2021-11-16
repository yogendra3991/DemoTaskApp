import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  BackHandler,
  Alert,
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { NavigationState } from 'react-navigation';




export default class userdata extends Component {


    constructor(props) {
        super(props);

        this.CheckUserLogin();
    }



    
       



  

    
    CheckUserLogin = async () => {
       
        try {
          const value = await AsyncStorage.getItem('login_token');

          console.log('local '+value)
          if(value !== null) {
            console.log('true')
            // value previously stored
            this.props.navigation.navigate('Dashboard Page',{});

          }else{

            console.log('else')
            this.props.navigation.navigate('Login',{});
          }


        } catch(e) {
          // error reading value
          
        }
      }




      render() {
        return (
            <View style={{ flex: 1 }}>
               
               
            </View>
        );
    }
    }