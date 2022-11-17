import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,Button,ImageBackground,TouchableOpacity,Alert,Image,Pressable} from "react-native";
import { retrieveData ,RemoveLogin} from "./Store";
const Landing=({navigation})=>{

  const buttonAlert = () =>
  Alert.alert(
    "Logout",
    "Are you sure? You want to logout?",
    [
       
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "Confirm", onPress: () => Logout() }
    ]
  );

  const [username,setUsername]=useState('');
  useEffect(()=>{
    getinfo();
  },[])

  const getinfo=async()=>{
  let user =await retrieveData('userInfo');
  setUsername(user.Loginid);
   
  }
  const Logout=async()=>
  {
    RemoveLogin();
    navigation.replace("Login")
  }
//const value=route.params.key
    return(
        <View style={Styles.flex}>
          
        <ImageBackground style={Styles.flex} source={require('./assets/landing.gif')}  >
        <View >
          <Pressable onPress={()=>buttonAlert()}>
            <Image style={Styles.img} source={require('/home/divum/Projects/employee/assets/logout.png')} resizeMode='contain' />
          </Pressable>
          </View>
        <Text style={Styles.msg}>Welcome</Text>
        <Text style={{textAlign:"center",fontSize:40,color:'black',fontStyle:'italic',fontFamily:'serif'}}>{username}</Text>
        <View style ={Styles.btn}>
          <Button title="Create Employee Record" onPress={()=>navigation.navigate("Create")}/>
          <View style ={Styles.btn1}>
          <Button title="Employee List" onPress={()=>navigation.navigate("EmployeeDetails")}/>
          </View>
        
           {/* <View style ={Styles.btn2}>
          <Button title="LOGOUT" color={"brown"} onPress={()=>buttonAlert()}/>
          </View> */}
        </View>
        </ImageBackground>
        </View>
);
};
const Styles = StyleSheet.create({
  flex:{
    flex:1,
  },
    msg:{
        textAlign:"center",
        fontSize:50,
        marginTop:170,
        color:"black",
        fontStyle:'italic',
        fontFamily:'serif'
      },
      btn:{
       alignItems:"center",
       padding:20,
       margin:10,
       borderRadius:25,
      },
      btn1:{
        alignItems:"center",
        padding:20,
        margin:10,
        borderRadius:25
      },
      // btn2:{
      //   alignItems:"center",
      //   padding:120,
      //   margin:10,
      //   borderRadius:25
      // },
      img:{
        width:200,
        height:25,
        justifyContent:"center",
        marginTop:18,
        marginLeft:250,
      }
   });
export default Landing;