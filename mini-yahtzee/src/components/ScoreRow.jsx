import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../style/style";
import style from "../style/style";

function ScoreRow({
  selectedScores,
  scores,
  NBR_OF_SIDES,
  getColor,
  countScore,
}) {
  const scoreRow = [];
  for (let i = 0; i < NBR_OF_SIDES; i++) {
    scoreRow.push(
      <Text style={styles.scoreText} key={"score" + i}>
        {scores[i]}
      </Text>
    );
  }

  const selectScoreRow = [];
  for (let i = 0; i < NBR_OF_SIDES; i++) {
    selectScoreRow.push(
      <Pressable key={"row" + i} onPress={() => countScore(i + 1)}>
        <MaterialCommunityIcons
          name={"numeric-" + (i + 1) + "-circle"}
          key={"row" + i}
          size={40}
          color={getColor(i, selectedScores)}
        />
      </Pressable>
    );
  }

  return (
    <View>
      <View style={styles.scoreRow}>{scoreRow}</View>
      <View style={styles.selectScoreRow}>{selectScoreRow}</View>
    </View>
  );
}

export default ScoreRow;
