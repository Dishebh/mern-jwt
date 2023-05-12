import { useState } from 'react'
import './App.css'
import Login from './Login'
import Book from './Book'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('token') ? true : false)

  const componentToRender = () => isLoggedIn ? <Book /> : <Login />

  return (
    <div>
      {componentToRender()}
    </div>
  )
}

export default App
