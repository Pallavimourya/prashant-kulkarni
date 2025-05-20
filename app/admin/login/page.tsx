"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { login, checkAuth, createDemoUser } from "@/lib/database-service"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [initializing, setInitializing] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Initialize the database
    const initDb = async () => {
      try {
        setInitializing(true)
        const response = await fetch("/api/init-db")
        const data = await response.json()
        if (data.success) {
          setInitialized(true)
        }
      } catch (error) {
        console.error("Error initializing database:", error)
      } finally {
        setInitializing(false)
      }
    }

    // Check if already logged in
    const checkAuthentication = async () => {
      try {
        // Create demo user first
        await createDemoUser()
        const isAuth = await checkAuth()
        if (isAuth) {
          router.push("/admin/dashboard")
        }
      } catch (error) {
        console.error("Error checking authentication:", error)
      }
    }

    initDb().then(() => checkAuthentication())
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const success = await login(email, password)

      if (success) {
        router.push("/admin/dashboard")
      } else {
        setError("Invalid email or password")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin panel</CardDescription>
        </CardHeader>
        <CardContent>
          {initializing && (
            <Alert className="mb-4">
              <AlertDescription>Initializing database, please wait...</AlertDescription>
            </Alert>
          )}

          {initialized && (
            <Alert className="mb-4">
              <AlertDescription>Database initialized successfully!</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading || initializing}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

         
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Prashant Kulkarni. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
