import { supabaseClient } from '../App'

export const getUser = async () => {
  const {
    data: { user }
  } = await supabaseClient.auth.getUser()
  return user
}
