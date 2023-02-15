import { Messages } from './Messages'
import { InfoUserChat } from './InfoUserChat'
import { FormChat } from './FormChat'
import { supabaseClient } from '../App'
import { useMessages } from '../hooks/useMessages'
import { useEffect } from 'react'
import { useChat } from '../hooks/useChat'
import { useAuth } from '../hooks/useAuth'
import { useUserSelected } from '../hooks/useUserSelected'
import { Image } from './Image'

export const ChatWithUser = () => {
  const { userSelected, setUserClose } = useUserSelected()
  const { auth } = useAuth()
  const { chat, setCloseChat } = useChat()
  const { messages, setMessages } = useMessages()

  useEffect(() => {
    if (chat) {
      const containerMessages = document.querySelector('.container-messages')
      containerMessages.scrollTop = containerMessages.scrollHeight
    }
  }, [messages])

  if (!chat) {
    return (
      <div className='none-chat'>
        <div>Is necessary select some chat <Image img='selectIcon' /></div>
      </div>
    )
  }

  const submitMessage = async event => {
    event.preventDefault()

    const { id: idChat } = chat
    const { value } = event.target[0]

    if (!value) {
      return (event.target[0].style = 'border: 1px solid red')
    }

    if (value) {
      event.target[0].style = 'border: 1px solid green'
    }

    const newMessage = {
      author_name: auth.user_metadata.user_name,
      chat_id: idChat,
      content: value
    }

    try {
      await supabaseClient.from('messages').insert(newMessage)
    } catch (e) {
      return console.error(e)
    }
    event.target[0].value = ''
  }

  const CloseChat = () => {
    setCloseChat()
    setUserClose()
  }

  supabaseClient
    .channel('any')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
      const { new: newMessage } = payload

      if (chat.id === newMessage.chat_id) {
        setMessages([...messages, newMessage])
      }
    })
    .subscribe()

  return (
    <div className={`container-chat ${chat ? 'open-chat' : ''}`}>
      <InfoUserChat avatarUrl={userSelected?.avatarUrl} username={userSelected?.username} onClick={CloseChat} />
      <div className='container-messages'>
        {messages.map(message => {
          const { id, created_at, author_name, content } = message
          const dateMessage = new Date(created_at).toLocaleString().split(',')[1]
          return <Messages key={id} date={dateMessage} user={author_name} text={content} />
        })}
      </div>
      <FormChat onSubmit={submitMessage} />
    </div>
  )
}
