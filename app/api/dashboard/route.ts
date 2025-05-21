import { type NextRequest, NextResponse } from "next/server"
import { getDashboardStats } from "@/lib/database-service"
import { verifyToken } from "@/lib/database-service"

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    const authResult = await verifyToken(token)

    if (!authResult.authenticated) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Get dashboard stats
    const stats = await getDashboardStats()

    return NextResponse.json({ success: true, data: stats })
  } catch (error) {
    console.error("Error getting dashboard stats:", error)
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
