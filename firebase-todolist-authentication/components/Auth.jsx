import { Alert } from "react-native";
import { child, push, ref, update } from 'firebase/database';
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut } from 'firebase/auth';
import { db, USERS_REF } from '../firebase/Config';
import { async } from "@firebase/util";

export async function register (nickname, email, password) {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const newUser = {
        nickname: nickname,
        email: userCredential.user.email
      };
      const newUserKey = push(child(ref(db), USERS_REF)).key;
      const updates = {};
      updates[USERS_REF + newUserKey] = newUser;
      return update(ref(db), updates);
    })
  }
  catch(error) {
    console.log("Registeration failed. ", error.message);
    Alert.alert("Registeration failed. ", error.message);
  }
}

export async function login (email, password) {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth,email,password);
  }
  catch(error) {
    console.log("Login failed. ", error.message);
    Alert.alert("Login failed. ", error.message);
  }
}

export async function logout() {
  try {
    const auth = getAuth();
    await signOut(auth);
  }
  catch(error) {
    console.log("Logout error. ", error.message);
    Alert.alert("Logout error. ", error.message);
  }
}


const Auth = () => {
  return (
    <View>
      <Text>Auth</Text>
    </View>
  )
}

export default Auth