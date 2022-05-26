import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style/style';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Same Dices
      </Text>
    </View>
  )
}

export default Header