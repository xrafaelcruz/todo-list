import api, { useApi } from 'api'
import { Todo } from 'api/todo/types'

export type CreateTodo = (
  todo: Todo,
  callback?: (createdTodo: Todo) => void
) => Promise<void>

export const createTodo: CreateTodo = async (todo, callback) => {
  try {
    const url = `${process.env.API_URL}/todos`

    const createdTodo = await api<Todo>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })

    callback && callback(createdTodo)
  } catch (error) {
    console.log(error)
    console.log('Erro ao criar uma tarefa')
  }
}

export const useCreateTodo = () => {
  const { request, loading } = useApi<CreateTodo>(createTodo)
  return { createTodo: request, createTodoLoading: loading }
}
