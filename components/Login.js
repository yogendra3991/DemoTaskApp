
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





export default class Login extends Component {


  
    
    constructor(props) {
        super(props);
         
        this.api = new service();
        
        this.state = {
          username: '',
          password: ''
        };
      }

      

      componentDidMount() {




        this.backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          this.handleBackButton
        );
       
        // fetch('http://192.168.1.12:4000/api/v1/user/login',{ 
          
        //     method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',           
        //      },
        //   body: JSON.stringify({
        //     username: 'demouser',
        //     password: '123456'
        //  })})
        //   .then((response) => response.json())
        //   .then((json) => {
           
        //    // console.log(this.state.username,this.state.password)
        //    // this.setState({ subcategory: json.data});
        //     console.log(json)
        //   })
        //   .catch((error) => console.error(error))
        //   .finally(() => {
        //     this.setState({ isLoading: false });
        //   });
        

      }




      onButtonPress = () => {


  

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
       // navigate('Dashboard Page');
      }
      
      handleBackButton = () => {
    
        //const route = useRoute();
        console.log(this.props.navigation.isFocused());
  
       
    if(this.props.navigation.isFocused()==true){


    
       Alert.alert(
           'Exit App',
           'Exiting the application?', [{
               text: 'No',
               onPress: () => console.log('Cancel Pressed'),
               style: 'cancel'
           }, {
               text: 'Yes',
               onPress: () => this.clearData()
           }, ], {
               cancelable: false
           }
        )
        return true;

          }
          else{

            this.props.navigation.goBack(); 

          }


      } 

      Login = () => {

       //https://justoken.in/api/docter/

       let { username, password } = this.state;

     if(username.length <= 0){
      ToastAndroid.show("Please Enter User Name", ToastAndroid.SHORT)
      return false
    }


       let link='https://jsonplaceholder.typicode.com/users?username='+this.state.username

      this.api.GetRequest(link).then((response) =>{ 

         console.log('resp ',response)
          if(response!=''){
            ToastAndroid.show("Login Successfull Welcome to our App", ToastAndroid.SHORT)
            this.storeData(response);
           this.props.navigation.navigate('Dashboard Page');

           //navigation.navigate('Dashboard')
           
          } 

          else{
            ToastAndroid.show("User name is wrong", ToastAndroid.SHORT)
          }
     
      }
      );

       }


        storeData = async (value) => {

          
          
        try {
          console.log('store ',value)
          await AsyncStorage.setItem('login_token', value.address)
          console.log('store data','e')
          this.getData();
        } catch (e) {
          // saving error
        }
      }




      getData = async () => {
       
        console.log('local')
        try {
          const value = await AsyncStorage.getItem('login_token');

          console.log('local '+value)
          if(value !== null) {
            // value previously stored
          }
        } catch(e) {
          // error reading value
        }
      }


        







    render(){


  return(
<View > 


<View style={styles.view_img} >
<Image source={require('../assets/img/rmmlobo.png')}  style={styles.img}  />
</View>


    <View style={styles.main_view}>
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    onChangeText={(text) => this.setState({username: text})}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    onChangeText={(text) => this.setState({password: text})}   
  />
</View>

</View>

<View style={styles.view_btn}>
<Button 
 title="Login"
 style={styles.button}
 onPress={()=>
  // this.props.navigation.navigate('Dashboard',{})
    this.Login()
  
}
/>
</View>
</View>

  )

    }


}

const styles = StyleSheet.create({

  inputView: {
     width: "100%",
     alignItems: "center",
     
   },
   view_btn:{
    width: "30%", margin: 10, backgroundColor: "red",alignSelf:'center'
   },
      img:{
        alignSelf:'center',
        padding:30
       },
      button:{
      //  width: "70%",
      height:40,
      alignSelf:'center'
      },
      view_img:{
        alignItems: "center",
        marginTop:'25%'
      },
      
      TextInput: {
        borderColor:"#D3D3D3",
        borderStyle:"solid",
        width:'100%',
        padding:10,
      //  borderRadius: 30,
        borderWidth: 1,
        margin:5,
        marginRight:'20%'
      },
      main_view:{
       marginLeft:70,
       marginTop:'10%'
      }
  });
  

//export default Login;