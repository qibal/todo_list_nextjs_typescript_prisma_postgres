
import TodoForm from "@/components/TodoForm"
import { getTodos } from "./Actions/Todo"
import { connection } from 'next/server'

export default async function TodoList() {
  await connection()
  const todos = await getTodos()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <TodoForm params={todos} />
      </div>
    </div>
  )
}