"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { getAllBlogs } from "@/lib/blog-data"
import { Calendar, Tag } from "lucide-react"

export default function BlogsPage() {
  const blogs = getAllBlogs()
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#138808]/10 font-inter">
      <div className="container mx-auto px-4 py-20">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[#000080]">Latest Insights</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover valuable insights, stories, and perspectives from Prashant Kulkarni
          </p>
        </div>

        {/* Tabs for categories */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-[#FF9933]/10 rounded-full p-1 shadow-sm flex-wrap gap-2">
              <TabsTrigger
                value="all"
                className="rounded-full px-6 py-2 text-sm font-semibold transition-colors data-[state=active]:bg-[#FF9933] data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2 text-sm font-semibold transition-colors data-[state=active]:bg-[#FF9933] data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* All Posts */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </TabsContent>

          {/* Category Specific Posts */}
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs
                  .filter((blog) => blog.category === category)
                  .map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

// BlogCard Component
function BlogCard({ blog }: { blog: any }) {
  return (
    <Card className="overflow-hidden border border-[#FF9933]/30 hover:shadow-xl transition-shadow rounded-xl">
      <CardHeader className="p-0">
        <div className="h-40 relative overflow-hidden">
          {blog.featuredImage ? (
            <img
              src={blog.featuredImage.replace('/public', '')}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#FF9933]/10 flex items-center justify-center text-[#FF9933] text-lg font-bold">
              No Image
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-[#138808]" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4 text-[#138808]" />
              <span>{blog.category}</span>
            </div>
          </div>
          <CardTitle className="text-xl font-semibold text-[#000080] hover:underline">
            {blog.title}
          </CardTitle>
          <CardDescription className="text-gray-700 mt-2 text-sm leading-relaxed">
            {blog.excerpt}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="px-6 pb-6">
        <Link href={`/blogs/${blog.slug}`}>
          <Button className="bg-[#000080] hover:bg-[#FF9933] transition-colors text-white rounded-full px-6 py-2 text-sm">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
