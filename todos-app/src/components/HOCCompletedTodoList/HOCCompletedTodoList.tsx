import React from 'react'
import { ITodoListProps } from '../TodoList/TodoList'
import { Todo } from '../../core/Todo'

function HOCCompletedTodoList(TodoList:any) {

  return ({todos,isLoading,doDelete}:ITodoListProps)=>{
    const completedTodos = todos.filter((t:Todo) => t.completed)
    return <TodoList todos={completedTodos} isLoading={isLoading} doDelete={doDelete}/>
  }
}

export default HOCCompletedTodoList