import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface College {
  id: string
  name: string
  location: string
  openingRank: number
  closingRank: number
  totalSeats: number
  collegeCode?: string
}


interface AdminState {
  isLoggedIn: boolean
  colleges: College[]
}

const initialState: AdminState = {
  isLoggedIn: false,
  colleges: [],
}

// ✅ Thunks
export const fetchColleges = createAsyncThunk<College[]>(
  'admin/fetchColleges',
  async () => {
    const response = await axios.get('/api/admin/colleges')
    return response.data
  }
)

export const addColleges= createAsyncThunk<College, College>(
  'admin/addCollege',
  async (collegeData) => {
    const response = await axios.post('/api/admin/college', collegeData)
    return response.data
  }
)

export const deleteCollege = createAsyncThunk<string, string>(
  'admin/deleteCollege',
  async (collegeId) => {
    await axios.delete(`/api/admin/colleges/${collegeId}`)
    return collegeId
  }
)

// ✅ Slice
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
    addColleges: (state, action: PayloadAction<College>) => {
      state.colleges.push(action.payload)
    },
    removeCollege: (state, action: PayloadAction<string>) => {
      state.colleges = state.colleges.filter(
        (college) => college.id !== action.payload
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColleges.fulfilled, (state, action) => {
        state.colleges = action.payload
      })
          .addCase(addColleges.fulfilled, (state, action) => {
        state.colleges.push(action.payload)
      })
      .addCase(deleteCollege.fulfilled, (state, action) => {
        state.colleges = state.colleges.filter(
          (college) => college.id !== action.payload
        )
      })
  },
})

export const { login, logout, addColleges, removeCollege } = adminSlice.actions
export default adminSlice.reducer
