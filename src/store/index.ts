import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './user-data.slice'

export const store = configureStore({
  reducer: {
    userdata: userDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch