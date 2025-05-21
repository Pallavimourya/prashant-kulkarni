import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    const db = await connectToDatabase()

    // Check if admin user already exists
    const existingAdmin = await db.collection("users").findOne({ email: "admin@example.com" })
    if (existingAdmin) {
      return NextResponse.json({ success: true, message: "Admin user already exists" })
    }

    // Create admin user with hashed password
    const hashedPassword = await bcrypt.hash("password", 10)
    const result = await db.collection("users").insertOne({
      email: "admin@example.com",
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    if (result.insertedId) {
      return NextResponse.json({ success: true, message: "Admin user created successfully" })
    } else {
      return NextResponse.json({ success: false, message: "Failed to create admin user" }, { status: 500 })
    }
  } catch (error) {
    console.error("Database initialization error:", error)
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
