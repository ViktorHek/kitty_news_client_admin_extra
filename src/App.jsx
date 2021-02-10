import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import HomePage from './components/HomePage'

const App = () => {
  const currentUser = useSelector((state) => state.currentUser)
  return (
    <>
      <Header />
      {currentUser ? <HomePage /> : <LoginForm />}
    </>
  )
}

export default App
