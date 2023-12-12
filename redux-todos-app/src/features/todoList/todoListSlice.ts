import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../core/Todo";

export interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: [
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
  ],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {  } = todoListSlice.actions

export default todoListSlice.reducer;
