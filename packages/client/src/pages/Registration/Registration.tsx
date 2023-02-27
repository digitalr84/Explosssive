import React from 'react'
import './registration.css'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import { Form } from '../../components/Form/Form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { myAppDispatch } from '../../myhooks/redux'
import { fetchSignup } from '../../controllers/auth'
import { SignupData } from '../../controllers/auth'

const schema = {
  email: '',
  login: '',
  first_name: '',
  second_name: '',
  phone: '',
  password: '',
  repeatPassword: '',
}

export const Registration: FC = () => {
  const dispath = myAppDispatch()
  const signup = (receive: SignupData) => {
    dispath(fetchSignup(receive))
  }

  const validation = object().shape({
    login: string()
      .required('Обязательное поле')
      .matches(/^([a-zA-Z]).{3,20}$/, {
        message: 'от 3 до 20 символов только латинские',
      }),
    phone: string()
      .required('Обязательное поле')
      .matches(/(^[+]*)([0-9]{10,15})/, {
        message: 'от 10 до 15 только цифр',
      }),
    password: string()
      .required('Обязательное поле')
      .matches(/^(?=.*\d)(?=.*[A-Z]).{8,40}$/, {
        message: 'от 8 до 40 символов минимум одна заглавная и одна цифра',
      }),
    repeatPassword: string()
      .required('Обязательное поле')
      .oneOf([ref('password'), null], 'Не совпадают'),
  })
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: schema,
      validationSchema: validation,
      onSubmit: values => {
        const send: SignupData = {
          email: values.email,
          login: values.login,
          first_name: values.first_name,
          second_name: values.second_name,
          phone: values.phone,
          password: values.password,
        }
        signup(send)
      },
    })
  return (
    <Form
      onSubmit={handleSubmit}
      buttons={
        <div>
          <Button className="button_raspisnay" type="submit" disabled={false}>
            Регистрация
          </Button>
        </div>
      }>
      <Input
        label="Логин"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.login) && Boolean(touched.login)}
        error={errors.login}
        name="login"
        value={values.login}
      />
      <Input
        label="Ваше имя"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.first_name) && Boolean(touched.first_name)}
        error={errors.first_name}
        name="first_name"
        value={values.first_name}
      />
      <Input
        label="Ваша фамилия"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.second_name) && Boolean(touched.second_name)}
        error={errors.second_name}
        name="second_name"
        value={values.second_name}
      />
      <Input
        label="А телефончик"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.phone) && Boolean(touched.phone)}
        error={errors.phone}
        name="phone"
        value={values.phone}
      />
      <Input
        label="Почта"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.email) && Boolean(touched.email)}
        error={errors.email}
        name="email"
        value={values.email}
      />
      <Input
        label="Пароль"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.password) && Boolean(touched.password)}
        error={errors.password}
        name="password"
        value={values.password}
      />
      <Input
        label="Повторите пароль"
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.repeatPassword) && Boolean(touched.repeatPassword)}
        error={errors.repeatPassword}
        name="repeatPassword"
        value={values.repeatPassword}
      />
    </Form>
  )
}
