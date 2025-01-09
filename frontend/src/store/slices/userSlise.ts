import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  isAuthenticated: boolean
}

const initialState: UserState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    auth: state => {
      state.isAuthenticated = true
      localStorage.setItem('isAuthenticated', 'true')
    },
    exit: state => {
      state.isAuthenticated = false
      localStorage.setItem('isAuthenticated', 'false')
    },
  },
})

export const { auth, exit } = userSlice.actions
export default userSlice.reducer
