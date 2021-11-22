import api, { useApi } from 'api'
import { Todo } from 'api/todo/types'

export type DeleteTodo = (todo: Todo, callback?: () => void) => Promise<void>

export const deleteTodo: DeleteTodo = async (todo, callback) => {
  try {
    const url = `${process.env.API_URL}/todos/${todo.id}`

    await api(url, { method: 'DELETE' })

    callback && callback()
  } catch (error) {
    console.log(error)
    console.log('Erro ao atualizar uma tarefa')
  }
}

export const useDeleteTodo = () => {
  const { request, loading } = useApi<DeleteTodo>(deleteTodo)
  return { deleteTodo: request, deleteTodoLoading: loading }
}
