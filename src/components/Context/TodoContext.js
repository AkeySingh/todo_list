import { createContext, useState } from 'react'

export const TodoContext = createContext()

function TodoState({ children }) {
  const [todoList, setTodoList] = useState([])

  return <TodoContext.Provider value={{ todoList, setTodoList }}> {children}</TodoContext.Provider>
}

export default TodoState
