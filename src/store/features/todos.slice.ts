import { ITodoEntity } from "@/@core/domain/entity/TodoEntity";
import { TodoEntity } from "@/@core/domain/entity/TodoEntity";
import { createSlice } from "@reduxjs/toolkit";

export interface ITodoState {
  list: TodoEntity[]
  todo: ITodoEntity
}
const initialState: ITodoState = {
  list: [],
  todo: {
    id: 0,
    title: ``,
    completed: false
  }
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setList(state, { payload }: { payload: TodoEntity[] }) {
      state.list = payload
    },
    setTodo(state, { payload }: { payload: Partial<ITodoEntity> }) {
      state.todo = {
        ...state.todo,
        ...payload
      }
    },
  }
})

export const actionTodomSlice = todosSlice.actions
