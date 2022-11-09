import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from './Text'

  export default function RepositoryItem(props) {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reViewCount} = props.item
    
  /* return (
    <View>
      <Text color="textSecondary">Makkara</Text>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{forksCount}</Text>
      <Text>{stargazersCount}</Text>
      <Text>{ratingAverage}</Text>
      <Text>{reViewCount}</Text>
    </View>
  ) */

  return (
    <View>
      <View style={styles.flexRowContainer}>
        {/* kuva ja tiedot */}
        <Image></Image>
        <View>
          <Text fontSize={"subheading"} fontWeight={"bold"}>{fullName}</Text>
          <Text color={"textSecondary"}>{description}</Text>
          {/* Miten saan tähän alignSelf: "flex-start" */}
          <Text backgroundColor={"primary"}>Makkaraa</Text> 
          {/* Miten saan tähän alignSelf: "flex-start" */}
        </View>
      </View>
      <View style={[styles.flexRowContainer, {justifyContent: 'space-evenly'}]}>
        {/* Numerot. Käytetään flexRowContainer mutta yliajetaan justify-content välejä varten*/}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({flexRowContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-start',

}})