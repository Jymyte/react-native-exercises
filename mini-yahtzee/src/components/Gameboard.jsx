import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../style/style';
import DiceRow from "./DiceRow";
import ScoreRow from "./ScoreRow";

let board = [];
let bonusWon = false;
const NBR_OF_DICES = 5;
const NBR_OF_SIDES = 6;
const NBR_OF_THROWS = 3;
const BONUS_SCORE_TRESHOLD = 63;
const BONUS_SCORE = 10;

function Gameboard() {
  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('');
  const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
  const [scores, setScores] = useState(new Array(NBR_OF_SIDES).fill(0))
  const [selectedScores, setSelectedScores] = useState(new Array(NBR_OF_SIDES).fill(false))
  const [totalScore, setTotalScore] = useState(0);
  const [roundOver, setRoundOver] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [bonusText, setBonusText] = useState("Get 63 points for bonus");
  
  useEffect(() => {
    checkRoundEnd();
    if(nbrOfThrowsLeft === NBR_OF_THROWS) {
      setStatus('Start the round by throwing dices');
      setRoundOver(false);
    if (nbrOfThrowsLeft === 0) {
      setStatus('Select a score from below.')
    }
    }
  }, [nbrOfThrowsLeft]);

  useEffect(() => {
    checkGameEnd();
  }, [selectedScores])

  useEffect(() => {
    if (!bonusWon) checkBonus();
  }, [totalScore])
  
  const checkBonus = () => {
    if (totalScore >= BONUS_SCORE_TRESHOLD) {
      setTotalScore(totalScore + BONUS_SCORE)
      setBonusText("You got the bonus score!")
      bonusWon = true;
    } else {
      setBonusText("Get " + (BONUS_SCORE_TRESHOLD-totalScore) + " points for bonus")
    }
  }
  
  const throwDices = () => {
    if (nbrOfThrowsLeft > 0) {
      for (let i = 0; i < NBR_OF_DICES; i++) {
        if (!selectedDices[i]) {
          let randomNumber = Math.floor(Math.random() * 6 + 1);
          board[i] = 'dice-' + randomNumber;
        }
      }

      setNbrOfThrowsLeft(nbrOfThrowsLeft-1)
    } else if (roundOver) {
      board = [];
      setNbrOfThrowsLeft(NBR_OF_THROWS)
    }
  }

  const getColor = (i, j) => {
    return j[i] ? "black" : "steelblue";
  }
  
  const checkRoundEnd = () => {
    if (nbrOfThrowsLeft <= 0) {
      setStatus('Select your points');
    } else {
      setStatus('Select dices and throw again');
    }
  }

  const checkGameEnd = () => {
    if (selectedScores.every(val => val === true)) {
      setStatus('Game over! All points selected');
      setGameEnded(true);
    }
  }

  const newGame = () => {
    board = [];
    bonusWon = false;

    setSelectedDices(new Array(NBR_OF_DICES).fill(false))
    setSelectedScores(new Array(NBR_OF_SIDES).fill(false))
    setScores(new Array(NBR_OF_SIDES).fill(0))
    setNbrOfThrowsLeft(NBR_OF_THROWS);
    setTotalScore(0);
    setGameEnded(false);
  }

  return (
    <View style={styles.gameboard}>
      <View style={styles.flex}>
        <DiceRow board={board} NBR_OF_DICES={NBR_OF_DICES} selectedDices={selectedDices} setSelectedDices={setSelectedDices} getColor={getColor} gameEnded={gameEnded} roundOver={roundOver} />
      </View>
      <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      {!gameEnded
        ? <Pressable style={styles.button} onPress={() => throwDices()}>
            <Text style={styles.buttonText}>Throw dices</Text>
          </Pressable>
        : <Pressable style={styles.button} onPress={() => newGame()}>
            <Text style={styles.buttonText}>New game</Text>
          </Pressable>
      }
      <Text style={styles.gameinfo}>Total score: {totalScore}</Text>
      <Text style={styles.gameinfo}>{bonusText}</Text>
      <ScoreRow checkGameEnd={checkGameEnd} board={board} selectedScores={selectedScores} scores={scores} NBR_OF_SIDES={NBR_OF_SIDES} NBR_OF_DICES={NBR_OF_DICES} setSelectedScores={setSelectedScores} selectedDices={selectedDices} getColor={getColor} nbrOfThrowsLeft={nbrOfThrowsLeft} setStatus={setStatus} setTotalScore={setTotalScore} totalScore={totalScore} setScores={setScores} setSelectedDices={setSelectedDices} roundOver={roundOver} setRoundOver={setRoundOver} />
    </View>
  )
}

export default Gameboard
