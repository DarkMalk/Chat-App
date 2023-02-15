import { useState } from 'react'
import { supabaseClient } from '../App'
import { useAuth } from '../hooks/useAuth'
import { Image } from './Image'

export const Dropdown = ({ avatar, username }) => {
  const { setLogoutAuth } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    if (error) {
      return alert(error.message)
    }
    setLogoutAuth()
  }

  const handleOpenDropdown = () => setIsOpen(!isOpen)

  return (
    <div className='dropdownComponent'>
      <button className={`btn-dropdown ${isOpen ? 'btn-dropdown-open' : ''}`} onClick={handleOpenDropdown}>
        <img src={avatar} alt={`Avatar ${username}`} />
        {username}
      </button>
      <div className={`menu-dropdown ${isOpen ? 'open' : ''}`}>
        <button onClick={handleLogout}>
          Logout
          <Image img='logoutIcon' />
        </button>
      </div>
    </div>
  )
}
