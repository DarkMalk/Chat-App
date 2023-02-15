import { Link } from 'react-router-dom'
import { ContainerAuth } from '../components/ContainerAuth'
import { supabaseClient } from '../App'
import { Image } from '../components/Image'

export const Auth = () => {
  const handleLoginGithub = async () => {
    await supabaseClient.auth.signInWithOAuth({ provider: 'github' })
  }

  return (
    <ContainerAuth title='Login or Register'>
      <button className='btn-auth btn-auth-github' onClick={handleLoginGithub}>
        <Image img='githubIcon' />
        Login with Github
      </button>
      <Link to='/login' className='btn-auth btn-auth-login'>
        Login
      </Link>
      <Link to='/register' className='btn-auth btn-auth-register'>
        Register
      </Link>
    </ContainerAuth>
  )
}
