import { Text, View } from 'react-native';
import styles from './src/style/style';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Gameboard from './src/components/Gameboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Gameboard />
      <Footer/>
    </View>
  );
}
