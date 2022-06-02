import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

function ScoreRow({board, selectedScores, scores, NBR_OF_SIDES, NBR_OF_DICES, setSelectedScores, selectedDices, getColor, nbrOfThrowsLeft, setStatus, setTotalScore, totalScore, setScores, setSelectedDices}) {

  const selectScore = (number, score) => {
    console.log(score);
    let selected = [...selectedScores];
    selected[number - 1] = true;
    setSelectedScores(selected);

    let scoresTemp = [...scores];
    scoresTemp[number - 1] = score;
    setScores(scoresTemp);
  }

  //How do I reduce?????

  const countScore = (diceNumber) => {
    const currentDiceScores = board.map((i) => {
      return parseInt(i.match(/\d+/)[0])
    })

    if (nbrOfThrowsLeft > 0) {
      setStatus('Keep on throwing');
    } else {
      const sum = currentDiceScores.reduce((previousSum, i) => {
        if (i === diceNumber) {
          console.log(i, "reducsessa");
          return previousSum + i;
        } else return 0;
      },0)

      console.log(sum, "tää on se summa");

      //Nää vois siirtää Gameboardiin jonain initNewRound funktiona.
      //Also pitää tehä sillee, että kun pelaaja vuoron lopussa valitsee pisteen, ei hän voi enempää pisteitä valita.
      setTotalScore(totalScore + sum);
      setStatus('Throw to start the next round');
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
      selectScore(diceNumber, sum);
      board = [];
    }
  }

  const scoreRow = [];
  for (let i = 0; i < NBR_OF_SIDES; i++) {
    scoreRow.push(
      <Text key={"score" + i}>
        {scores[i]}
      </Text>
    )
  }

  const selectScoreRow = [];
  for (let i = 0; i < NBR_OF_SIDES; i++) {
    selectScoreRow.push(
      <Pressable
        key={"row" + i}
        onPress={() => countScore(i + 1)}>
          <MaterialCommunityIcons
            name={"numeric-"+ (i + 1) +"-circle"}
            key={"row" + i}
            size={40}
            color={getColor(i, selectedScores)} />
        </Pressable>
    )
  }

  return (
    <View>
      <View style={styles.flex}>
      {scoreRow}
      </View>
      <View style={styles.flex}>
      {selectScoreRow}
      </View>
    </View>
  )
}

export default ScoreRow