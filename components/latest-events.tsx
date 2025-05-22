"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { adminService } from "@/lib/admin-service"

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

export default function LatestEvents() {
  const events = adminService.getEvents().slice(0, 3)

  const handleVideoClick = (url: string) => {
    if (!url) return
    const videoUrl = url.startsWith('http') ? url : `https://${url}`
    window.open(videoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative aspect-video">
            <Image
              src={event.videoUrl ? `https://img.youtube.com/vi/${event.videoUrl.split('/').pop()?.split('?')[0]}/maxresdefault.jpg` : "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                <div className="w-0 h-0 border-t-6 border-t-transparent border-l-12 border-l-red-600 border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-2">{formatDate(event.date)}</div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
            {event.videoUrl && (
              <Button
                variant="link"
                className="p-0 h-auto text-theme-primary hover:underline flex items-center"
                onClick={() => handleVideoClick(event.videoUrl!)}
              >
                Watch Video
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
