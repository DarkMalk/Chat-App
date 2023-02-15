import { NavListUser } from '../components/NavListUser'
import { ChatWithUser } from '../components/ChatWithUser'

export const Chat = () => {
  return (
    <div className='container-chat-page'>
      <NavListUser />
      <ChatWithUser />
    </div>
  )
}
