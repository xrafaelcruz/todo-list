import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { todoActions } from 'store/ducks/todo'
import { Todo } from 'api/todo/types'
import { useCreateTodo } from 'api/todo/createTodo'
import { useUpdateTodo } from 'api/todo/updateTodo'
import { useDeleteTodo } from 'api/todo/deleteTodo'

import TodoForm from 'components/TodoForm'
import TodoList from 'components/TodoList'

import * as S from './styles'

export type TodoListTemplateProps = {
  todoList: Todo[]
}

let didMount = false

const TodoListTemplate = ({ todoList }: TodoListTemplateProps) => {
  const dispatch = useDispatch()
  const { createTodo, createTodoLoading } = useCreateTodo()
  const { updateTodo, updateTodoLoading } = useUpdateTodo()
  const { deleteTodo, deleteTodoLoading } = useDeleteTodo()

  useEffect(() => {
    if (!didMount) {
      didMount = true
      dispatch(todoActions.addInTodoList(todoList))
    }
  }, [dispatch, todoList])

  return (
    <S.Main>
      <S.Title>Todo List</S.Title>

      <TodoForm createTodo={createTodo} createTodoLoading={createTodoLoading} />

      <TodoList
        updateTodo={updateTodo}
        updateTodoLoading={updateTodoLoading}
        deleteTodo={deleteTodo}
        deleteTodoLoading={deleteTodoLoading}
      />
    </S.Main>
  )
}

export default TodoListTemplate
