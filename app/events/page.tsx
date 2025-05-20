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
import { ArrowLeft, Save, Calendar, Upload } from "lucide-react"
import { createEvent, initMockDataService, getMedia, useAppStore, type AppState } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

interface MediaItem {
  id: number
  name: string
  url: string
  type: string
  size: string
  dimensions: string
  folder: string
  parent?: string
  isFolder?: boolean
  uploadedOn?: string
  altText?: string
  caption?: string
}

export default function NewEventPage() {
  const router = useRouter()
  const [eventData, setEventData] = useState({
    title: "",
    location: "",
    date: "",
    status: "Upcoming",
    attendees: 0,
    description: "",
    image: "",
  })
  const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false)
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const refreshData = useAppStore((state: AppState) => state.refreshData)
  const storeMedia = useAppStore((state: AppState) => state.media)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    refreshData()
  }, [refreshData])

  useEffect(() => {
    // Update local state when store changes
    setMediaItems(storeMedia.length > 0 ? storeMedia : getMedia())
  }, [storeMedia])

  const handleChange = (field: string, value: string | number) => {
    setEventData({
      ...eventData,
      [field]: value,
    })
  }

  const handleSave = () => {
    // Validate required fields
    if (!eventData.title) {
      toast({
        title: "Error",
        description: "Please enter an event title",
        variant: "destructive",
      })
      return
    }

    if (!eventData.location) {
      toast({
        title: "Error",
        description: "Please enter an event location",
        variant: "destructive",
      })
      return
    }

    if (!eventData.date) {
      toast({
        title: "Error",
        description: "Please enter an event date",
        variant: "destructive",
      })
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
      toast({
        title: "Error",
        description: "An error occurred while creating the event",
        variant: "destructive",
      })
    }
  }

  const handleSelectMedia = (mediaId: number) => {
    const selectedItem = mediaItems.find((item: any) => item.id === mediaId)
    if (selectedItem) {
      setEventData({
        ...eventData,
        image: selectedItem.url,
      })
      setSelectedMedia(mediaId)
    }
  }

  const confirmMediaSelection = () => {
    setIsMediaDialogOpen(false)
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
                      type="date"
                      placeholder="e.g., June 15, 2023"
                      value={eventData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>
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
                    value={eventData.git branch -M mainattendees.toString()}
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
                {eventData.image ? (
                  <div className="relative w-full aspect-video">
                    <img
                      src={eventData.image || "/placeholder.svg"}
                      alt="Event banner"
                      className="rounded-md object-cover w-full h-full"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => handleChange("image", "")}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Upload an event banner image</p>
                    <Button variant="outline" onClick={() => setIsMediaDialogOpen(true)}>
                      Select Image
                    </Button>
                  </>
                )}
              </div>

              <p className="text-xs text-muted-foreground mt-2">Recommended size: 1600 × 800 pixels</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Media Selection Dialog */}
      <Dialog open={isMediaDialogOpen} onOpenChange={setIsMediaDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogTitle>Select Media</DialogTitle>
          <DialogDescription>Choose an image for your event</DialogDescription>

          <div className="grid grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-2">
            {mediaItems
              .filter((item: any) => item.type.startsWith("image"))
              .map((item: any) => (
                <div
                  key={item.id}
                  className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                    selectedMedia === item.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleSelectMedia(item.id)}
                >
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src={item.url || "/placeholder.svg?height=200&width=200"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                  </div>
                </div>
              ))}

            {mediaItems.filter((item: any) => item.type.startsWith("image")).length === 0 && (
              <div className="col-span-3 text-center py-10 text-muted-foreground">
                No images found. Please upload images in the Media Library first.
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsMediaDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmMediaSelection}>Select</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
