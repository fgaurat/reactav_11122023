import { redirect } from 'next/navigation';
import React from 'react'

async function createTodo(data:FormData){
  'use server'
  const title = data.get("title")?.valueOf();
  const url = "http://localhost:5000/todos";

  await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  redirect('/')
}



export default function TodoForm() {
  return (
    <>
      <h2>TodoForm</h2>
      <form action={createTodo}>
        <input type="text" name="title" placeholder="todo title" />
        <br />
        <button
          type="submit"
          className="border border-indigo-500 p-2 rounded mt-2"
        >
          Submit
        </button>
      </form>
    </>
  )
}
