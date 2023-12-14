import Image from 'next/image'
import Link from 'next/link'
import TodoRow from './components/TodoRow';

export default async function Home() {
  const response = await fetch("http://localhost:5000/todos",{ next: { revalidate: 0 } });
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TodoList</h1>
      <Link href="/new">New Todo</Link>
      <table>
        <tbody>
        {data.map((todo: any) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
        </tbody>
      </table>   
    </main>
  )
}
