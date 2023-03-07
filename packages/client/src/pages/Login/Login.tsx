import React, { FC } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { fetchSignin } from '../../controllers/auth'
import { SigninData } from '../../controllers/auth'
import { myAppDispatch } from '../../myhooks/redux'
import { Form } from '../../components/Form'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { useNavigate } from 'react-router-dom'

export const Login: FC = () => {
  const dispath = myAppDispatch()
  const navigate = useNavigate()
  const signin = (receive: SigninData) => {
    dispath(fetchSignin(receive))
  }
  const validation = object().shape({
    login: string()
      .required('Обязательное поле')
      .matches(/^([a-zA-Z]).{3,20}$/, {
        message: 'от 3 до 20 символов только латинские',
      }),
    password: string()
      .required('Обязательное поле')
      .matches(/^([a-zA-Z]).{8,30}$/, {
        message: 'от 8 до 30 символов только латинские',
      }),
  })

  const schema = {
    login: '',
    password: '',
  }

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: schema,
      validationSchema: validation,
      onSubmit: values => {
        const send: SigninData = {
          login: values.login,
          password: values.password,
        }
        signin(send)
      },
    })
  const toRegistration = () => {
    navigate('/registration')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      buttons={
        <div>
          <Button type="submit" className="button_raspisnay">
            Войти
          </Button>
          <Button
            type="button"
            className="button_raspisnay"
            onClick={toRegistration}>
            Зарегистрироваться
          </Button>
        </div>
      }>
      <Input
        label="Логин"
        name="login"
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.login) && Boolean(touched.login)}
        error={errors.login}
      />
      <Input
        label="Пароль"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.password) && Boolean(touched.password)}
        error={errors.password}
      />
    </Form>
  )
}
