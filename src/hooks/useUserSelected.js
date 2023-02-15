import { useSelector, useDispatch } from 'react-redux'
import { actionUserClose, actionUserSelected } from '../store/userChatReducer'

export const useUserSelected = () => {
  const { userSelected } = useSelector(state => state)
  const dispatch = useDispatch()

  return {
    userSelected,
    setUserSelected: (payload) => dispatch(actionUserSelected(payload)),
    setUserClose: () => dispatch(actionUserClose())
  }
}
