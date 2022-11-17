import React from "react";
import { View,Text,ScrollView,StyleSheet,ImageBackground,Image,Button} from "react-native";
import { TextInput } from 'react-native-paper';
const Details=({route,navigation})=>{
    const value=route?.params?.item;
    const load=route.params.reload;
   // alert(load)
    console.log(route);
return(
    <View style={Styles.flex}>
    <ImageBackground style={Styles.flex} source={require('./assets/background.png')}  >
    <ScrollView>
         <TextInput label="Gender" 
            value={value.Gender}
            mode='outlined'
           disabled='true'
            style={Styles.desg}/>
      <View style={{
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 20,
      }}>
        <TextInput label="FirstName"
          value={value.FirstName}
          mode="outlined"
          disabled='true'
          style={Styles.Name} />
        <TextInput label="LastName"
          value={value.LastName}
          mode="outlined"
         disabled='true'
          style={Styles.Name} />
      </View>
      <View>
        <TextInput label="Designation"
          value={value.Designation}
          mode="outlined"
          disabled='true'
          style={Styles.desg} />
        <TextInput label="DOB" 
            value={value.DOB}
            mode='outlined'
            disabled='true'
            style={Styles.desg}/>
        <TextInput label="Date of joining"
          value={value.DOJ}
          disabled='true'
          mode='outlined'
          style={Styles.desg} />
        <TextInput label="Employee ID"
          value={value.EmployeeId}
          mode="outlined"
         disabled='true'
          style={Styles.id} />
        <View style={Styles.btn}>
          <Button title="Back" color={"red"} onPress={() => navigation.navigate("EmployeeDetails")} />
         <View style={{marginLeft:30}}>
          <Button title="Update" color={"red"} onPress={()=>navigation.navigate("Update",{value : value,reload : load})}/>
          </View>
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
    Name: {
      backgroundColor: '#ebd5f7',
      width: 160,
      borderRadius: 5,
      padding: 11,
    },
    desg: {
      backgroundColor: '#ebd5f7',
      borderRadius: 2,
      padding: 10,
      marginTop: 30,
      margin: 7,
      marginLeft: 10,
      marginRight: 10,
    },
    btn: {
      marginTop: 30,
      width: 100,
      marginLeft:120,
      //alignSelf: 'center',
      paddingBottom: 50,
      flexDirection:'row',
      
    },
    img: {
      marginTop: 20,
      width: 50,
      height: 90,
      marginLeft: 40,
    },
    image: {
      marginTop: -80,
      width: 70,
      height: 80,
      marginLeft: 220,
    },
    id: {
      backgroundColor: '#ebd5f7',
      borderRadius: 2,
      padding: 10,
      marginTop: 30,
      margin: 7,
      marginLeft: 10,
      marginRight: 10,
    },
});
export default Details;