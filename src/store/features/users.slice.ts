import { User } from "@/@core/domain/entity/User";
import { createSlice } from "@reduxjs/toolkit";

export interface IUsersState {
  list: User[]
  defailt: User | null
}
const initialState: IUsersState = {
  list: [],
  defailt: null
}
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setList(state, action: { payload: User[] }) {
      state.list = action.payload
    },
    setDetail(state, action: { payload: User | null }) {
      state.defailt = action.payload
    },
  }
})
export const actionUsersSlice = usersSlice.actions
