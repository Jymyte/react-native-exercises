import {StyleSheet, View} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

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
      <Routes>
        <Route path="/" element={<RepositoryList />} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sign-in" element={<SignIn/>} exact/>
      </Routes>
    </View>
  );
};

export default Main;
