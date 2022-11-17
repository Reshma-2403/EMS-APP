import * as React from 'react';
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './Splashscreen';
import Login from "./Loginscreen";
import Landing from './Landing';
import Create from './Create';
import EmployeeList from './EmployeeList';
import Details from './Details';
import Update from './Update';

const Stack = createStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={Splashscreen} options={{headerTransparent:true}}/>
        <Stack.Screen name="Login" component={Login} options={{headerTransparent:true,headerLeft:()=>null}} />
        <Stack.Screen name="Landing" component={Landing} options={{headerTransparent:true}}/>
        <Stack.Screen name="Create" component={Create}/>
        <Stack.Screen name="EmployeeDetails" component={EmployeeList}/>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Update" component={Update}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;