import React, { FC } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { UserInterface } from '../../store/LoginBuilder'
import { myAppSelector, myAppDispatch } from '../../myhooks/redux'
import { useNavigate } from 'react-router-dom'
import { Form } from '../../components/Form'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { fetchUser } from '../../controllers/auth'

export const ChangeProfile: FC = () => {
  const dispath = myAppDispatch()
  const navigate = useNavigate()
  const user = myAppSelector(state => state.auth.user as UserInterface)

  const cangePass = (receive: UserInterface) => {
    console.log(receive)
    dispath(fetchUser(receive))
  }

  const toRegistration = () => {
    navigate('/profile')
  }

  const validation = object().shape({
    phone: string()
      .required('Обязательное поле')
      .matches(/(^[+]*)([0-9]{10,15})/, {
        message: 'от 10 до 15 только цифр',
      }),
  })
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: user,
      validationSchema: validation,
      onSubmit: values => {
        const send: UserInterface = {
          login: user.login,
          first_name: values.first_name,
          second_name: values.second_name,
          display_name: values.display_name,
          email: values.email,
          phone: values.phone,
          id: user.id,
          avatar: user.avatar,
        }
        cangePass(send)
      },
    })

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
        label="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.email) && Boolean(touched.email)}
        error={errors.email}
      />
      <Input
        label="Имя в чате"
        name="display_name"
        value={values.display_name}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.display_name) && Boolean(touched.display_name)}
        error={errors.display_name}
      />
      <Input
        label="Сменить имя"
        name="first_name"
        value={values.first_name}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.first_name) && Boolean(touched.first_name)}
        error={errors.first_name}
      />
      <Input
        label="Сменить фамилию"
        name="second_name"
        value={values.second_name}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.second_name) && Boolean(touched.second_name)}
        error={errors.second_name}
      />
      <Input
        label="Сменить телефон"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        show={Boolean(errors.phone) && Boolean(touched.phone)}
        error={errors.phone}
      />
    </Form>
  )
}
