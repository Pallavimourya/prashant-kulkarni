"use client"

import { useEffect } from "react"

export default function InitScript() {
  useEffect(() => {
    // Check if we need to initialize mock data
    if (!localStorage.getItem('admin_initialized')) {
      // This would be replaced by the actual initialization in production
      console.log('Initializing mock data for admin panel')
      localStorage.setItem('admin_initialized', 'true')
    }
  }, [])

  return null
}
