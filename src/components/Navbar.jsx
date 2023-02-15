import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dropdown } from './ButtonDropdown'
import { Image } from './Image'

export const Navbar = () => {
  const { auth } = useSelector(state => state)
  const avatar = auth?.user_metadata.avatar_url
  const username = auth?.user_metadata.user_name

  return (
    <nav className='navbar'>
      <Link to='/' className='link-img-landing'>
        <Image img='chatLogoIcon' />
      </Link>
      <div className='container-links'>
        {auth ? null : <Link to='/'>Home</Link>}
        {auth ? <Link to='/chat'>Chat</Link> : null}
        {auth ? <Dropdown avatar={avatar} username={username} /> : <Link to='/auth'>Authenticate</Link>}
      </div>
    </nav>
  )
}
