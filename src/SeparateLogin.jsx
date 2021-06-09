import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios';
import * as Yup from 'yup'

const Login = (props) => {
  const [error, setError] = useState(null);
  const initialValues = {
    email: '',
    password: ''
  }

  
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('form-values', values)

    axios.post("https://obscure-reef-33236.herokuapp.com/api/v1/account/login/", {
      email: values.email,
      password: values.password
    }).then(response => {
      props.history.push('/dashboard')
    }).catch(error => {
      // catch le 400 ra 500 matra tancha
      setError(error.response.data);
    });
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return <Form className="col-sm-3 offset-sm-3 mt-3 mb-auto border border-dark rounded " >
          <div className="p-3">
            <h2 className="text-center">Login</h2>
            <div className="form-group col-md-6 mb-3 ">
              {/* <label className="" htmlFor='email'>Email</label> */}
              <Field id='email' name='email' placeholder='Email' />
              <ErrorMessage className="error" name='email' />
            </div>

            <div className="form-group col-md-6 mb-3">
              {/* <label className="" htmlFor='password'>Password</label> */}
              <Field id='password' type='password' name='password' placeholder='password' />
              <ErrorMessage className="error" name='password' />
            </div>

            {error && <p className="error">{error.detail}</p>}
            <button className="btn btn-secondary" type="submit">Login</button>
          </div>

        </Form>
      }}
    </Formik>
  )
}

export default Login