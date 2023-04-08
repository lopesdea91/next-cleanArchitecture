import { ITodoEntity } from "@/@core/domain/entity/TodoEntity";
import { createSlice } from "@reduxjs/toolkit";

export interface ITodoState {
  list: ITodoEntity[]
  isLoading: boolean
}
const initialState: ITodoState = {
  list: [],
  isLoading: false
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, { payload }: { payload: ITodoEntity[] }) {
      state.list = payload
    }
  }
})

export const actionTodomSlice = todoSlice.actions
