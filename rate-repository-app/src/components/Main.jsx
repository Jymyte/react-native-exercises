import RepositoryList from './RepositoryList';
import {StyleSheet, View} from 'react-native';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.flexContainer}>
      <AppBar></AppBar>
      <RepositoryList />
    </View>
  );
};

export default Main;
