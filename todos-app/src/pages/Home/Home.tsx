import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

function Home() {

  // const CompletedTodoList = HOCCompletedTodoList(TodoList)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <TodoForm/>
      <hr />
      <TodoList/>
      {/* <CompletedTodoList todo={todo}/> */}
    </div>
  );
}

export default Home;
