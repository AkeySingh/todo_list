import { createContext, useState } from 'react'
import baseUrl from '../../config.json'
import axios from 'axios'

export const TodoContext = createContext()

function TodoState({ children }) {
  const [todoList, setTodoList] = useState([])

  const saveTodoLsit = () => {
    const url = `http://localhost:3000/api/post/todolist`

    // let data = JSON.stringify(todoList)
    axios.post(url, {
      ...todoList,
    })
  }

  return <TodoContext.Provider value={{ todoList, setTodoList, saveTodoLsit }}> {children}</TodoContext.Provider>
}

export default TodoState
