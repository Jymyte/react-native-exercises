import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from './Text'
import Tag from './Tag'

  export default function RepositoryItem(props) {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = props.item

  const roundToThousands = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.flexRowContainer]}>
        {/* KUVA JA TIEDOT */}
        <View>
          <Image source={{uri: ownerAvatarUrl, width: 60, height: 60}}></Image>
        </View>
        <View style={{paddingLeft: 15}}>
          <Text style={{padding: 2}} fontSize={"subheading"} fontWeight={"bold"}>{fullName}</Text>
          <Text style={{padding: 2}} color={"textSecondary"}>{description}</Text>
          <View style={{paddingTop: 4}}>
            <Tag text={language}></Tag>
          </View>
        </View>
      </View>
      <View style={[styles.flexRowContainer, {justifyContent: 'space-evenly'}]}>
        {/* STATIT */}
        
        <View>
          <Text fontSize={"subheading"} fontWeight={"bold"} style={{textAlign: 'center'}}>{roundToThousands(stargazersCount)}</Text>
          <Text style={{textAlign: 'center'}}>Stars</Text>
        </View>
        <View>
          <Text fontSize={"subheading"} fontWeight={"bold"} style={{textAlign: 'center'}}>{roundToThousands(forksCount)}</Text>
          <Text style={{textAlign: 'center'}}>Forks</Text>
        </View>
        <View>
          <Text fontSize={"subheading"} fontWeight={"bold"} style={{textAlign: 'center'}}>{roundToThousands(reviewCount)}</Text>
          <Text style={{textAlign: 'center'}}>Reviews</Text>
        </View>
        <View>
          <Text fontSize={"subheading"} fontWeight={"bold"} style={{textAlign: 'center'}}>{roundToThousands(ratingAverage)}</Text>
          <Text style={{textAlign: 'center'}}>Rating</Text>
        </View>
        

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexRowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  container: {
    padding: 12,
  }
})