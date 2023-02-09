import { useDispatch } from 'react-redux'
import { actionAuthLogin } from '../store/authReducer'
import { supabaseClient } from '../App'
import { AuthForm } from '../components/AuthForm'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    const [email, password] = event.target

    try {
      const {
        data: { user }
      } = await supabaseClient.auth.signInWithPassword({
        email: email.value,
        password: password.value
      })

      if (user) {
        dispatch(actionAuthLogin(user))
        navigate('/')
      }
    } catch (e) {
      return console.error(e)
    }
  }

  return (
    <AuthForm title='Login' classContainerChildren='container-form-auth-login'>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button>Login</button>
      </form>
    </AuthForm>
  )
}
