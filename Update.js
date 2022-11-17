import React,{useState} from "react";
import { View, ScrollView, StyleSheet, Button, Image, TouchableOpacity,ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
import { getData, storeData } from "./Store";
import DateTimePicker from '@react-native-community/datetimepicker';

const Update = ({route,navigation}) => {
  
    const value=route?.params?.value;

    const [firstname, setfirstname] = useState(value.FirstName);
    const [lastname, setlastname] = useState(value.LastName);
    const [designation, setdesignation] = useState(value.Designation);
    const [dob,setdob]=useState(value.DOB);
    const [Gender,setGender]=useState(value.Gender);
    const [doj, setdoj] = useState(value.DOJ);
    const [empid, setempid] = useState(value.EmployeeId);

    let emp = {
        ID:value.ID,
        Gender : Gender,
        FirstName: firstname,
        LastName: lastname,
        Designation: designation,
        DOB: dob,
        DOJ: doj,
        EmployeeId: empid
      };
      let initialval;
      if(Gender==='Male')
      {
        initialval=0;
      }
      else{
        initialval=1;
      }

      const [datePicker, setDatePicker] = useState(false);
      const [datePicker2, setDatePicker2] = useState(false);
    
      const [date, setDate] = useState(new Date());
    
      function onDateSelected(event, value) {
        setDatePicker(false);
        const date1 = new Date(value);
        setdob(
          date1.getDate() + '/' + (date1.getMonth()+1)  + '/' + date1.getFullYear(),
        );
      }
      function onDateDOJSelected(event, value) {
        setDatePicker2(false);
        const date2 = new Date(value);
        setdoj(
          date2.getDate() + '/' +(date2.getMonth()+1)  + '/' + date2.getFullYear(),
        );
      }      
    var radio_props = [
        { label: '                                              ', value: 0 },
        { label: '', value: 1 }
      ];

      const Edit= async ()=>{
          let data=await getData('Information')
          console.log(value.ID)
          data[value.ID]=(emp)
          storeData('Information',data)
        //   alert(data[value.ID])
         
          alert("Updated Successfully")
          route.params.reload()
          navigation.navigate('EmployeeDetails')
      }
    
       
      return (
        <View style={Styles.flex}>
        <ImageBackground style={Styles.flex} source={require('./assets/background.png')}  >
        <ScrollView>
        <Image
        style={Styles.img}
        source={require('./assets/maleicon.png')}/>
      <Image
        style={Styles.image}
        source={require('./assets/female.png')} />
          <View style={{
            justifyContent: 'space-between',
            marginTop: 40,
            marginLeft: 50,
          }}>
            {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
        {datePicker2 && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateDOJSelected}
          />
        )}
            <RadioForm
              radio_props={radio_props}
              initial={initialval}
              onPress={(value) => {
                if(value===0)
                 {
                  setGender("Male")
                 }
                 else
                 {
                  setGender("Female")
                 }
              }}
              formHorizontal={true}
              buttonSize={10} />
          </View>
          <TextInput
          label="Gender"
          value={Gender}
          mode="outlined"
          Outlined="focused"
          style={Styles.desg}
        />
          <View style={{
            flexDirection: 'row',
            justifyContent: "space-evenly",
            marginTop: 20,
          }}>
            <TextInput label="FirstName"
              value={firstname}
              mode="outlined"
              onChangeText={firstname => setfirstname(firstname)}
              style={Styles.Name} />
            <TextInput label="LastName"
              value={lastname}
              mode="outlined"
              onChangeText={lastname => setlastname(lastname)}
              style={Styles.Name} />
          </View>
          <View>
            <TextInput label="Designation"
              value={designation}
              mode="outlined"
              onChangeText={designation => setdesignation(designation)}
              style={Styles.desg} />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            label="DOB"
            mode="outlined"
            value={dob}
            style={Styles.Text}
          />

          <TouchableOpacity onPress={() => setDatePicker(true)}>
            <Image
              style={Styles.Icon}
              source={require('/home/divum/Projects/employee/assets/calendar.png')}
            />
          </TouchableOpacity>
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            label="Date Of Joining"
            mode="outlined"
            value={doj}
            style={Styles.Text}
          />
          <TouchableOpacity onPress={() => setDatePicker2(true)}>
            <Image
              style={Styles.Icon}
              source={require('/home/divum/Projects/employee/assets/calendar.png')}
            />
          </TouchableOpacity>
        </View>
            <TextInput label="Employee ID"
              value={empid}
              keyboardType='numeric'
              mode="outlined"
              onChangeText={empid => setempid(empid)}
              style={Styles.id} />
            <View style={Styles.btn}>
              <Button title="Save" color={"red"} onPress={() => Edit()} />
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
        alignSelf: 'center',
        paddingBottom: 50
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
      Icon: {
        width: 50,
        height: 60,
        marginTop: 50,
        marginRight: 10,
      },
      Text: {
        backgroundColor: '#ebd5f7',
        borderRadius: 15,
        padding: 8,
        marginTop: 40,
        margin: 6,
        marginLeft: 6,
        flex: 1,
      },
    });
    
    export default Update;