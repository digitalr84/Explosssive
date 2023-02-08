import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchLogout, fetchSignin } from '../controllers/auth'

export interface AuthState {
  auth: boolean
  loading: boolean
}
const initialState: AuthState = {
  auth: false,
  loading: false,
}

export const LoginBuilder = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
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
