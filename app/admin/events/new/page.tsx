"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Save, Calendar } from "lucide-react"
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

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
  }, [])

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
      createEvent(eventData)
      toast({
        title: "Success",
        description: "Event created successfully!",
      })
      router.push("/admin/events")
    } catch (error) {
      console.error("Error creating event:", error)
      alert("An error occurred while creating the event")
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
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
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
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <Input
                      id="date"
                      placeholder="e.g., June 15, 2023"
                      value={eventData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Enter date in format: Month DD, YYYY</p>
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
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Event Settings</h3>

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
                      <SelectItem value="Draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendees">Expected Attendees</Label>
                  <Input
                    id="attendees"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={eventData.attendees.toString()}
                    onChange={(e) => handleChange("attendees", Number.parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Event Image</h3>

              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Upload an event banner image</p>
                <Button variant="outline">Select Image</Button>
              </div>

              <p className="text-xs text-muted-foreground mt-2">Recommended size: 1600 × 800 pixels</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
