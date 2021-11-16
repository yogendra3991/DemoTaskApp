/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from 'react-navigation-stack';
import {  createSwitchNavigator,createAppContainer } from 'react-navigation'; 
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import MovieDetail from './components/MovieDetail';
import userdata from './api/userdata';

//import {  createAppContainer } from 'react-navigation';  




const AppNavigator  = createStackNavigator(
  {
  'Dashboard Page': { screen: Dashboard },
   Login: { screen: Login,
    navigationOptions: {
      header: null
    }},
    'Movie Detail':{screen : MovieDetail}
   
  }
  // {  
  //   initialRouteName: 'Dashboard Page'
  // }  
  );


  export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: userdata,
        App: AppNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
  
  // const AppContainer = createAppContainer(AppNavigator); 
  // export default class App extends Component {
  // render() {
  //   return <AppContainer />;  
  // }
  // }