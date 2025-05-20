import { NextResponse } from "next/server"
import { dataService } from "@/lib/data-service"

export async function GET() {
  try {
    // Test blog creation
    const testBlog = await dataService.createBlog({
      title: "Test Blog",
      slug: "test-blog",
      excerpt: "This is a test blog post",
      content: "This is the content of the test blog post",
      category: "Test",
      status: "published",
      featuredImage: "https://example.com/test.jpg",
      views: 0
    })

    // Test blog retrieval
    const blogs = await dataService.getBlogs()

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      testBlog,
      totalBlogs: blogs.length
    })
  } catch (error) {
    console.error("Test error:", error)
    return NextResponse.json({
      success: false,
      error: "Database connection failed",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
}
