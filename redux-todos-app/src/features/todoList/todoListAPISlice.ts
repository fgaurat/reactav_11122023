import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '../../core/Todo'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_TODOS_URL }),
  tagTypes:['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[],void>({
      query: () => "/", // http://localhost:3000/todos
      providesTags: () =>[{ type: 'Todo', id: 1 }],
    }),
    deleteTodo:builder.mutation({
        query:(todo:Todo)=>({
                url:`/${todo.id}`,
                method:"DELETE"
        }),
        invalidatesTags:[{ type: 'Todo', id: 1 }]
    })
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery,useDeleteTodoMutation } = todosApi