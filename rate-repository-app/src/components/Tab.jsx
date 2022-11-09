import { View, Pressable } from 'react-native'
import React from 'react'
import Text from './Text';


const Tab = ({name}) => {
  return (
    <View>
      <Pressable>
        <Text fontSize="subheading" fontWeight="bold">{name}</Text>
      </Pressable>
    </View>
  )
}

export default Tab
