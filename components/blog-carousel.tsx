"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { getAllBlogs } from "@/lib/blog-data"

const blogImages = {
  "chatarpathar-success-story": "/Images/events/event.jpg",
  "prashant-kulkarni-entrepreneurial-journey": "/Images/blogs/img2.jpg",
  "coding-software-to-selling-panipuri": "/Images/blogs/panipuri.jpg",
  "infosys-techie-leaves-company": "/Images/blogs/entrepreneurship.jpg",
  "power-of-mentorship": "/Images/blogs/Mentorship.png",
  "chatar-patar-journey": "/Images/blogs/journey.jpg",
  "mastering-time-management": "/Images/events/event.jpg",
  "journey-of-entrepreneurship": "/Images/blogs/entrepreneurship.jpg"
}

export default function BlogCarousel() {
  const blogs = getAllBlogs().slice(0, 3)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Card 
          key={blog.id}
          className="group overflow-hidden border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-all duration-300 hover:shadow-xl"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={blogImages[blog.slug as keyof typeof blogImages] || "/Images/events/event.jpg"}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#FF9933] text-white text-sm font-medium">
              {blog.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-[#138808] mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>

            <CardTitle className="text-xl font-bold mb-3 text-[#000080] line-clamp-2">
              {blog.title}
            </CardTitle>
            
            <CardDescription className="text-gray-600 mb-4 line-clamp-3">
              {blog.excerpt}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#138808]/10 flex items-center justify-center">
                  <span className="text-[#138808] text-sm font-bold">PK</span>
                </div>
                <span className="text-sm text-[#000080] font-medium">Prashant Kulkarni</span>
              </div>
              <Link href={`/blogs/${blog.slug}`}>
                <Button 
                  variant="ghost" 
                  className="text-[#138808] hover:text-[#138808] hover:bg-[#138808]/10"
                >
                  Read
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
