import { createAsyncThunk, createSlice, isFulfilled, isPending } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../core/Todo";
import { TodoDAO } from "../../core/TodoDAO";

export interface TodoListState {
  todos: Todo[]
  isLoading:boolean
}

export const fetchTodoList = createAsyncThunk(
  "todos/fetchTodoList",
  async () => {
    const dao = new TodoDAO();
    const todos = await dao.findAll();
    return todos;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todo: Todo) => {
    const dao = new TodoDAO();
    await dao.delete(todo);
    return todo;
  }
);
export const saveTodo = createAsyncThunk(
  "todos/saveTodo",
  async (todo: Todo) => {
    const dao = new TodoDAO();
    const savedTodo = await dao.save(todo);
    return savedTodo;
  }
);

const initialState: TodoListState = {
  todos: [],
  isLoading:false
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      // Add user to the state array
      state.todos = action.payload
    }).addCase(deleteTodo.fulfilled, (state, action) => {
        const todo = action.payload
        state.todos = state.todos.filter(t => t.id !== todo.id)
    }).addCase(saveTodo.fulfilled, (state, action) => {
        const todo = action.payload
        state.todos.push(todo)
    })
    .addMatcher(isPending(fetchTodoList,deleteTodo,saveTodo),(state) => {
      state.isLoading = true
    })
    .addMatcher(isFulfilled(fetchTodoList,deleteTodo,saveTodo),(state) => {
      state.isLoading = false
    })
  },
});

// Action creators are generated for each case reducer function
// export const {  } = todoListSlice.actions

export default todoListSlice.reducer;
