import { UserFriends } from './UserFriends'
import { useState } from 'react'
import { useUsers } from '../hooks/useUsers'
import { supabaseClient } from '../App'
import { getChatWithThisUser } from '../services/getChatWithThisUser'
import { InputSearchUsers } from './InputSearchUsers'
import { useChat } from '../hooks/useChat'
import { useUserSelected } from '../hooks/useUserSelected'
import { useAuth } from '../hooks/useAuth'

export const NavListUser = () => {
  const { auth } = useAuth()
  const { setUserSelected } = useUserSelected()
  const { setChat } = useChat()
  const { allUsers } = useUsers()
  const [search, setSearch] = useState(null)

  const handleClick = async (idUserChat, userChat, avatar_url) => {
    let chatWithThisUser = await getChatWithThisUser(auth.id, idUserChat)
    if (!chatWithThisUser) {
      await supabaseClient
        .from('chats')
        .insert({ users_id: [auth.id, idUserChat], users_name: [auth.user_metadata.user_name, userChat] })
      chatWithThisUser = await getChatWithThisUser(auth.id, idUserChat)
    }
    setChat(chatWithThisUser)
    setUserSelected({ id: idUserChat, username: userChat, avatarUrl: avatar_url })
  }

  const handleOnChange = async event => {
    const { value: valueInput } = event.target
    const usersSearch = allUsers.filter(({ raw_user_meta_data: userData }) => userData.user_name.match(valueInput))
    setSearch(usersSearch)
  }

  return (
    <div className='container-users'>
      <InputSearchUsers onChange={handleOnChange} />
      <hr />
      <div className='container-all-user'>
        {search
          ? search.map(({ id, email, raw_user_meta_data }) => {
            const { user_name, avatar_url } = raw_user_meta_data
            return (
                <UserFriends
                  image={avatar_url}
                  username={user_name}
                  email={email}
                  key={id}
                  eventClick={() => handleClick(id, user_name, avatar_url)}
                />
            )
          })
          : allUsers.map(({ id, email, raw_user_meta_data }) => {
            const { user_name, avatar_url } = raw_user_meta_data
            return (
                <UserFriends
                  image={avatar_url}
                  username={user_name}
                  email={email}
                  key={id}
                  eventClick={() => handleClick(id, user_name, avatar_url)}
                />
            )
          })}
      </div>
    </div>
  )
}
