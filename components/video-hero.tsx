"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let isMounted = true

    // Only attempt to play if the video ref exists and component is mounted
    if (videoRef.current && isMounted) {
      // Add a small delay to ensure the video is properly loaded in the DOM
      const playPromise = setTimeout(() => {
        if (videoRef.current && isMounted) {
          videoRef.current.play().catch((error) => {
            // Only log errors if the component is still mounted
            if (isMounted) {
              console.error("Video autoplay failed:", error)
            }
          })
        }
      }, 100)

      // Clean up function to prevent memory leaks and abort play attempts
      return () => {
        isMounted = false
        clearTimeout(playPromise)
      }
    }

    return () => {
      isMounted = false
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
        preload="auto"
      >
        <source src="/public/Images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mb-6">
          PARALLEL ENTREPRENEUR | INNOVATOR | SPEAKER | THINKER
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold tracking-wide">
          DIRECTOR OF TASTY ALPHABETS | CEO OF FOOD FRANCHISE INDIA | ZUPER WORLD
        </p>
        <Button onClick={scrollToAbout} className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
          Explore My Story
        </Button>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <button onClick={scrollToAbout} className="text-white flex flex-col items-center" aria-label="Scroll down">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
