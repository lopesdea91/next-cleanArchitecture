import { ITodo } from "@/@core/domain/entity/Todo";
import { createSlice } from "@reduxjs/toolkit";

export interface ITodoState {
  list: ITodo[]
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
    setTodo(state, { payload }: { payload: ITodo[] }) {
      state.list = payload
    }
  }
})

export const actionTodomSlice = todoSlice.actions
