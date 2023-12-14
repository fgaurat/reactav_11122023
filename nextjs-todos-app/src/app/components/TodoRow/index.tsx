import { Todo } from "@/app/core/Todo";
import React from "react";

interface TodoRowProps {
  todo: Todo;
}
function TodoRow({ todo }: TodoRowProps) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed?"Yes":"No"}</td>
    </tr>
  );
}

export default TodoRow;
