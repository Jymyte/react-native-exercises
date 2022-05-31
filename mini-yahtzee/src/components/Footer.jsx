import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style/style';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.author}>
        Author: Sanna  Miaurin
      </Text>
    </View>
  )
}

export default Footer