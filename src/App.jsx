import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext'
import login from './components/login'
import profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <userContextProvider>
        <login/>
        <profile/>
      </userContextProvider>
    </>
  )
}

export default App
