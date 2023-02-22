import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLogout, fetchSignin, fetchAuth } from '../controllers/auth'

export interface UserInterface {
  login: string
  first_name: string
  second_name: string
  display_name: string
  email: string
  phone: string
  id: number
  avatar: string
}
export interface AuthState {
  auth: boolean
  loading: boolean
  user: UserInterface
}
const initialState: AuthState = {
  auth: false,
  loading: false,
}

export const LoginBuilder = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      fetchAuth.fulfilled,
      (state, action: PayloadAction<UserInterface>) => {
        state.auth = true
        state.user = action.payload
        state.loading = false
      }
    )
    builder.addCase(fetchSignin.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchSignin.fulfilled, state => {
      state.loading = false
      state.auth = true
    })
    builder.addCase(fetchSignin.rejected, state => {
      state.loading = false
      state.auth = false
    })
    builder.addCase(fetchLogout.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchLogout.fulfilled, state => {
      state.loading = false
      state.auth = false
    })
    builder.addCase(fetchLogout.rejected, state => {
      state.loading = false
    })
  },
})
export const authReducer = LoginBuilder.reducer
