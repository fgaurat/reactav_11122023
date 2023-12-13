import { useDebugValue, useEffect, useState } from "react";
import { Todo } from "../core/Todo";
import { TodoDAO } from "../core/TodoDAO";

export default function useFetchTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  useDebugValue("Hello useDebugValue");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const dao = new TodoDAO();
      const data = await dao.findAll();
      setTodos(data);
      setIsLoading(false);
    })();
  }, []);




  return {todos,setTodos,isLoading}


}
