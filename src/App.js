import './App.css'
import AddTodo from './components/ContentPages/AddTodo'
import NavBar from './components/NavBar/index.js'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <AddTodo />
    </div>
  )
}

export default App
