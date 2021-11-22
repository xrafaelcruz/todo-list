import api, { useApi } from 'api'
import { Todo } from 'api/todo/types'

export type UpdateTodo = (todo: Todo, callback?: () => void) => Promise<void>

export const updateTodo: UpdateTodo = async (todo, callback) => {
  try {
    const url = `${process.env.API_URL}/todos/${todo.id}`

    await api(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })

    callback && callback()
  } catch (error) {
    console.log(error)
    console.log('Erro ao atualizar uma tarefa')
  }
}

export const useUpdateTodo = () => {
  const { request, loading } = useApi<UpdateTodo>(updateTodo)
  return { updateTodo: request, updateTodoLoading: loading }
}
