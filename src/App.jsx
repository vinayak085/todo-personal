import React from 'react'
import Login_Form from './features/Login_Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Login_Form />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App