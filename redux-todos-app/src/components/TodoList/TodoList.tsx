import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../../core/Todo";
import TodoRow from "./TodoRow";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { deleteTodo, fetchTodoList } from "../../features/todoList/todoListSlice";


export default function TodoList() {


    const todos = useSelector((state:RootState)=>state.todoList.todos)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
      dispatch(fetchTodoList())
    },[])
    
    const doDelete = (todo:Todo)=>{
      dispatch(deleteTodo(todo))
    }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            TodoList
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {/* {isLoading && "Loading"} */}
            {/* {!isLoading && */}
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    userID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Completed
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {todos.map((todo) => (
                  <TodoRow key={todo.id} todo={todo} doDelete={doDelete}/>
                ))}
              </tbody>
            </table>
            {/* } */}
          </div>
        </div>
      </div>
    </div>
  );
}
