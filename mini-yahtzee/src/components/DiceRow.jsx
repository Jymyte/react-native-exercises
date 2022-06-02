import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

function DiceRow({board, NBR_OF_DICES, selectedDices, setSelectedDices, getColor}) {

  const selectDice = (number) => {
    let dices = [...selectedDices];
    dices[number] = selectedDices[number] ? false : true;
    setSelectedDices(dices);
  }

  const diceRow = [];
  for (let i = 0; i < NBR_OF_DICES; i++) {
    diceRow.push(
      <Pressable
        key={"row" + i}
        onPress={() => selectDice(i)}>
          <MaterialCommunityIcons
            name={board[i]}
            key={"row" + i}
            size={50}
            color={getColor(i, selectedDices)} />
        </Pressable>
    )
  }

  return (
    <View style={styles.flex}>
      {diceRow}
    </View>
  )
}

export default DiceRow