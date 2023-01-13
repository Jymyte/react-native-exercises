import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, UseEffect } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },3000)
  }, [])
  

  return (
    <View style={styles.container}>
      {isLoading &&
        <ActivityIndicator size="large" animating={true}></ActivityIndicator>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
