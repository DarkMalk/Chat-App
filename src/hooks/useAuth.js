import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../services/getUser'
import { actionAuthInit, actionAuthLogin, actionAuthLogout } from '../store/authReducer'

export const useAuth = () => {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    getUser().then(user => dispatch(actionAuthInit(user)))
  }, [])

  return {
    auth,
    setLoginAuth: payload => dispatch(actionAuthLogin(payload)),
    setLogoutAuth: () => dispatch(actionAuthLogout())
  }
}
