import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainFetch } from './mainFetch'
import { UserInterface } from '../store/LoginBuilder'

//#region
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
export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (data: UserInterface, thunkApi) => {
    try {
      const res: UserInterface = await mainFetch('/user/profile', {
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
//#endregion

interface receive {
  ratingFieldName: string
  cursor: number
  limit: number
}
interface Leader {
  data: {
    ['bubble']: number
    user: string
  }
}
export const takeLeader = createAsyncThunk<Leader[], receive>(
  'leaderboard/all',
  async (data: receive, thunkApi) => {
    try {
      console.log(data)
      const res = await mainFetch<Leader[]>('/leaderboard/all', {
        method: 'POST',
        headers: Headers,
        credentials: 'include',
        body: JSON.stringify(data),
      })
      console.log(res)
      return res
    } catch (e) {
      console.log(e)
    }
  }
)

export const newLeader = createAsyncThunk<
  Leader[],
  number,
  { state: RootState }
>('leaderboard/score', async (score, thunkApi) => {
  const state = thunkApi.getState()
  const login = state.auth.user.login
  const message = {
    data: { ['bubble']: score, user: login },
    teamName: 'resistace',
    ratingFieldName: 'bubble',
  }
  console.log(message)
  try {
    const send = await mainFetch<Leader[]>('/leaderboard', {
      method: 'POST',
      headers: Headers,
      credentials: 'include',
      body: JSON.stringify(message),
    })
    console.log(send)
  } catch (e) {
    console.log(e)
  }
})
