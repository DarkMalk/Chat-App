import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMessagesOfTheChat } from '../services/getAllMessagesOfTheChat'
import { actionMessageCreated, actionMessageInit } from '../store/messagesReducer'

export const useMessages = () => {
  const dispatch = useDispatch()
  const { chat, messages } = useSelector(state => state)

  useEffect(() => {
    if (chat) {
      getAllMessagesOfTheChat(chat.id).then(messages => dispatch(actionMessageInit(messages)))
    }
  }, [chat?.id])

  return {
    messages,
    setNewMessage: newMessage => dispatch(actionMessageCreated(newMessage))
  }
}
