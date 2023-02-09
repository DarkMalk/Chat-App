import { supabaseClient } from '../App'

export const getChatWithThisUser = async (myId, idUser) => {
  const { data } = await supabaseClient.from('chats').select()

  const chatWithThisPerson = data.filter(chat => {
    const { users_id } = chat
    return users_id.includes(myId) && users_id.includes(idUser)
  })

  return chatWithThisPerson.length
    ? chatWithThisPerson[0]
    : false
}
