"use client"

import { useEffect, useState } from "react"
import { use } from "react"
import { getBlogBySlug } from "@/lib/blog-data"
import { BlogPost } from "@/lib/blog-data"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const resolvedParams = use(params)

  useEffect(() => {
    // Find the blog post with matching slug
    const foundBlog = getBlogBySlug(resolvedParams.slug)

    if (foundBlog) {
      setBlog(foundBlog)
    }
    setLoading(false)
  }, [resolvedParams.slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-8" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blogs">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <Link href="/blogs">
        <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>

      <article className="prose prose-lg max-w-none">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.category}</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
      </div>
  )
}
