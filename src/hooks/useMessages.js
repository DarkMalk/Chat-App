import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllMessagesOfTheChat } from '../services/getAllMessagesOfTheChat'

export const useMessages = () => {
  const { chat } = useSelector(state => state)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (chat) {
      getAllMessagesOfTheChat(chat.id).then(allMessages => setMessages(allMessages))
    }
  }, [chat?.id])

  return {
    messages,
    setMessages
  }
}
