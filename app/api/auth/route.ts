import { type NextRequest, NextResponse } from "next/server"
import { login, verifyToken } from "@/lib/database-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      )
    }

    const result = await login(email, password)

    if (result.success) {
      return NextResponse.json({ success: true, token: result.token, user: result.user })
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred during login" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { authenticated: false, message: "No token provided" },
        { status: 401 }
      )
    }

    const token = authHeader.split(" ")[1]
    const result = await verifyToken(token)

    if (result.authenticated) {
      return NextResponse.json({ authenticated: true, user: result.user })
    } else {
      return NextResponse.json(
        { authenticated: false, message: "Invalid or expired token" },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Token verification error:", error)
    return NextResponse.json(
      { authenticated: false, message: "Error verifying token" },
      { status: 401 }
    )
  }
}
