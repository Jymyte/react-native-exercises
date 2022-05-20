import { Text, Button, TextInput, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { Component, useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import RadioGroup from 'react-native-radio-buttons-group';
import theme from '../Theme';

const radioButtonsData = [{
  id: '1',
  label: 'Male',
  value: 'male'
}, {
  id: '2',
  label: 'Female',
  value: 'female'
}]

export default AlcometerForm = () => {
  const [weight, setWeight] = useState("0");
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [cans, setCans] = useState(1);
  const [result, setResult] = useState(0);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  const [showError, setShowError] = useState(false);
  
  const HandleSubmit = () => {
    if(weight <= 0) {
      setShowError(true);
    } else {
      setShowError(false);

      let litres = 0.33 * cans
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - (burning * time)
      let result;
      
      if (gender === "male") {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
  
      if (result >= 0) {
        setResult(result)
      } else {
        setResult(0)
      }
    }
  }

    let amounts = []
    for (let i = 1; i <= 24; i++) amounts.push( <Picker.Item label={i.toString()} value={i.toString()} key={i} />)

    function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
      radioButtonsArray.forEach(element => {
        if (element.selected == true) setGender(element.value)
      });
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>AlcometerForm</Text>
          <Text>Weight</Text>
          <TextInput style={styles.inputField} onChangeText={text => setWeight(text)} keyboardType='decimal-pad'/>
          {showError ? <Text style={styles.errorMessage}>Weight is required</Text> : null}
          <Text style ={styles.field}>Cans</Text>
          <Picker style={styles.inputField} selectedValue={cans} onValueChange={(itemValue, itemIndex) => setCans(itemValue)}>
            {amounts}
          </Picker>
          <Text style ={styles.field}>Time in hours</Text>
          {/* <TextInput style={styles.field} onChangeText={text => setTime(text)} keyboardType='decimal-pad'/> */}
          <Picker style={styles.inputField} selectedValue={time} onValueChange={(itemValue, itemIndex) => setTime(itemValue)}>
            {amounts}
          </Picker>
          <Text style={styles.field}>Gender</Text>
          <RadioGroup style={styles.inputField} radioButtons={radioButtons} onPress={onPressRadioButton}/>
          <Text style={styles.field}>{result.toFixed(2)}</Text>
          <Button onPress={HandleSubmit} title="Calculate" />
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:10,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D3D3D3",
    height: '100%' 
  },
  field: {
    marginBottom:10,
  },
  scrollView: {
    backgroundColor: "#D3D3D3",
    marginHorizontal: 20,
  },
  errorMessage: {
    fontWeight: "bold",
    color: "red",
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
  }
})