import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikCotrol from './FormikCotrol'

const LoginForm = () => {
  const initialValues = {
    email: '',
    password:''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password:Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('formdata',values)
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      {
        formik => {
          return <Form>
            <FormikCotrol control='input' label='Email' type='email' name='email' />
            <FormikCotrol control='input' label='Password' type='password' name='password' />
            <button type='submit' disbaled={formik.isValid}>Login</button>
          </Form>
        }
     } 
    </Formik>
  )
}

export default LoginForm
