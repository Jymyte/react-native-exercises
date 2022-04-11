import { Text,TextInput, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import {Picker} from '@react-native-picker/picker';


export default class AlcometerForm extends Component {
  const [weight, setWeight] = useState("0");
  const [time, setTime] = useState();
  const [gender, setGender] = useState("male");
  const [cans, setCans] = useState();
  const [result, setResult] = useState(0);
  
  const HandleSubmit = (e) => {
    
    
    e.preventDefault()
    let litres = 0.33 * cans
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    
    if (gender === "male") {
      setResult(gramsLeft / (weight * 0.7))
    } else {
      setResult(gramsLeft / (weight * 0.6))
    }
  }

  render() {
    let amounts = []
    for (let i = 1; i <= 24; i++) amounts.push( <Picker.Item label={i.toString()} value={i.toString()} key={i} />)

    return (
      
      <View>
        <Text>AlcometerForm</Text>
        <Text>Weight</Text>
        <TextInput style={styles.field} onChangeText={text => setWeight(text)} keyboardType='decimal-pad'/>
        <Text style ={styles.field}>Cans</Text>
        <Picker selectedValue={(itemValue) => setCans(itemValue)}>
          {amounts}
        </Picker>
        <Text style ={styles.field}>Time in hours</Text>
        {/* <TextInput style={styles.field} onChangeText={text => setTime(text)} keyboardType='decimal-pad'/> */}
        <Picker selectedValue={(itemValue) => setTime(itemValue)}>
          {amounts}
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:10,
  },
  field: {
    marginBottom:10,
  }
})