import { createSlice } from "@reduxjs/toolkit";

export interface ISystemState {
  loadingPage: boolean
  loading: boolean
}
const initialState: ISystemState = {
  loadingPage: false,
  loading: false
}
export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLoadingPage(state, action: { payload: boolean }) {
      state.loading = action.payload
    },
    setLoading(state, action: { payload: boolean }) {
      state.loading = action.payload
    }
  }
})

export const actionSystemSlice = systemSlice.actions