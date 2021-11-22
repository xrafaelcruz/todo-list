import { GetServerSideProps } from 'next'
import Head from 'next/head'

import TodoListTemplate, { TodoListTemplateProps } from 'templates/TodoList'

import { getTodoList } from 'api/todo/getTodoList'
import { Todo } from 'api/todo/types'

const Index = (props: TodoListTemplateProps) => (
  <>
    <Head>
      <title>TODO List</title>
      <meta name="description" content="Lista de tarefas" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <TodoListTemplate {...props} />
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const todoList: Todo[] = await getTodoList()

  return { props: { todoList } }
}

export default Index
