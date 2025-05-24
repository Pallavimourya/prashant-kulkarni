import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import VideoPopup from "./video-popup"

export default function LatestEvents() {
  const featuredVideos = [
    {
      id: "1",
      title: "History of Parantha",
      thumbnail: "https://img.youtube.com/vi/i6_mjzN-Q4E/maxresdefault.jpg",
      url: "https://youtu.be/i6_mjzN-Q4E?si=D3v5-oZdnHMOifFa",
      date: "May 15, 2023",
    },
    {
      id: "2",
      title: "History of Kadhi by Zuper Prashant",
      thumbnail: "https://img.youtube.com/vi/mkOjV7D8PpI/maxresdefault.jpg",
      url: "https://youtube.com/shorts/mkOjV7D8PpI?si=I-ZsYXbPOyaC2mjp",
      date: "April 20, 2023",
    },
    {
      id: "3",
      title: "The Secret to Success: Franchise Operating System Benefits",
      thumbnail: "https://img.youtube.com/vi/hsoS9xpSnc4/maxresdefault.jpg",
      url: "https://youtu.be/hsoS9xpSnc4?si=-ovFwXMRz0Lr5ZsD",
      date: "March 10, 2023",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Latest Videos</h2>
          <Link href="/events">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <VideoPopup>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <a href={video.url} className="video-popup">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white-700 bg-opacity-90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <svg
                          className="w-12 h-12 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-2">{video.date}</div>
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </VideoPopup>
      </div>
    </section>
  )
}
