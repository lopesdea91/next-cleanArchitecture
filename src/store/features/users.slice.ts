import { UserEntity } from "@/@core/domain/entity/UserEntity";
import { createSlice } from "@reduxjs/toolkit";

export interface IUsersState {
  list: UserEntity[]
  defailt: UserEntity | null
}
const initialState: IUsersState = {
  list: [],
  defailt: null
}
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setList(state, action: { payload: UserEntity[] }) {
      state.list = action.payload
    },
    setDetail(state, action: { payload: UserEntity | null }) {
      state.defailt = action.payload
    },
  }
})
export const actionUsersSlice = usersSlice.actions
