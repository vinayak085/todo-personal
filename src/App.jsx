import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OfflineTodo from './pages/OfflineTodo'
import Login from './pages/Login'
import MainTodoList from './features/online/MainTodoList'
import Register from './features/login/register'
import ProtectedRoute from './pages/ProtectedRoute'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
  <>
    <Toaster position="top-center" reverseOrder={false}/>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Login />}/>
    <Route path='/main' element={
      <ProtectedRoute>
        <MainTodoList />
      </ProtectedRoute>
      }/>
    <Route path='/register' element={<Register />}/>
    <Route path='/guest' element={<OfflineTodo/>}/>    
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App