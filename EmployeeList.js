import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { getData ,storeData} from './Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const names = async key => {
  try {
    const jsonValue = JSON.stringify(key)
    await AsyncStorage.setItem('key', jsonValue)
   // alert(jsonValue)
  } catch (e) {
  }
};

const EmployeeList = ({navigation}) => {
  const [employeedetails, setemployeedetails] = useState([]);
  useEffect(() => {
    findData();
  }, []);

  const onReload=()=>{
    findData();
  }

  const findData = async () => {
    let details = await getData('Information');
    console.log('details====>',details[0]);
    setemployeedetails(details);
   // alert(JSON.stringify(details));
  };

  const deleteDetails= async(ID)=>{
   
    let data = await getData('Information');
    const index= data.indexOf(data[ID])
    data.splice(index,1);
    storeData('Information', data);
    alert("Deleted");
    findData();
  }

  const renderItem = ({item}) => {
    console.log('Item===>',item);
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("Details",{item : item,reload : onReload })}
      onLongPress={() =>deleteDetails(item.ID) }>
        <View style={Styles.lists}>
        <Text style ={{fontWeight:"bold",fontSize:18,color:"black"}}>{item["FirstName"]} {item["LastName"]}</Text>
         
        </View>
      </TouchableOpacity>
    );
  };


  return (
    <View>
      {employeedetails && employeedetails.length>0 &&<FlatList data={employeedetails} renderItem={renderItem} />}
    </View>
  );
};
const Styles = StyleSheet.create({
  lists: {
    flexDirection: 'row',
    backgroundColor: '#ebd5f7',
    padding: 20,
    marginBottom: 9,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 4,
  },
});

export default EmployeeList;