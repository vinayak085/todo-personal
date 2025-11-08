import React from 'react'
import Login_Form from './features/Login_Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './features/TodoList'

function App() {
  return (
    <BrowserRouter>
    <Routes>
         
    <Route path='login' element={<Login_Form />}/>
    <Route path='/' element={<TodoList />}/>    
    </Routes>
    </BrowserRouter>
  )
}

export default App