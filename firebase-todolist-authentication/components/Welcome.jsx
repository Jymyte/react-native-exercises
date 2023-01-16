import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from '../style/style'

const Welcome = ({navigation}) => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.header}>Todos, welcome</Text>
      <Text style={styles.infoText}>For people having lots of things todo</Text>
      <View style={styles.buttonStyle}>
        <Button title="Register" onPress={()=> navigation.navigate('Register')} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Login" onPress={()=> navigation.navigate('Login')} />
      </View>
    </View>
  )
}

export default Welcome