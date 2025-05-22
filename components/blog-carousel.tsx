"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { getAllBlogs } from "@/lib/blog-data"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function BlogCarousel() {
  const blogs = getAllBlogs().slice(0, 3)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogs.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [blogs.length, isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full overflow-hidden py-10 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      <div className="relative h-[500px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={blogs[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 px-6"
          >
            <Card className="glassmorphism backdrop-blur-md shadow-xl overflow-hidden h-full">
              <div className="grid md:grid-cols-2 gap-6 h-full">
                <div className="relative h-[300px] md:h-auto w-full">
                  <Image
                    src="/images/blogs/chatar-patar.jpg"
                    alt={blogs[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{blogs[currentIndex].date}</span>
                      <span>•</span>
                      <span>{blogs[currentIndex].category}</span>
                    </div>
                    <CardTitle className="text-3xl font-semibold mb-4 line-clamp-2 text-gray-800">
                      {blogs[currentIndex].title}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-4 text-gray-600 mb-6">
                      {blogs[currentIndex].excerpt}
                    </CardDescription>
                  </div>
                  <Link href={`/blogs/${blogs[currentIndex].slug}`} className="w-full">
                    <Button className="w-full group bg-[#111439] text-white hover:bg-[#1e264e] transition-all">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-[#111439]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-[#111439]" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-[#111439] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
