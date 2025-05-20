"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAppStore } from "@/lib/mock-data-service"
import { initMockDataService } from "@/lib/mock-data-service"

export default function LatestEvents() {
  const events = useAppStore((state) => state.events)
  const refreshData = useAppStore((state) => state.refreshData)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    // Load events from the store
    refreshData()
  }, [refreshData])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
          <div className="relative h-48 w-full">
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3 text-theme-dark">{event.title}</h3>
            <div className="flex items-center text-theme-muted mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center text-theme-muted mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.location}</span>
            </div>
            <Link href={`/events/${event.id}`}>
              <Button className="w-full bg-theme-primary hover:bg-theme-secondary text-white">Event Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
