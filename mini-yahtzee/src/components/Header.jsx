import React from "react";
import { View, Text } from "react-native";
import styles from "../style/style";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mini yahtzee</Text>
    </View>
  );
}

export default Header;
