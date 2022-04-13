import { Text, Button, TextInput, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { Component, useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import RadioGroup from 'react-native-radio-buttons-group';

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
  const [time, setTime] = useState();
  const [gender, setGender] = useState("male");
  const [cans, setCans] = useState();
  const [result, setResult] = useState(0);
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)
  
  const HandleSubmit = () => {
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
          <TextInput style={styles.field} onChangeText={text => setWeight(text)} keyboardType='decimal-pad'/>
          <Text style ={styles.field}>Cans</Text>
          <Picker selectedValue={cans} onValueChange={(itemValue, itemIndex) => setCans(itemValue)}>
            {amounts}
          </Picker>
          <Text style ={styles.field}>Time in hours</Text>
          {/* <TextInput style={styles.field} onChangeText={text => setTime(text)} keyboardType='decimal-pad'/> */}
          <Picker selectedValue={time} onValueChange={(itemValue, itemIndex) => setTime(itemValue)}>
            {amounts}
          </Picker>
          <Text style={styles.field}>Gender</Text>
          <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton}/>
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
  },
  field: {
    marginBottom:10,
  },
  scrollView: {
    backgroundColor: "#D3D3D3",
    marginHorizontal: 20,
  },
})