
import React, { Component } from 'react';
import {
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    TextInput,
    Button,
    ScrollView,
    SectionList,
    StatusBar,
    BackHandler,Alert,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import Login from '../components/Login';
 import Icon from 'react-native-vector-icons/dist/FontAwesome';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import service from '../api/service';
 


export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.api = new service();


    this.state = {
     movieList:[]
    };
  
  }


  static navigationOptions = ({navigation}) => ({
   
    
    headerRight: (
      <View >
         <TouchableOpacity  
         onPress={navigation.getParam('Logout')}>
        <Icon  name="sign-out" size={32} color="black"  />
        </TouchableOpacity>
         </View>
    )
  });

  


  Search= (e) =>{


    console.log('check',e)


    if(e!=''){
    let text = e.toLowerCase()
    let movie = this.state.movieList
    console.log(text)
  let filteredName = movie.filter((item) => {
    return item.Title.toLowerCase().match(text)
  })
 
this.setState({movieList:filteredName})
    }

    else{
      this.MovieList();
    }
  //console.log(filteredName)
}
  
    

 

     
    
    componentDidMount(){


      this.props.navigation.setParams({ Logout: this.Logout});

      this.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        this.handleBackButton
      );

     

      
      this.MovieList();
       // this.getToken();
        //this.getData();

        // const b = new Login();

        //   b.Demo('value');

        
      }
    

      MovieList = () => {

  
        let link='https://www.omdbapi.com/?apikey=6f2b784a&s={movie/Poster';
    
       this.api.GetRequest(link).then((response) =>{ 
    
          console.log('resp ',response.Search)
           if(response!=''){
            
            this.setState({movieList:response.Search})
            
            //navigation.navigate('Dashboard')
            
           } 
    
           else{
             
           }
      
       }
       );
    
        }
    
    
    Logout= () =>{
      Alert.alert(
        'Exit App',
        'Exiting the application?', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
     )
    }
    

      // componentWillUnmount() {
      //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      // }
     
      componentWillUnmount() {
       // this.backHandler.remove();
      }

    
      handleClick(){

      console.log('clock');

       const b = new Login();

           b.Demo('hello');

      }



      Logout = () => {

        Alert.alert(
          'Logout',
          'Are you sure logout', [{
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
          }, {
              text: 'OK',
              onPress: () => this.LocalStorage()
          }, ], {
              cancelable: false
          }
       )

      }


      LocalStorage = async() => {
          AsyncStorage.clear();

          this.props.navigation.navigate('Login');

      }


      renderFooter = () => {
       console.log('render')
      };


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
               text: 'Cancel',
               onPress: () => console.log('Cancel Pressed'),
               style: 'cancel'
           }, {
               text: 'OK',
               onPress: () => BackHandler.exitApp()
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
      

      fetchMore = () => {
       console.log('fetach')
      };


      Goto(item){

        console.log('go to',item)
        this.props.navigation.navigate('Movie Detail',{'item':item})
      }

       

    
    render(){


  return(
      <View>
   

   <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Search"
    onChangeText={(text) => this.Search(text)}   
  />
</View>

<ScrollView>

   <FlatList
  data={this.state.movieList}
  onEndReached={this.fetchMore()}
  scrollToEnd={this.fetchMore()}
  //onEndReachedThreshold={0.1}
  ListFooterComponent={this.renderFooter()}
  //  horizontal={true}
 // numColumns={3}
  //  keyExtractor={(item, index) => console.log(item)}
  renderItem={({item,index}) => (

    
  <View  style={{ flex: 1,alignSelf:'center',alignItems:'center',margin:15,borderColor:'#D3D3D3',borderWidth:1,borderRadius:8,padding:10}}>
    
    <View style={styles.view_data}  >
  <Text style={styles.moviet} >Title</Text>
  <Text style={styles.moviet} >: {item.Title}</Text>
  </View>
  
  <View style={styles.view_data} >
  <Text style={styles.moviet} >{item.Year}</Text>
  <Text style={styles.moviet} >: {item.Year}</Text>
  </View>
  <View style={styles.view_data} >
  <Text style={styles.moviet} >IMDB</Text>
  <Text style={styles.moviet} >: {item.imdbID}</Text>
  </View>
  <View style={styles.view_data} >
  <Text style={styles.moviet} >Image </Text>
  <Text style={styles.moviet} >: {item.Poster}</Text>
  </View>
  <View style={styles.view_data} >
  <Text style={styles.moviet} > </Text>
  <Text style={styles.moviet} >
    
    <TouchableOpacity  style={styles.button}
      onPress={()=>
     this.Goto(item)
     }
     >
<Text>View</Text>
</TouchableOpacity>
</Text>
  </View>
  </View>
  )}/>
  <Text>{'\n'} {'\n'} </Text>
  <Text>{'\n'} {'\n'} </Text>
 
  </ScrollView>
    </View>
    
  )
  
    }


}


const styles = StyleSheet.create({

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
    iconContainer: {
      flexDirection: "row",
     
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

       backgroundColor:'#99CCFF',
       fontSize:12,
       padding:5,
       height:30,
       alignSelf:'center',
       borderRadius:8
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
  });
  

//export default Dashboard;