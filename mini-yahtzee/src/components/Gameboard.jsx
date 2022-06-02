import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../style/style';
import DiceRow from "./DiceRow";
import ScoreRow from "./ScoreRow";

let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_SIDES = 6;
const NBR_OF_THROWS = 5;

function Gameboard() {
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('');
  const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
  const [scores, setScores] = useState(new Array(NBR_OF_SIDES).fill(0))
  const [selectedScores, setSelectedScores] = useState(new Array(NBR_OF_DICES).fill(false))
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    checkRoundEnd();
    if(nbrOfThrowsLeft === NBR_OF_THROWS) {
      setStatus('Game has not started');
    }
  }, [nbrOfThrowsLeft]);
  
  const throwDices = () => {
    for (let i = 0; i < NBR_OF_DICES; i++) {
      if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = 'dice-' + randomNumber;
      }
    }
    if (nbrOfThrowsLeft > 0)
    setNbrOfThrowsLeft(nbrOfThrowsLeft-1)
    else setNbrOfThrowsLeft(NBR_OF_THROWS)
  }

  const getColor = (i, j) => {
    return j[i] ? "black" : "steelblue";
  }
  
  const checkRoundEnd = () => {
    if (board.every((val, i, arr) => val === arr[0]) && nbrOfThrowsLeft > 0) {
      setStatus('Select your points');
      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
    } else {
      setStatus('Keep on throwing');
    }
  }

  return (
    <View style={styles.gameboard}>
      <View style={styles.flex}>
        <DiceRow board={board} NBR_OF_DICES={NBR_OF_DICES} selectedDices={selectedDices} setSelectedDices={setSelectedDices} getColor={getColor}/>
      </View>
      <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      <Pressable style={styles.button} onPress={() => throwDices()}>
        <Text style={styles.buttonText}>Throw dices</Text>
      </Pressable>
      <ScoreRow board={board} selectedScores={selectedScores} scores={scores} NBR_OF_SIDES={NBR_OF_SIDES} NBR_OF_DICES={NBR_OF_DICES} setSelectedScores={setSelectedScores} selectedDices={selectedDices} getColor={getColor} nbrOfThrowsLeft={nbrOfThrowsLeft} setStatus={setStatus} setTotalScore={setTotalScore} totalScore={totalScore} setScores={setScores} setSelectedDices={setSelectedDices}/>
    </View>
  )
}

export default Gameboard
