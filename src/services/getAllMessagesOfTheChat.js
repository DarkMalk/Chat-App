import { supabaseClient } from '../App'

export const getAllMessagesOfTheChat = async chatId => {
  const { data } = await supabaseClient.from('messages').select('*').eq('chat_id', chatId)
  return data
}
