import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainFetch } from './mainFetch'

export type SigninData = {
  login: string
  password: string
}

const Headers = {
  'content-type': 'application/json',
  mode: 'cors',
}

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
