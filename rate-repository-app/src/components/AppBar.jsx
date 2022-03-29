import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function AppBar() {
  return (
    <View style={styles.container}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,

  }
})