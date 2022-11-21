import React from 'react'
import { Formik } from 'formik'

import SignInForm from './SignInForm'

const initialValues = {
  userName: '',
  password: '',
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </>

  )
}

export default SignIn