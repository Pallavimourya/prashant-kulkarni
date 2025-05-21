"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import { getEvents } from "@/lib/mock-data-service"
import { useEffect, useState } from "react"

interface Event {
  id: number
  title: string
  location: string
  date: string
  status: string
  attendees: number
  description: string
}

export function LatestEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const allEvents = getEvents()
      const upcomingEvents = allEvents
        .filter((event: Event) => event.status === "Upcoming")
        .sort((a: Event, b: Event) => {
          try {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
          } catch (e) {
            return 0
          }
        })
        .slice(0, 3)
      setEvents(upcomingEvents)
    } catch (e) {
      setError("Failed to load events")
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-6">
              <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-3">
                <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
                <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
                <div className="h-4 w-1/3 bg-muted animate-pulse rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-destructive">{error}</p>
      </div>
    )
  }

  // Empty state
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No upcoming events</p>
      </div>
    )
  }

  // Success state
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <CardHeader className="p-6">
            <CardTitle className="line-clamp-2">{event.title || "Untitled Event"}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {event.date || "Date not specified"}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {event.location || "Location not specified"}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                {event.attendees || 0} attendees
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {event.description || "No description available"}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
