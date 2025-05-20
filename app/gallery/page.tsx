"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Filter, Edit, Trash, Upload } from "lucide-react"
import { initMockDataService, getMedia, useAppStore, type AppState } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"

interface GalleryItem {
  id: number
  title: string
  category: string
  year: string
  image: string
}

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

// Sample gallery data
const initialGalleryItems = [
  {
    id: 1,
    title: "Speaking at Business Conference",
    category: "speaking",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Chatar Patar Store Launch",
    category: "business",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Food Franchise India Summit",
    category: "events",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Community Outreach Program",
    category: "community",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Keynote at Entrepreneurship Conference",
    category: "speaking",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Tasty Alphabets Product Launch",
    category: "business",
    year: "2021",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function AdminGalleryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [newItem, setNewItem] = useState<Omit<GalleryItem, 'id'>>({
    title: "",
    category: "",
    year: "",
    image: "",
  })
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const storeMedia = useAppStore((state) => state.media)
  const refreshData = useAppStore((state) => state.refreshData)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    refreshData()
  }, [refreshData])

  useEffect(() => {
    // Update local state when store changes
    setMediaItems(storeMedia.length > 0 ? storeMedia : getMedia())
  }, [storeMedia])

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      setGalleryItems(galleryItems.filter((item) => item.id !== id))
      toast({
        title: "Gallery Item Deleted",
        description: "Gallery item has been deleted successfully",
      })
    }
  }

  const handleAddItem = () => {
    if (!newItem.title || !newItem.category || !newItem.year || !newItem.image) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    const newGalleryItem = {
      ...newItem,
      id: Math.max(...galleryItems.map((item) => item.id)) + 1,
    }

    setGalleryItems([...galleryItems, newGalleryItem])
    setIsAddDialogOpen(false)
    setNewItem({
      title: "",
      category: "",
      year: "",
      image: "",
    })

    toast({
      title: "Success",
      description: "Gallery item added successfully!",
    })
  }

  const handleEditItem = () => {
    if (!selectedItem || !selectedItem.title || !selectedItem.category || !selectedItem.year || !selectedItem.image) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setGalleryItems(galleryItems.map((item) => (item.id === selectedItem.id ? selectedItem : item)))
    setIsEditDialogOpen(false)

    toast({
      title: "Success",
      description: "Gallery item updated successfully!",
    })
  }

  const handleSelectMedia = (mediaId: number, forNew = true) => {
    const selectedMediaItem = mediaItems.find((item) => item.id === mediaId)
    if (selectedMediaItem) {
      if (forNew) {
        setNewItem({
          ...newItem,
          image: selectedMediaItem.url,
        })
      } else if (selectedItem) {
        setSelectedItem({
          ...selectedItem,
          image: selectedMediaItem.url,
        })
      }
      setSelectedMedia(mediaId)
    }
  }

  const confirmMediaSelection = () => {
    setIsMediaDialogOpen(false)
  }

  const openEditDialog = (item: any) => {
    setSelectedItem(item)
    setIsEditDialogOpen(true)
  }

  const filteredGalleryItems = galleryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.year.includes(searchTerm),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Gallery Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Item
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search gallery..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSearchTerm("")}>All Items</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("speaking")}>Speaking</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("business")}>Business</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("events")}>Events</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("community")}>Community</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("2023")}>2023</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("2022")}>2022</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("2021")}>2021</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="grid">
        <TabsList className="mb-4">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGalleryItems.length > 0 ? (
              filteredGalleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img
                      src={item.image || "/placeholder.svg?height=300&width=500"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-white/80"
                        onClick={() => openEditDialog(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-white/80"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span className="capitalize">{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">
                No gallery items found. {searchTerm && "Try a different search term or "}
                <Button variant="link" onClick={() => setIsAddDialogOpen(true)}>
                  add a new item
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <div className="border rounded-md">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium">Category</th>
                  <th className="text-left p-3 font-medium">Year</th>
                  <th className="p-3 w-[100px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGalleryItems.length > 0 ? (
                  filteredGalleryItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg?height=40&width=40"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      </td>
                      <td className="p-3 capitalize">{item.category}</td>
                      <td className="p-3">{item.year}</td>
                      <td className="p-3">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" onClick={() => openEditDialog(item)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-muted-foreground">
                      No gallery items found. {searchTerm && "Try a different search term or "}
                      <Button variant="link" onClick={() => setIsAddDialogOpen(true)}>
                        add a new item
                      </Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Add New Item Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Gallery Item</DialogTitle>
            <DialogDescription>Add a new item to your gallery.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                placeholder="Enter title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={newItem.category} onValueChange={(value) => setNewItem({ ...newItem, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="speaking">Speaking</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Select value={newItem.year} onValueChange={(value) => setNewItem({ ...newItem, year: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Image</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                {newItem.image ? (
                  <div className="relative w-full aspect-video">
                    <img
                      src={newItem.image || "/placeholder.svg"}
                      alt="Gallery item"
                      className="rounded-md object-cover w-full h-full"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setNewItem({ ...newItem, image: "" })}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Select an image from your media library</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsMediaDialogOpen(true)
                      }}
                    >
                      Select Image
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddItem}>Add Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Item Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Gallery Item</DialogTitle>
            <DialogDescription>Update this gallery item.</DialogDescription>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={selectedItem.title}
                  onChange={(e) => setSelectedItem({ ...selectedItem, title: e.target.value })}
                  placeholder="Enter title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select
                  value={selectedItem.category}
                  onValueChange={(value) => setSelectedItem({ ...selectedItem, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="speaking">Speaking</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="events">Events</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-year">Year</Label>
                <Select
                  value={selectedItem.year}
                  onValueChange={(value) => setSelectedItem({ ...selectedItem, year: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Image</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                  {selectedItem.image ? (
                    <div className="relative w-full aspect-video">
                      <img
                        src={selectedItem.image || "/placeholder.svg"}
                        alt="Gallery item"
                        className="rounded-md object-cover w-full h-full"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setSelectedItem({ ...selectedItem, image: "" })}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Select an image from your media library</p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsMediaDialogOpen(true)
                        }}
                      >
                        Select Image
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditItem}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Media Selection Dialog */}
      <Dialog open={isMediaDialogOpen} onOpenChange={setIsMediaDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogTitle>Select Media</DialogTitle>
          <DialogDescription>Choose an image for your gallery item</DialogDescription>

          <div className="grid grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-2">
            {mediaItems
              .filter((item: any) => item.type?.startsWith("image"))
              .map((item: any) => (
                <div
                  key={item.id}
                  className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                    selectedMedia === item.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleSelectMedia(item.id, !isEditDialogOpen)}
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

            {mediaItems.filter((item: any) => item.type?.startsWith("image")).length === 0 && (
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
