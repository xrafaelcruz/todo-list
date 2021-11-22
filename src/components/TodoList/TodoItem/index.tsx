import { useDispatch } from 'react-redux'

import { todoActions } from 'store/ducks/todo'
import { UpdateTodo } from 'api/todo/updateTodo'
import { DeleteTodo } from 'api/todo/deleteTodo'
import { Todo } from 'api/todo/types'

import Button from 'components/Button'

import * as S from './styles'

export type TodoItemApiProps = {
  updateTodo: UpdateTodo
  updateTodoLoading: boolean
  deleteTodo: DeleteTodo
  deleteTodoLoading: boolean
}

type TodoItemProps = TodoItemApiProps & {
  todo: Todo
  index: number
}

const TodoItem = ({
  todo,
  index,
  updateTodo,
  updateTodoLoading,
  deleteTodo,
  deleteTodoLoading
}: TodoItemProps) => {
  const dispatch = useDispatch()

  const toggleComplete = async () => {
    if (updateTodoLoading) return

    const updatedTodo = { ...todo, completed: !todo.completed }

    await updateTodo(updatedTodo, () => {
      dispatch(todoActions.updateTodo(updatedTodo, index))
    })
  }

  const handleDelete = async () => {
    if (deleteTodoLoading) return

    await deleteTodo(todo, () => {
      dispatch(todoActions.deleteTodo(todo))
    })
  }

  return (
    <S.Item>
      <S.Title completed={todo.completed}>{todo.name}</S.Title>

      <S.Actions>
        <Button onClick={toggleComplete} size="small">
          {!todo.completed ? 'Concluir' : 'Desfazer'}
        </Button>

        <Button onClick={handleDelete} size="small" color="warning">
          Deletar
        </Button>
      </S.Actions>
    </S.Item>
  )
}

export default TodoItem
