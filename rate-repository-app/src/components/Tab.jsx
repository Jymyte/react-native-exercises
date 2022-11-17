import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text';
import { Link } from 'react-router-native';


const Tab = ({name, destination}) => {
  return (
    <View style={styles.tab}>
      <Link to={destination}>
        <Text fontSize="subheading" fontWeight="bold">{name}</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({tab: {
  paddingLeft: 24,
  PaddingRight: 24,
}})

export default Tab
