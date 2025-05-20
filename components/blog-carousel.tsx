"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/lib/mock-data-service"
import { initMockDataService } from "@/lib/mock-data-service"

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const blogs = useAppStore((state) => state.blogs)
  const refreshData = useAppStore((state) => state.refreshData)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    // Load blogs from the store
    refreshData()
  }, [refreshData])

  const postsPerPage = 3
  const totalPages = Math.ceil(blogs.length / postsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + postsPerPage >= blogs.length ? 0 : prevIndex + postsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - postsPerPage < 0 ? blogs.length - postsPerPage : prevIndex - postsPerPage,
    )
  }

  const visiblePosts = blogs.slice(currentIndex, currentIndex + postsPerPage)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 w-full">
              <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-theme-primary text-white text-xs px-2 py-1 rounded">
                {post.category}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2 text-theme-dark">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <Link href={`/ideas/${post.slug}`}>
                <Button variant="link" className="p-0 h-auto font-medium text-theme-primary hover:text-theme-secondary">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white"
          aria-label="Previous posts"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center space-x-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * postsPerPage)}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(currentIndex / postsPerPage) === index ? "bg-theme-primary w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white"
          aria-label="Next posts"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
