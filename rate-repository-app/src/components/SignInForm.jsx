import { Pressable, View } from 'react-native'
import React from 'react'

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="userName" placeholder="Username" />
      <FormikTextInput name="password" placeholder="password" secureTextEntry={true}/>
      <Pressable onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm