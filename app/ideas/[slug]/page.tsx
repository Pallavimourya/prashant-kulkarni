"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, BookmarkPlus } from "lucide-react"
import { getBlogs } from "@/lib/mock-data-service"
import { initMockDataService } from "@/lib/mock-data-service"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    
    // Find the blog post with matching slug
    const blogs = getBlogs()
    const foundBlog = blogs.find((b: any) => b.slug === params.slug)
    
    if (foundBlog) {
      setBlog(foundBlog)
    }
    setLoading(false)
  }, [params.slug])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link href="/ideas">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/ideas">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ideas
          </Button>
        </Link>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.category}</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="sm">
            <BookmarkPlus className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
            <Button variant="ghost" size="sm">
              <BookmarkPlus className="mr-2 h-4 w-4" />
              Save for Later
            </Button>
          </div>
          <Link href="/ideas">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Ideas
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
