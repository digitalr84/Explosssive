import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainFetch } from './mainFetch'
import { UserInterface } from '../store/LoginBuilder'

export type SigninData = {
  login: string
  password: string
}
export type SignupData = {
  login: string
  email: string
  first_name: string
  second_name: string
  password: string
  phone: string
}
export type ChangePasswordType = {
  oldPassword: string
  newPassword: string
}

const Headers = {
  'content-type': 'application/json',
  mode: 'cors',
}
export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkApi) => {
    try {
      return await mainFetch<UserInterface>('/auth/user', {})
    } catch (e) {
      console.log(e)
    }
  }
)
export const fetchSignin = createAsyncThunk(
  'auth/fetchSignin',
  async (data: SigninData, thunkApi) => {
    try {
      const res = await mainFetch('/auth/signin', {
        method: 'POST',
        headers: Headers,
        body: JSON.stringify(data),
      })
      return res
    } catch (e) {
      console.log(e)
    }
  }
)

export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (_, thunkApi) => {
    try {
      const res = await fetchApi('/auth/logout', {
        method: 'POST',
        headers: Headers,
      })
      return res
    } catch (e) {
      console.log(e)
    }
  }
)
export const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async (data: SignupData, thunkApi) => {
    try {
      const res = await mainFetch('/auth/signup', {
        method: 'POST',
        headers: Headers,
        body: JSON.stringify(data),
      })
      return res
    } catch (error) {
      console.log(e)
    }
  }
)
export const fetchAvatar = createAsyncThunk(
  'auth/fetchChangeAvatar',
  async (data: File, thunkApi) => {
    try {
      const avatar = new FormData()
      avatar.append('avatar', data)
      const res = await mainFetch('/user/profile/avatar', {
        method: 'PUT',
        body: avatar,
      })
      return res
    } catch (e) {
      console.log(e)
    }
  }
)
export const fetchPassword = createAsyncThunk(
  'auth/fetchPassword',
  async (data: ChangePasswordType, thunkApi) => {
    try {
      const res = await mainFetch('/user/password', {
        method: 'PUT',
        headers: Headers,
        body: JSON.stringify(data),
      })
      return res
    } catch (e) {
      console.log(e)
    }
  }
)
