import { AnyAction, Store, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './features/auth.slice'
import { todosSlice } from './features/todos.slice'
import { usersSlice } from './features/users.slice'
import { systemSlice } from './features/system.slice'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [todosSlice.name]: todosSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [systemSlice.name]: systemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type AppStore = ReturnType<typeof store['getState']>;
export type StoreType = Store<unknown, AnyAction>