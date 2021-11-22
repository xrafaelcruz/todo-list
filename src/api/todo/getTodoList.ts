import api from 'api'
import { Todo } from 'api/todo/types'

export const getTodoList = async (): Promise<Todo[]> => {
  let todoList: Todo[] = []

  try {
    const url = `${process.env.API_URL}/todos`
    todoList = await api<Todo[]>(url, { method: 'GET' })
  } catch (error) {
    console.log(error)
    console.log('Erro ao buscar as tarefas')
  }

  return todoList
}
