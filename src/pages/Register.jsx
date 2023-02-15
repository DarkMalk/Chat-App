import { useNavigate } from 'react-router-dom'
import { supabaseClient } from '../App'
import { ContainerAuth } from '../components/ContainerAuth'

export const Register = () => {
  const navigate = useNavigate()
  const handleSubmit = async event => {
    event.preventDefault()
    const [{ value: username }, { value: email }, { value: password }] = event.target

    const dataRegister = {
      email,
      password,
      options: {
        data: {
          user_name: username,
          avatar_url:
            'https://jbpgajqwbvlgxcdljvkl.supabase.co/storage/v1/object/public/avatar-users/default-avatar.svg'
        }
      }
    }
    const { error } = await supabaseClient.auth.signUp(dataRegister)
    if (error) {
      return alert(error.message)
    }
    navigate('/login')
  }
  return (
    <ContainerAuth title='Register'>
      <form onSubmit={handleSubmit}>
        <input type='text' required placeholder='Username' />
        <input type='email' required placeholder='Email' />
        <input type='password' required placeholder='Password' minLength='8' />
        <button>Register</button>
      </form>
    </ContainerAuth>
  )
}
