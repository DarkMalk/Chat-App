const INIT_STATE = null

export const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case '@auth/init':
      return action.payload ? Object.assign({}, action.payload) : null
    case '@auth/login':
      return Object.assign({}, action.payload)
    case '@auth/logout':
      return null
    default:
      return state
  }
}

export const actionAuthInit = payload => {
  return {
    type: '@auth/init',
    payload
  }
}

export const actionAuthLogin = payload => {
  return {
    type: '@auth/login',
    payload
  }
}

export const actionAuthLogout = () => {
  return {
    type: '@auth/logout'
  }
}
