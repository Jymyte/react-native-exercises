import { StyleSheet, View} from 'react-native'
import Constants from 'expo-constants';
import Tab from "./Tab";

console.log("tässäpä constantit: ", Constants.statusBarHeight, " ja tyyppi: ", typeof Constants.statusBarHeight);

export default function AppBar() {
  return (
    <View style={styles.container}>
      <Tab name="Repositories"></Tab>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#23B8BF",
  },
});