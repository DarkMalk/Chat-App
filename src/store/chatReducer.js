const INIT_VALUE = null

export const chatReducer = (state = INIT_VALUE, action) => {
  switch (action.type) {
    case '@chat/select':
      return Object.assign({}, action.payload)
    case '@chat/close':
      return null
    default:
      return state
  }
}

export const actionChatSelect = payload => {
  return {
    type: '@chat/select',
    payload
  }
}

export const actionChatClose = () => {
  return {
    type: '@chat/close'
  }
}
