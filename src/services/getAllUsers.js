import { supabaseClient } from '../App'

export const getAllUsers = async () => {
  const { data } = await supabaseClient.from('users').select()
  return data
}
