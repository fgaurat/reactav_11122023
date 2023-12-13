// import HOCCompletedTodoList from "../../components/HOCCompletedTodoList/HOCCompletedTodoList";
import { Suspense, lazy } from "react";
import { Todo } from "../../core/Todo";
import { TodoDAO } from "../../core/TodoDAO";
import useFetchTodos from "../../hooks/useFetchTodos";
import Spinner from "../../components/Spinner/Spinner";

// import TodoForm from "../../components/TodoForm/TodoForm";
const TodoForm = lazy(() => import("../../components/TodoForm/TodoForm"));

// import TodoList from "../../components/TodoList/TodoList";
const TodoList = lazy(() => import("../../components/TodoList/TodoList"));

function Home() {
  const { todos, setTodos, isLoading } = useFetchTodos();

  // const CompletedTodoList = HOCCompletedTodoList(TodoList);

  const doDelete = async (todo: Todo) => {
    const dao = new TodoDAO();
    await dao.delete(todo);
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
  };

  const submitTodo = async (todo: Todo) => {
    const dao = new TodoDAO();
    const newTodo = await dao.save(todo);
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Suspense fallback={<Spinner/>} >
        <TodoForm submitTodo={submitTodo} />
      </Suspense>
      
      <hr />
      
      <Suspense fallback={<Spinner/>} >
        <TodoList todos={todos} isLoading={isLoading} doDelete={doDelete} />
      </Suspense>

      {/* <CompletedTodoList
        todos={todos}
        isLoading={isLoading}
        doDelete={doDelete}
      /> */}
    </div>
  );
}

export default Home;
