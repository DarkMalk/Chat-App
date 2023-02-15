import { combineReducers, legacy_createStore } from 'redux'
import { chatReducer } from './chatReducer'
import { authReducer } from './authReducer'
import { userChatReducer } from './userChatReducer'

const combinedReducers = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  userSelected: userChatReducer
})

export const store = legacy_createStore(combinedReducers)
