import { StyleSheet, View} from 'react-native'
//import Constants from 'expo-constants';
import Tab from "./Tab";
import theme from '../theme';

export default function AppBar() {
  return (
    <View style={styles.container}>
      <Tab name="Repositories"></Tab>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    paddingTop: 75,
    backgroundColor: theme.colors.appBar,
  },
});