import { useSelector } from 'react-redux'

import { todoSelector } from 'store/ducks/todo'

import TodoItem, { TodoItemApiProps } from './TodoItem'

import * as S from './styles'

const TodoList = (props: TodoItemApiProps) => {
  const { todoList } = useSelector(todoSelector)

  return (
    <S.List>
      {todoList.map((todo, i) => (
        <TodoItem key={todo.id} index={i} todo={todo} {...props} />
      ))}
    </S.List>
  )
}

export default TodoList
