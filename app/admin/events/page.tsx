"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { adminService } from "@/lib/admin-service"
import { ExternalLink, Edit, Trash2 } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  status: string
  attendees: number
  videoUrl?: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [isAddingEvent, setIsAddingEvent] = useState(false)
  const [newEvent, setNewEvent] = useState<Omit<Event, "id">>({
    title: "",
    date: "",
    location: "",
    description: "",
    status: "Published",
    attendees: 0,
    videoUrl: "",
  })

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {
    try {
      const events = adminService.getEvents()
      setEvents(events)
    } catch (error) {
      toast.error("Failed to load events")
    }
  }

  const handleEdit = (event: Event) => {
    setEditingEvent({ ...event })
  }

  const handleSave = () => {
    if (!editingEvent) return

    try {
      adminService.updateEvent(editingEvent)
      loadEvents()
      setEditingEvent(null)
      toast.success("Event updated successfully")
    } catch (error) {
      toast.error("Failed to update event")
    }
  }

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    try {
      adminService.deleteEvent(id)
      loadEvents()
      toast.success("Event deleted successfully")
    } catch (error) {
      toast.error("Failed to delete event")
    }
  }

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) {
      toast.error("Please fill in all required fields")
      return
    }

    try {
      adminService.addEvent(newEvent)
      loadEvents()
      setIsAddingEvent(false)
      setNewEvent({
        title: "",
        date: "",
        location: "",
        description: "",
        status: "Published",
        attendees: 0,
        videoUrl: "",
      })
      toast.success("Event added successfully")
    } catch (error) {
      toast.error("Failed to add event")
    }
  }

  const handleVideoClick = (url: string) => {
    if (!url) return
    const videoUrl = url.startsWith('http') ? url : `https://${url}`
    window.open(videoUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button onClick={() => setIsAddingEvent(true)}>Add New Event</Button>
      </div>

      {isAddingEvent && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Event Title *"
                required
              />
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                required
              />
              <Input
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                placeholder="Location *"
                required
              />
              <Textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Description"
              />
              <Input
                value={newEvent.videoUrl}
                onChange={(e) => setNewEvent({ ...newEvent, videoUrl: e.target.value })}
                placeholder="Video URL (YouTube)"
              />
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsAddingEvent(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddEvent}>Add Event</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{event.title}</span>
                <div className="space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEdit(event)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(event.id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {editingEvent && editingEvent.id === event.id ? (
                <div className="space-y-4">
                  <Input
                    value={editingEvent.title}
                    onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })}
                    placeholder="Event Title"
                    required
                  />
                  <Input
                    type="date"
                    value={editingEvent.date}
                    onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                    required
                  />
                  <Input
                    value={editingEvent.location}
                    onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })}
                    placeholder="Location"
                    required
                  />
                  <Textarea
                    value={editingEvent.description}
                    onChange={(e) => setEditingEvent({ ...editingEvent, description: e.target.value })}
                    placeholder="Description"
                  />
                  <Input
                    value={editingEvent.videoUrl}
                    onChange={(e) => setEditingEvent({ ...editingEvent, videoUrl: e.target.value })}
                    placeholder="Video URL (YouTube)"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setEditingEvent(null)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>Save Changes</Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Status:</strong> {event.status}</p>
                  <p><strong>Attendees:</strong> {event.attendees}</p>
                  {event.videoUrl && (
                    <div className="mt-4">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-theme-primary hover:underline flex items-center"
                        onClick={() => handleVideoClick(event.videoUrl!)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
