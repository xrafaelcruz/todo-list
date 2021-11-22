import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from 'utils/tests'
import { CreateTodo } from 'api/todo/createTodo'
import { UpdateTodo } from 'api/todo/updateTodo'
import { DeleteTodo } from 'api/todo/deleteTodo'

import TodoForm from 'components/TodoForm'
import TodoList from 'components/TodoList'

const createTodo = jest.fn((_, callback) => {
  callback({ name: 'my new todo', id: Math.random(), completed: false })
}) as unknown as CreateTodo

const updateTodo = jest.fn((_, callback) => {
  callback()
}) as unknown as UpdateTodo

const deleteTodo = jest.fn((_, callback) => {
  callback()
}) as unknown as DeleteTodo

describe('<TodoListTemplate />', () => {
  let input: HTMLElement

  const writeNewTodoInInput = () => {
    input = screen.getByLabelText('Nova tarefa')
    userEvent.type(input, 'my new todo')
    expect(input).toHaveValue('my new todo')
  }

  const createNewTodo = (
    create = createTodo,
    update = updateTodo,
    remove = deleteTodo
  ) => {
    render(<TodoForm createTodo={create} createTodoLoading={false} />)
    render(
      <TodoList
        updateTodo={update}
        updateTodoLoading={false}
        deleteTodo={remove}
        deleteTodoLoading={false}
      />
    )

    writeNewTodoInInput()

    const button = screen.getByRole('button', { name: /Criar tarefa/i })
    userEvent.click(button)
  }

  describe('When create a new todo', () => {
    it('should add a new todo in list', async () => {
      createNewTodo()

      const newTodo = await screen.queryByText(/my new todo/i)
      expect(newTodo).toBeInTheDocument()
    })

    it('should clear input after add a new todo', async () => {
      createNewTodo()

      expect(input).toHaveValue('')
    })
  })

  describe('When delete a todo', () => {
    it('should delete a todo with success', async () => {
      const mockCreateTodo = jest.fn((_, callback) => {
        callback({ name: 'todo test', id: Math.random(), completed: false })
      }) as unknown as CreateTodo

      createNewTodo(mockCreateTodo)

      const newTodo = await screen.queryByText(/todo test/i)
      expect(newTodo).toBeInTheDocument()

      const buttons = screen.getAllByRole('button', { name: /Deletar/i })
      const lastButton = buttons[buttons.length - 1]

      userEvent.click(lastButton)

      expect(await screen.queryByText(/todo test/i)).not.toBeInTheDocument()
    })
  })

  describe('When update a todo', () => {
    it('should complete the todo', async () => {
      createNewTodo()

      const completeBtns = screen.getAllByRole('button', { name: /Concluir/i })
      const lastCompleteBtn = completeBtns[completeBtns.length - 1]

      userEvent.click(lastCompleteBtn)

      const undoButtons = screen.getAllByRole('button', { name: /Desfazer/i })
      const lastUndoButton = undoButtons[undoButtons.length - 1]

      expect(lastUndoButton).toBeInTheDocument()
    })

    it('should uncomplete all completed todos', async () => {
      createNewTodo()

      const completeBtns = screen.getAllByRole('button', { name: /Concluir/i })
      const lastCompleteBtn = completeBtns[completeBtns.length - 1]

      userEvent.click(lastCompleteBtn)

      const undoButtons = screen.getAllByRole('button', { name: /Desfazer/i })

      undoButtons.forEach((button) => userEvent.click(button))

      const undoButtonsAfterClick = screen.queryAllByRole('button', {
        name: /Desfazer/i
      })

      expect(undoButtonsAfterClick.length).toEqual(0)
    })
  })
})
