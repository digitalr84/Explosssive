import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './LoginBuilder'

const rootReducer = combineReducers({
  auth: authReducer,
})

export const setupStore = () => {
  console.log(4444)
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
