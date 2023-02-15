import { Link } from 'react-router-dom'
import { Image } from '../components/Image'
import { useAuth } from '../hooks/useAuth'

export const Landing = () => {
  const { auth } = useAuth()
  return (
    <div className='container-landing'>
      <div className='landing-items'>
        <p>Chat with your favorite people at your fingertips.</p>
        <p>Come on, what are you waiting for?</p>
        {auth ? (
          <Link to='/chat' className='button-landing'>
            Start Chatting
            <Image img='chatBtnIcon' />
          </Link>
        ) : (
          <Link to='/auth' className='button-landing'>
            Go Auth
            <Image img='signInIcon' />
          </Link>
        )}
      </div>
      <Image img='socialConnected' />
    </div>
  )
}
