import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface AuthState {
  user: null | any
  loading: boolean
  error: null | string
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

// userSlice.ts


export const registerUser = createAsyncThunk(
  'user/register',
  async ({ name, email, password, rank }: { name: string; email: string; password: string; rank: string }) => {
    const response = await axios.post('/api/register', { name, email, password, rank })
    return response.data
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post('/api/login', { email, password })
    console.log(response.data,"login data")
    return response.data
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default authSlice.reducer
