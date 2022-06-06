import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';
import style from '../style/style';

function ScoreRow({checkGameEnd, board, selectedScores, scores, NBR_OF_SIDES,
    NBR_OF_DICES, setSelectedScores, selectedDices, getColor,
    nbrOfThrowsLeft, setStatus, setTotalScore, totalScore,
    setScores, setSelectedDices, roundOver, setRoundOver}) {

  const selectScore = (number, score) => {
    console.log(score);
    let selected = [...selectedScores];
    selected[number - 1] = true;
    setSelectedScores(selected);

    let scoresTemp = [...scores];
    scoresTemp[number - 1] = score;
    setScores(scoresTemp);
  }

  const countScore = (diceNumber) => {
    // If round is over skip over this function. Round is over once player has chosen a score succesfully.
    if (!roundOver) {
      if (nbrOfThrowsLeft > 0) {
        setStatus('Throw 3 times before setting points');
      } else if (selectedScores[diceNumber-1]){
        setStatus("You have already selected that score")
      } else {
        setRoundOver(true);
  
        console.log("roundOver", roundOver);
        
        let currentDiceScores = board.map((i) => {
          return parseInt(i.match(/\d+/)[0])
        })
        
        const sum = currentDiceScores.reduce((previousSum, i) => {
          if (i === diceNumber) {
            console.log(i, "reducessa");
            return previousSum + i;
          } else return previousSum;
        },0)
  
        console.log(sum, "tää on se summa");
        
        //initializing next round
        setTotalScore(totalScore + sum);
        setStatus('Throw to start the next round');
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        selectScore(diceNumber, sum);
        checkGameEnd();
      }
    } else {
      console.log("Skipped");
    }
  }

  const scoreRow = [];
  for (let i = 0; i < NBR_OF_SIDES; i++) {
    scoreRow.push(
        <Text style={styles.scoreText} key={"score" + i}>
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
      <View style={styles.scoreRow}>
      {scoreRow}
      </View>
      <View style={styles.selectScoreRow}>
      {selectScoreRow}
      </View>
    </View>
  )
}

export default ScoreRow