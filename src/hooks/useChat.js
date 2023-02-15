import { useSelector, useDispatch } from 'react-redux'
import { actionChatClose, actionChatSelect } from '../store/chatReducer'

export const useChat = () => {
  const { chat } = useSelector(state => state)
  const dispatch = useDispatch()

  return {
    chat,
    setChat: payload => dispatch(actionChatSelect(payload)),
    setCloseChat: () => dispatch(actionChatClose())
  }
}
