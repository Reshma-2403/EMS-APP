import React, { useState,useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text, Button, Image, SafeAreaView,TouchableOpacity,ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import RadioForm from 'react-native-simple-radio-button';
//import DatePicker from 'react-native-datepicker';
import { getData, storeData } from './Store';
// import DatePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
const Create = ({navigation}) => {
  
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [designation, setdesignation] = useState("");
  const [dob,setdob]=useState("");
  const [Gender,setGender]=useState("");
  const [doj, setdoj] = useState("");
  const [empid, setempid] = useState("");
  const [key, setkey] = useState();
  

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [designationError, setDesignationError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [dojError, setDojError] = useState(false);
  const [employeeIDError, setEmployeeIDError] = useState(false);
  const [genderError, setGenderError] = useState(false);

  useEffect(()=>{
    setLength();
  },[])
  const setLength = async () => {
    let data = await getData('Information');
    if (data.length == []) {
      setkey(0);
    } else {
      const lastIndex = data.length;
      setkey(lastIndex);
      console.log('last', lastIndex);
    }
  };

  let emp = {
    ID:key,
    Gender : Gender,
    FirstName: firstname,
    LastName: lastname,
    Designation: designation,
    DOB: dob,
    DOJ: doj,
    EmployeeId: empid
  };
  console.log(emp);
  var radio_props = [
    { label: '                                              ', value: 0 },
    { label: '', value: 1 }
  ];
  // const checkTextInput=()=>{
  //   if(firstname.trim() && lastname.trim() && designation.trim() && dob.trim() && Gender.trim() && doj.trim() && empid.trim() ) 
  //     Submit();
  //   else
  //     alert("Please fill all the details");

  const Submit = async () => {
    if (Gender && firstname && lastname && designation && dob && doj && empid) {
      let data = await getData('Information');
      setkey(key+1);
      data.push(emp);
       
      storeData('Information', data);
      // console.log(emp.Gender);
      alert('Submitted')
      navigation.navigate('Landing')
    } else {
      if (!firstname) setFirstnameError(true);
      if (!lastname) setLastnameError(true);
      if (!Gender) setGenderError(true);
      if (!designation) setDesignationError(true);
      if (!empid) setEmployeeIDError(true);
      if (!dob) setDobError(true);
      if (!doj) setDojError(true);
    }
  };

  const onChangeTextValue = (text, TextInputName) => {
    switch (TextInputName) {
      case 'FirstName':
        setfirstname(text);
        setFirstnameError(false);
        break;
      case 'LastName':
        setlastname(text);
        setLastnameError(false);
        break;
      case 'Designation':
        setdesignation(text);
        setDesignationError(false);
        break;
      case 'DOB':
        setdob(text);
        setDobError(false);
        break;
      case 'DOJ':
        setdoj(text);
        setDojError(false);
        break;
      case 'EmployeeId':
        setempid(text);
        setEmployeeIDError(false);
        break;
    }
  };
  const [datePicker, setDatePicker] = useState(false);
  const [datePicker2, setDatePicker2] = useState(false);

  const [date, setDate] = useState(new Date());

  function onDateSelected(event, value) {
    setDatePicker(false);
    setDobError(false);
    const date1 = new Date(value);
    setdob(
      date1.getDate() + '/' + (date1.getMonth()+1) + '/' + date1.getFullYear(),
    );
  }
  function onDateDOJSelected(event, value) {
    setDatePicker2(false);
    setDojError(false);
    const date2 = new Date(value);
    setdoj(
      date2.getDate() + '/' + (date2.getMonth()+1) + '/' + date2.getFullYear(),
    );
  }
  return (
    <View style={Styles.flex}>
    <ImageBackground style={Styles.flex} source={require('./assets/background.png')}  >
    <ScrollView>
      <Image
        style={Styles.img}
        source={require('./assets/maleicon.png')}
      />
      <Image
        style={Styles.image}
        source={require('./assets/female.png')}
      />
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
        <RadioForm
          radio_props={radio_props}
         // initial={0}
          onPress={(value) => {
            if(value===0)
             {
              setGender("Male")
              setGenderError(false);
             }
             else
             {
              setGender("Female")
              setGenderError(false);
             }
          }}
          formHorizontal={true}
          buttonSize={10} 
          error={genderError}/>
      </View>
      <TextInput
          label="Gender"
          value={Gender}
          mode="outlined"
          Outlined="focused"
          style={Styles.desg}
          error={genderError}
        />
      <View style={{
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 20,
      }}>
        <TextInput label="FirstName"
          value={firstname}
          mode="outlined"
          onChangeText={text => onChangeTextValue(text, 'FirstName')}
          style={Styles.Name}
          error={firstnameError} />
        <TextInput label="LastName"
          value={lastname}
          mode="outlined"
          onChangeText={text => onChangeTextValue(text, 'LastName')}
          style={Styles.Name} 
          error={lastnameError}/>
      </View>
      <View>
        <TextInput label="Designation"
          value={designation}
          mode="outlined"
          onChangeText={text => onChangeTextValue(text, 'Designation')}
          style={Styles.desg}
          error={designationError} />

<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            label="DOB"
            mode="outlined"
            value={dob}
            style={Styles.Text}
            error={dobError}
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
            error={dojError}
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
           keyboardType='number-pad'
          mode="outlined"
          onChangeText={text => onChangeTextValue(text, 'EmployeeId')}
          style={Styles.id}
          error={employeeIDError} />
           {datePicker2 && (
          <DateTimePicker
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onDateDOJSelected}
          />
        )}
        <View style={Styles.btn}>
          <Button title="Submit" color={"red"} onPress={() =>  Submit() }/>
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

export default Create;