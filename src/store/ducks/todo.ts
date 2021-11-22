import { createActions, createReducer } from 'reduxsauce'
import { Action, ReduxState } from 'store'
import { Todo } from 'api/todo/types'

export type TodoState = {
  todoList: Todo[]
}

const INITIAL_STATE: TodoState = {
  todoList: []
}

const addInTodoList = (
  state = INITIAL_STATE,
  action: Action<{ todos: Todo[] }>
) => ({ ...state, todoList: [...state.todoList, ...action.todos] })

const updateTodo = (
  state = INITIAL_STATE,
  action: Action<{ todo: Todo; index: number }>
) => {
  const newTodoList = [...state.todoList]
  newTodoList[action.index] = action.todo

  return { ...state, todoList: newTodoList }
}

const deleteTodo = (state = INITIAL_STATE, action: Action<{ todo: Todo }>) => {
  const newTodoList = state.todoList.filter(
    (todo) => todo.id !== action.todo.id
  )

  return { ...state, todoList: newTodoList }
}

export const { Types, Creators: todoActions } = createActions({
  addInTodoList: ['todos'],
  updateTodo: ['todo', 'index'],
  deleteTodo: ['todo']
})

const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_IN_TODO_LIST]: addInTodoList,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.DELETE_TODO]: deleteTodo
})

export const todoSelector = (state: ReduxState) => state.todo

export default reducer
