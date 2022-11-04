import { Text, View, Pressable, StyleSheet } from 'react-native'
import React from 'react'


const Tab = ({name}) => {
  return (
    <View>
      <Pressable>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  )
}

export default Tab

const styles = StyleSheet.create({
  text: {
      fontWeight: "bold",
  }
})