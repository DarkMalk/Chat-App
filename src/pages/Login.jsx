import { supabaseClient } from '../App'
import { ContainerAuth } from '../components/ContainerAuth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Login = () => {
  const { setLoginAuth } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    const [{ value: email }, { value: password }] = event.target

    const credentialsLogin = { email, password }

    const {
      data: { user },
      error
    } = await supabaseClient.auth.signInWithPassword(credentialsLogin)

    if (user) {
      setLoginAuth(user)
      navigate('/')
    }

    if (error) {
      alert(error.message)
    }
  }

  return (
    <ContainerAuth title='Login'>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button>Login</button>
      </form>
    </ContainerAuth>
  )
}
