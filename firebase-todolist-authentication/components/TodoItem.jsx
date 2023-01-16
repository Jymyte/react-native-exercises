import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Entypo from '@expo/vector-icons/Entypo'
import { ref, remove, update, child } from 'firebase/database';
import { db, TODOS_REF } from '../firebase/Config';

const TodoItem = ({todoItem: {todoItem: title, done}, id}) => {
 const [doneState, setDoneState] = useState(done);

 const onCheck = () => {
  setDoneState(!doneState);
  const updateTodoItem = {
    todoItem: title,
    done: !doneState
  }
  const updates = {};
  updates[TODOS_REF + id] = updateTodoItem;
  return update(ref(db), updates);
 }

  const onRemove = () => {
    return remove(child(
      ref(db), TODOS_REF + id
    ));
  }

  return (
    <View style={styles.todoItem}>
      <Pressable onPress={onCheck}>
        {doneState
          ? <MaterialIcons name={'check-box'} size={32} />
          : <MaterialIcons name={'check-box-outline-blank'} size={32} />
        }
      </Pressable>
      <Text onPress={onCheck}
        style={
          [styles.todoText,
          {backgroundColor: doneState ? "lightgreen" : "lightblue"}]}>{title}
      </Text>
      <Pressable>
        <Entypo name={'trash'} size={32} onPress={onRemove} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  todoItem: { flexDirection:  'row', marginVertical: 10, aligniItems: 'center',
  },
  todoText: { bordercolor: '#afafaf', paddingHorizontal: 8, paddingVertical: 5, borderWidth: 1, borderRadius: 5, marginRight: 16, marginLeft: 10, minWidth: '60%'
  }  
});

export default TodoItem