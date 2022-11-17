import React, { useState } from "react";
import { View, Image, StyleSheet,Button,ImageBackground} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { retrieveData, setData } from "./Store";
const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

// const logincheck = async ()=>{
//   let userinfo=await retrieveData('getdata');
//   if(userinfo.Loginid && userinfo.Pwd)
//   {
//     console.log(userinfo.Loginid)
//     navigation.navigate('Landing');
//   }
// }
const loginData=async()=>{
  const logindetails={
    Loginid :username,
    Pwd :password,
  };
 //console.log(logindetails)
  
  setData('userInfo',logindetails);
  
  let userinfo=await retrieveData('userInfo');
  if((userinfo.Loginid.trim()==='Reshma') && (userinfo.Pwd.trim()==2403))
  {
  //console.log(userinfo.Loginid)
    navigation.replace('Landing');
  }
  else{
    alert("Incorrect UserName or Password")
  }
};
  return (
    <View style={Styles.flex}>
       <ImageBackground style={Styles.flex} source={require('./assets/login_bg.jpg')} >
       <ScrollView>
        <Image
          style={Styles.Loginimage}
          source={require('./assets/user.png')}
        />
        <View style={Styles.Input}>
          <TextInput label="UserName"
            value={username}
            mode='outlined'
            //autoCapitalize="true"
            onChangeText={username => setUsername(username)}
            //onSubmitEditing={username}
            style={Styles.UserName} />
          <TextInput label="Password"
            value={password}
            mode='outlined'
            keyboardType="numeric"
            onChangeText={password => setPassword(password)}
            style={Styles.UserName} secureTextEntry />
          <View style={Styles.btn}>
            <Button title="login" onPress={() => loginData()} />
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const Styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  Loginimage: {
    marginTop: 140,
    width: 120,
    height: 100,
    alignSelf: 'center',
  },
  UserName: {
    backgroundColor: '#f5d0ee',
    paddingLeft: 10,
    marginTop: 40,
    marginRight: 80,
    marginLeft: 80,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    width: 240,
  },
  Input: {
    marginTop: 20,
  },
  btn: {
    marginTop: 30,
    width: 100,
    alignSelf:'center',
  }
});
export default Login;