import React from 'react'
import './registration.css'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Form } from '../../components/Form/Form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

const schema = {
  first_name: '',
}

export const Registration: FC = () => {
  const signup = () => {
    console.log(22222)
  }

  const validation = object().shape({
    first_name: string()
      .required('Required')
      .matches(/(^[A-ZА-Я])/, {
        message: '11111111111111111',
      }),
  })
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: schema,
      validationSchema: validation,
      onSubmit: values => {
        signup()
      },
    })
  return (
    <Form
      onSubmit={handleSubmit}
      buttons={
        <div>
          <Button className="button_raspisnay" type="submit" disabled={false}>
            11111
          </Button>
        </div>
      }>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.first_name) && Boolean(touched.first_name)}
        error={errors.first_name}
        name="first_name"
        value="wwwwww"
      />
    </Form>
  )
}
