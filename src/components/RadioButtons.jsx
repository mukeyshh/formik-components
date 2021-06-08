import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'

const RadioButtons = (props) => {
  const{label, name, options, ...rest}=props
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest} >
        {
          ({ field }) => {
            console.log('Field', field)
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <input type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                      <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment> 
              )
            })
          }}
      </Field>
        <ErrorMessage component={TextError} name={name} />
    </div>
  )
}
 
export default RadioButtons