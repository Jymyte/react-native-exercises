import { StyleSheet, View, ScrollView} from 'react-native'
import Constants from 'expo-constants';
import Tab from "./Tab";
import theme from '../theme';

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.horizontalScroll}>
        <Tab name="Repositories" destination="/" />
        <Tab name="Sign in" destination="/sign-in" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.appBar,
  },
  horizontalScroll: {
    flexDirection: "row",
  }
});