'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type StatusContextType = {
  status: string
  setStatus: (status: 'online' | 'busy' | 'offline') => void
}

const StatusContext = createContext<StatusContextType | undefined>(undefined)

export const StatusProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<string>('online')

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  )
}

export const useStatus = () => {
  const context = useContext(StatusContext)
  if (!context) throw new Error('useStatus must be used within a StatusProvider')
  return context
}
