const INIT_VALUE = null

export const userChatReducer = (state = INIT_VALUE, action) => {
  switch (action.type) {
    case '@user-chat/selected':
      return Object.assign({}, action.payload)
    case '@user-chat/close':
      return null
    default:
      return state
  }
}

export const actionUserSelected = (payload) => {
  return {
    type: '@user-chat/selected',
    payload
  }
}

export const actionUserClose = () => {
  return {
    type: '@user-chat/close'
  }
}
