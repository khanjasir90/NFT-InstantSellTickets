import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice"
import notificationReducer from './slice/notificationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    notificationSlice: notificationReducer.reducer,
  },
})