import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../features/todoList/todoListSlice'
import { todosApi } from '../features/todoList/todoListAPISlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
    [todosApi.reducerPath]: todosApi.reducer // todosApi: todosApi.reducer
    
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(todosApi.middleware),  
})
setupListeners(store.dispatch)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch