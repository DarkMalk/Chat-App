import { useState, useEffect } from 'react'
import { getAllUsers } from '../services/getAllUsers'
import { useSelector } from 'react-redux'

export const useUsers = () => {
  const { auth } = useSelector(state => state)
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    getAllUsers().then(data => {
      const users = data.filter(user => user.id !== auth.id)
      setAllUsers(users)
    })
  }, [])

  return { allUsers, setAllUsers }
}
