

import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class service extends Component {


    constructor(props) {
        super(props);

        this.state = {baseurl: 'http://192.168.1.12:4000/api/v1/'};


    //let baseurl='http://192.168.1.12:4000/api/v1';
    }
  
    





  PostRequest(link,data){

     let url= this.state.baseurl+link;

     console.log(url,data)


     return  fetch(url,{ 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',           
         },
      body: JSON.stringify(data)})
      .then((response) => response.json())
      .then((json) => {
      
         return json ;

      //  this.storeData(json.data.jwt.token)
       // AsyncStorage.setItem('token', json.data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
       // this.setState({ isLoading: false });
      });
    }

    PostRequest2(link,token,data){

      let url= this.state.baseurl+link;
 
      console.log(url,data)
 
 
      return  fetch(url,{ 
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',   
         'Authorization':  token        
          },
       body: JSON.stringify(data)})
       .then((response) => response.json())
       .then((json) => {
       
          return json ;
 
       //  this.storeData(json.data.jwt.token)
        // AsyncStorage.setItem('token', json.data);
       })
       .catch((error) => console.error(error))
       .finally(() => {
        // this.setState({ isLoading: false });
       });
     }


      GetRequest(url){

       // let url= this.state.baseurl+link;
   
        console.log(url)
   
   
       return fetch(url)
        .then((response) => response.json())
        .then((json) => {

         console.log(json)


         return json
         
        })
        .catch((error) => console.error(error))
        .finally(() => {
          
        });
  }


  GetRequest2(link,token){

    let url= this.state.baseurl+link;

    console.log(url)
    
 
    return  fetch(url,{ 
     method: 'GET',
     headers: {
       'Accept': 'application/json', 
       'Authorization':  token        
        },
      })
     .then((response) => response.json())
     .then((json) => {
     
        return json ;

     //  this.storeData(json.data.jwt.token)
      // AsyncStorage.setItem('token', json.data);
     })
     .catch((error) => console.error(error))
     .finally(() => {
      // this.setState({ isLoading: false });
     });
}

}

