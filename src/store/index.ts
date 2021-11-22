import { createStore, combineReducers } from 'redux'

import todo, { TodoState } from './ducks/todo'

export type Action<T> = T & { type: string }
export type ReduxState = { todo: TodoState }

const reducers = combineReducers({ todo })
const store = createStore(reducers)

export default store
