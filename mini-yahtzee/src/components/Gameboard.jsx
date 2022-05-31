import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Pressable} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_SIDES = 6;
const NBR_OF_THROWS = 5;

function Gameboard() {
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('');
  const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
  const [scores, setScores] = new Array(NBR_OF_SIDES).fill(0);
  const [selectedScores, setSelectedScores] = useState(new Array(NBR_OF_DICES).fill(false))
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    checkRoundEnd();
    if(nbrOfThrowsLeft === NBR_OF_THROWS) {
      setStatus('Game has not started');
    }
    if (nbrOfThrowsLeft < 0) {
      setNbrOfThrowsLeft(NBR_OF_THROWS-1);
    }
  }, [nbrOfThrowsLeft]);
  
  const getDiceColor = (i) => {
    if (board.every((val, i, arr) => val === arr[0])) {
      return "orange";
    } else {
      return selectedDices[i] ? "black" : "steelblue";
    }
  }
  
  const selectDice = (number) => {
    let dices = [...selectedDices];
    dices[number] = selectedDices[number] ? false : true;
    setSelectedDices(dices);
  }

  const selectScore = (number, score) => {
    let selected = [...selectedScores];
    selected[number] = true;
    setSelectedDices(selected);

    let scoresTemp = [...scores];
    scoresTemp[number - 1] = score;
    setScores(scoresTemp);
  }
  
  const throwDices = () => {
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = 'dice-' + randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
  }
  
  const checkRoundEnd = () => {
    if (board.every((val, i, arr) => val === arr[0]) && nbrOfThrowsLeft > 0) {
      setStatus('Select your points');
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
    } else {
      setStatus('Keep on throwing');
    }
  }

  const countScore = (diceNumber) => {
    if (nbrOfThrowsLeft >= 0) {
      setStatus('Keep on throwing');
    } else {
      const sum = selectDice.reduce((previousSum, i) => {
        if (i === diceNumber) previousSum + i;
      })

      setTotalScore(totalScore + sum);
      setStatus('Throw to start the next round');
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
      selectScore(diceNumber, sum);
    }
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
            color={getDiceColor(i)} />
        </Pressable>
    )
  }

  return (
    <View style={styles.gameboard}>
      <View style={styles.flex}>{diceRow}</View>
      <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      <Pressable style={styles.button} onPress={() => throwDices()}>
        <Text style={styles.buttonText}>Throw dices</Text>
      </Pressable>
    </View>
  )
}

export default Gameboard
