import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'
import theme from '../theme'

export default function Tag({text}) {
  return (
    <View style={styles.container}>
      <Text style={{paddingLeft: 5, paddingRight: 5}}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
  },
})