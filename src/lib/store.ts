import { configureStore } from '@reduxjs/toolkit'
import adminReducer from '../features/admin/adminSlice'
import auth from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    auth: auth,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
