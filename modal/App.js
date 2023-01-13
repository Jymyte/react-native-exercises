import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

export default function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.container}>
      <Modal visible={showModal}>
        <View style={styles.modal}>
          <Text>this is modal...</Text>
          <Pressable onPress={() => setShowModal(false)}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable onPress={() => setShowModal(true)}>
        <Text>Show Modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    marginTop: 100,
    padding: 20,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    ShadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    ShadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  close: { marginTop: 50, color: "#333", fontWeight: "bold" },
});
