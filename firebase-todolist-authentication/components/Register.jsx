import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, Pressable} from 'react-native';
import { register } from './Auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import styles from '../style/style';

const Register = () => {

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearState = () => {
    setNickname('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register