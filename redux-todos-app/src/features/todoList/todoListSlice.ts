import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../core/Todo";
import { TodoDAO } from "../../core/TodoDAO";

export interface TodoListState {
  todos: Todo[];
}

export const fetchTodoList = createAsyncThunk(
  "todos/fetchTodoList",
  async () => {
    const dao = new TodoDAO();
    const todos = await dao.findAll()
    return todos
  }
);

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
        // Add user to the state array
        state.todos = action.payload
      })    
  }
});

// Action creators are generated for each case reducer function
// export const {  } = todoListSlice.actions

export default todoListSlice.reducer;
