import './App.css'
import AddTodo from './components/ContextPage/AddTodo'
import NavBar from './components/NavBar/index.js'
import TodoState from './components/Context/TodoContext'

function App() {
  return (
    <div className='App'>
      <TodoState>
        <NavBar />
        <AddTodo />
      </TodoState>
    </div>
  )
}

export default App
