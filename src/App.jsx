import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Landing } from './pages/Landing'
import { Navbar } from './components/Navbar'
import { Auth } from './pages/Auth'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Chat } from './pages/Chat'
import { createClient } from '@supabase/supabase-js'
import { useAuth } from './hooks/useAuth'

const { VITE_SUPABASE_URL, VITE_ANON_KEY } = import.meta.env
export const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_ANON_KEY)

export const App = () => {
  const { auth } = useAuth()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoute isLogged={auth} />}>
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
