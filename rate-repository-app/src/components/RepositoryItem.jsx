import { View } from 'react-native'
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
    reviewCount} = props.item
    
  return (
    <View>
      <Text color="textSecondary">Makkara</Text>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
      <Text>{forksCount}</Text>
      <Text>{stargazersCount}</Text>
      <Text>{ratingAverage}</Text>
      <Text>{reviewCount}</Text>
    </View>
  )
}
