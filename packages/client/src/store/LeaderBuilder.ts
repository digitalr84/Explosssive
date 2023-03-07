import { createSlice } from '@reduxjs/toolkit'
import { takeLeader } from '../controllers/auth'

interface LeaderL {
  leader: Leader[]
}
const initialState: LeaderL = {
  leader: [],
}

export const leaderBuilder = createSlice({
  name: 'leader',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(takeLeader.fulfilled, (state, action) => {
      state.leader = action.payload
    })
  },
})
export const leaderReducer = leaderBuilder.reducer
