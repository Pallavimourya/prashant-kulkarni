"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface AdminContextType {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const AdminContext = createContext<AdminContextType>({
  isSidebarOpen: false,
  toggleSidebar: () => {},
})

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return <AdminContext.Provider value={{ isSidebarOpen, toggleSidebar }}>{children}</AdminContext.Provider>
}

export const useAdmin = () => useContext(AdminContext)
