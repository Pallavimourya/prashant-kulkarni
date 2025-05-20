import { NextResponse } from "next/server"
import { createDemoUser } from "@/lib/database-service"

export async function GET() {
  try {
    // Create demo user
    const success = await createDemoUser()

    if (success) {
      return NextResponse.json({ success: true, message: "Database initialized successfully" })
    } else {
      return NextResponse.json({ success: false, message: "Failed to initialize database" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error initializing database:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
