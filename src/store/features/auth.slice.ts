import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  user: {
    id: number
    name: string
    email: string
  }
}
const initialState: IAuthState = {
  user: {
    id: 0,
    name: '',
    email: ''
  }
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName(state, { payload }) {
      state.user.name = payload
    }
  }
})

export const actionAuthSlice = authSlice.actions