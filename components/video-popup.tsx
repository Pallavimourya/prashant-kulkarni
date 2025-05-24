"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

interface VideoPopupProps {
  children: React.ReactNode
}

const VideoPopupContent = ({ children }: VideoPopupProps) => {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const videoLink = target.closest('.video-popup')
        if (videoLink) {
          e.preventDefault()
          const url = (videoLink as HTMLAnchorElement).href
          setVideoUrl(url)
          setIsOpen(true)
        }
      }

      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [isClient])

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('shorts/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`
    }
    return url
  }

  if (!isClient) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            <div className="relative aspect-video">
              <iframe
                src={getEmbedUrl(videoUrl)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default dynamic(() => Promise.resolve(VideoPopupContent), {
  ssr: false
}) 