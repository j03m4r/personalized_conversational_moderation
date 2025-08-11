'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const UserContext = createContext()

function getOrCreateUserId() {
  if (typeof window === 'undefined') return null
  
  let userId = localStorage.getItem('user-id')
  if (!userId) {
    userId = uuidv4()
    localStorage.setItem('user-id', userId)
  }
  return userId
}

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const id = getOrCreateUserId()
    setUserId(id)
    setIsLoading(false)
  }, [])

  return (
    <UserContext.Provider value={{ userId, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
