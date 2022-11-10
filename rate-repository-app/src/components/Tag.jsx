import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'
import theme from '../theme'

export default function Tag({text}) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
  },
})