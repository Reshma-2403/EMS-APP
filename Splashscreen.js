import React , { useState } from 'react';  
import { StyleSheet, View, Image } from 'react-native';  
import { retrieveData } from './Store';
 const Splashscreen = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 1000);

  const loginCheck=async()=>{
  let userinfo=await retrieveData('userInfo');
  if(userinfo.Loginid && userinfo.Pwd)
  {
  //console.log(userinfo.Loginid)
    navigation.replace('Landing');
  }
  else{
    navigation.navigate('Login');
  }
}
  if (!timePassed) {
    return (
      <View style={Styles.main}>
      <View style={Styles.splash}>
        <View style={Styles.logo}>
        <Image 
        style={Styles.img}
        source={require('/home/divum/Projects/employee/assets/employee.png')}></Image>
      </View>
      </View>
      </View>
    );
  }
  //navigation.navigate('Login');
  loginCheck();
  return null;
};

const Styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  splash: {
    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    backgroundColor:'white',
    padding:200
    
  },
  img:{
    width: 150,
    height: 200,
    justifyContent:'center'

  },
  
  logo: {
    alignItems: 'center',
    marginTop:50
  },
});

export default Splashscreen;