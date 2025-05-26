"use client"

import { useEffect, useState } from "react"
import { use } from "react"
import { getBlogBySlug, BlogPost } from "@/lib/blog-data"
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
    const foundBlog = getBlogBySlug(resolvedParams.slug)
    if (foundBlog) {
      setBlog(foundBlog)
    }
    setLoading(false)
  }, [resolvedParams.slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
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
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-[#000080]">Blog post not found</h1>
        <Link href="/blogs">
          <Button variant="outline" className="border-[#FF9933] text-[#138808] hover:bg-[#FF9933]/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#FF9933]/5 to-[#138808]/5 py-10">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/blogs">
          <Button
            variant="ghost"
            className="mb-6 text-[#138808] hover:text-white hover:bg-[#138808]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>

        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Meta info */}
          <div className="flex flex-wrap gap-3 text-sm text-[#555] mb-4">
            <span className="bg-[#FF9933]/20 text-[#FF9933] px-3 py-1 rounded-full">{blog.date}</span>
            <span className="bg-[#138808]/20 text-[#138808] px-3 py-1 rounded-full">{blog.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#000080] mb-6">{blog.title}</h1>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#000080] prose-a:text-[#138808] prose-strong:text-[#000] prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </main>
  )
}
