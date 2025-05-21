"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Save } from "lucide-react"
import { createEvent, initMockDataService } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"

export default function NewEventPage() {
  const router = useRouter()
  const [eventData, setEventData] = useState({
    title: "",
    location: "",
    date: "",
    status: "Upcoming",
    attendees: 0,
    description: "",
  })

  const handleChange = (field: string, value: string | number) => {
    setEventData({
      ...eventData,
      [field]: value,
    })
  }

  const handleSave = () => {
    // Validate required fields
    if (!eventData.title) {
      alert("Please enter an event title")
      return
    }

    if (!eventData.location) {
      alert("Please enter an event location")
      return
    }

    if (!eventData.date) {
      alert("Please enter an event date")
      return
    }

    try {
      // Initialize mock data service
      initMockDataService()

      // Create the event
      createEvent(eventData)

      toast({
        title: "Success",
        description: "Event created successfully!",
      })

      router.push("/admin/events")
    } catch (error) {
      console.error("Error saving event:", error)
      alert("An error occurred while saving the event")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/admin/events">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">New Event</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Event
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  placeholder="Enter event title"
                  value={eventData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter event location"
                  value={eventData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={eventData.date}
                  onChange={(e) => {
                    // Format the date to display in a readable format
                    const date = new Date(e.target.value)
                    const formattedDate = date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    handleChange("date", formattedDate)
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={eventData.status} onValueChange={(value) => handleChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Upcoming">Upcoming</SelectItem>
                    <SelectItem value="Past">Past</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="attendees">Expected Attendees</Label>
                <Input
                  id="attendees"
                  type="number"
                  placeholder="Enter expected number of attendees"
                  value={eventData.attendees.toString()}
                  onChange={(e) => handleChange("attendees", Number.parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter event description"
                  rows={5}
                  value={eventData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
