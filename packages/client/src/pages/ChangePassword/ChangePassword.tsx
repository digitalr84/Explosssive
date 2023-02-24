import React, { FC } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { fetchPassword } from '../../controllers/auth'
import { ChangePasswordType } from '../../controllers/auth'
import { myAppDispatch } from '../../myhooks/redux'
import { Form } from '../../components/Form'
import { useFormik } from 'formik'
import { object, string, ref } from 'yup'
import { useNavigate } from 'react-router-dom'

export const ChangePassword: FC = () => {
  const dispath = myAppDispatch()
  const navigate = useNavigate()
  const cangePass = (receive: ChangePasswordType) => {
    console.log(receive)
    dispath(fetchPassword(receive))
  }
  const validation = object().shape({
    oldpassword: string()
      .required('Обязательное поле')
      .matches(/^(?=.*\d)(?=.*[A-Z]).{8,40}$/, {
        message: 'от 8 до 40 символов минимум одна заглавная и одна цифра',
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

  const schema = {
    oldpassword: '',
    password: '',
    repeatPassword: '',
  }

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: schema,
      validationSchema: validation,
      onSubmit: values => {
        const send: ChangePasswordType = {
          oldPassword: values.oldpassword,
          newPassword: values.password,
        }
        cangePass(send)
      },
    })
  const toRegistration = () => {
    navigate('/profile')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      buttons={
        <div>
          <Button type="submit" className="button_raspisnay">
            Сменить
          </Button>
          <Button
            type="button"
            className="button_raspisnay"
            onClick={toRegistration}>
            Передумал
          </Button>
        </div>
      }>
      <Input
        name="oldpassword"
        value={values.oldpassword}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.oldpassword) && Boolean(touched.oldpassword)}
        error={errors.oldpassword}
      />
      <Input
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.password) && Boolean(touched.password)}
        error={errors.password}
      />
      <Input
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.repeatPassword) && Boolean(touched.repeatPassword)}
        error={errors.repeatPassword}
      />
    </Form>
  )
}
