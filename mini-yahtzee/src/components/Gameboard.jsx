import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../style/style";
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
  const [status, setStatus] = useState("");
  const [selectedDices, setSelectedDices] = useState(
    new Array(NBR_OF_DICES).fill(false)
  );
  const [scores, setScores] = useState(new Array(NBR_OF_SIDES).fill(0));
  const [selectedScores, setSelectedScores] = useState(
    new Array(NBR_OF_SIDES).fill(false)
  );
  const [totalScore, setTotalScore] = useState(0);
  const [roundOver, setRoundOver] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [bonusText, setBonusText] = useState("You are " + BONUS_SCORE_TRESHOLD + " points away from bonus");

  useEffect(() => {
    checkRoundEnd();
    if (nbrOfThrowsLeft === NBR_OF_THROWS) {
      setStatus("Start the round by throwing dices");
      setRoundOver(false);
      if (nbrOfThrowsLeft === 0) {
        setStatus("Select a score from below.");
      }
    }
  }, [nbrOfThrowsLeft]);

  useEffect(() => {
    checkGameEnd();
  }, [selectedScores]);

  useEffect(() => {
    if (!bonusWon) checkBonus();
  }, [totalScore]);

  //useEffect related functions:

  const checkRoundEnd = () => {
    if (nbrOfThrowsLeft <= 0) {
      setStatus("Select your points");
    } else {
      setStatus("Select dices and throw again");
    }
  };

  const checkGameEnd = () => {
    if (selectedScores.every((val) => val === true)) {
      setStatus("Game over! All points selected");
      setGameEnded(true);
    }
  };

  const checkBonus = () => {
    if (totalScore >= BONUS_SCORE_TRESHOLD) {
      setTotalScore(totalScore + BONUS_SCORE);
      setBonusText("You got the bonus score!");
      bonusWon = true;
    } else {
      setBonusText(
        "You are " + (BONUS_SCORE_TRESHOLD - totalScore) + " points away from bonus"
      );
    }
  };

  //Game management related functions:

  const throwDices = () => {
    if (nbrOfThrowsLeft > 0) {
      for (let i = 0; i < NBR_OF_DICES; i++) {
        if (!selectedDices[i]) {
          let randomNumber = Math.floor(Math.random() * 6 + 1);
          board[i] = "dice-" + randomNumber;
        }
      }

      setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
    } else if (roundOver) {
      board = [];
      setNbrOfThrowsLeft(NBR_OF_THROWS);
    }
  };

  const newGame = () => {
    board = [];
    bonusWon = false;

    setSelectedDices(new Array(NBR_OF_DICES).fill(false));
    setSelectedScores(new Array(NBR_OF_SIDES).fill(false));
    setScores(new Array(NBR_OF_SIDES).fill(0));
    setNbrOfThrowsLeft(NBR_OF_THROWS);
    setTotalScore(0);
    setGameEnded(false);
  };

  //UI

  const getColor = (i, j) => {
    return j[i] ? "black" : "steelblue";
  };

  //Score row related functions:

  const selectScore = (number, score) => {
    console.log(score);
    let selected = [...selectedScores];
    selected[number - 1] = true;
    setSelectedScores(selected);

    let scoresTemp = [...scores];
    scoresTemp[number - 1] = score;
    setScores(scoresTemp);
  };

  const countScore = (diceNumber) => {
    // If round is over skip over this function. Round is over once player has chosen a score succesfully.
    if (!roundOver) {
      if (nbrOfThrowsLeft > 0) {
        setStatus("Throw 3 times before setting points");
      } else if (selectedScores[diceNumber - 1]) {
        setStatus("You have already selected that score");
      } else {
        setRoundOver(true);

        console.log("roundOver", roundOver);

        let currentDiceScores = board.map((i) => {
          return parseInt(i.match(/\d+/)[0]);
        });

        const sum = currentDiceScores.reduce((previousSum, i) => {
          if (i === diceNumber) {
            console.log(i, "reducessa");
            return previousSum + i;
          } else return previousSum;
        }, 0);

        console.log(sum, "tää on se summa");

        //initializing next round
        setTotalScore(totalScore + sum);
        setStatus("Throw to start the next round");
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        selectScore(diceNumber, sum);
        checkGameEnd();
      }
    } else {
      console.log("Skipped");
    }
  };

  //Dice row related functions:

  const selectDice = (number) => {
    console.log("game ended and round over: ", gameEnded, roundOver);
    if (!gameEnded && !roundOver) {
      let dices = [...selectedDices];
      dices[number] = selectedDices[number] ? false : true;
      setSelectedDices(dices);
    }
  };

  return (
    <View style={styles.gameboard}>
      <View style={styles.flex}>
        <DiceRow
          board={board}
          NBR_OF_DICES={NBR_OF_DICES}
          selectedDices={selectedDices}
          getColor={getColor}
          selectDice={selectDice}
        />
      </View>
      <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      {!gameEnded ? (
        <Pressable style={styles.button} onPress={() => throwDices()}>
          <Text style={styles.buttonText}>Throw dices</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.button} onPress={() => newGame()}>
          <Text style={styles.buttonText}>New game</Text>
        </Pressable>
      )}
      <Text style={styles.gameinfo}>Total score: {totalScore}</Text>
      <Text>{bonusText}</Text>
      <ScoreRow
        selectedScores={selectedScores}
        scores={scores}
        NBR_OF_SIDES={NBR_OF_SIDES}
        getColor={getColor}
        countScore={countScore}
      />
    </View>
  );
}

export default Gameboard;
