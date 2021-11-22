import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todoActions } from 'store/ducks/todo'
import { CreateTodo } from 'api/todo/createTodo'

import Button from 'components/Button'

import * as S from './styles'

type TodoFormProps = {
  createTodo: CreateTodo
  createTodoLoading: boolean
}

const TodoForm = ({ createTodo, createTodoLoading }: TodoFormProps) => {
  const [inputTodo, setInputTodo] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputTodo || createTodoLoading) return

    const newTodo = { name: inputTodo, completed: false }

    await createTodo(newTodo, (createdTodo) => {
      dispatch(todoActions.addInTodoList([createdTodo]))
      setInputTodo('')
    })
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Field>
        <S.Label htmlFor="inputTodo">Nova tarefa</S.Label>
        <S.Input
          id="inputTodo"
          type="text"
          value={inputTodo}
          onChange={handleChangeInput}
        />
      </S.Field>

      <Button color="primary" type="submit">
        Criar tarefa
      </Button>
    </S.Form>
  )
}

export default TodoForm
