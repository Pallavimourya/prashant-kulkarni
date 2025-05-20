"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Filter, MoreHorizontal, Upload, FolderPlus, ImageIcon, Trash, Edit } from "lucide-react"
import { getMedia, createMedia, deleteMedia, initMockDataService } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"

export default function MediaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const [mediaItems, setMediaItems] = useState([])
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [newMedia, setNewMedia] = useState({
    name: "",
    altText: "",
    caption: "",
    url: "",
    type: "",
    size: "",
    dimensions: "",
  })

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    // Load media from the mock service
    setMediaItems(getMedia())
  }, [])

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this media item?")) {
      deleteMedia(id)
      setMediaItems(getMedia()) // Refresh the list
      setSelectedMedia(null)
    }
  }

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMedia.name || !newMedia.url) {
      alert("Please provide a name and upload a file")
      return
    }

    try {
      createMedia({
        ...newMedia,
        type: newMedia.type || "image/jpeg",
        size: newMedia.size || "1.2 MB",
        dimensions: newMedia.dimensions || "1200 × 800",
      })

      setMediaItems(getMedia()) // Refresh the list
      setIsUploadDialogOpen(false)
      setNewMedia({
        name: "",
        altText: "",
        caption: "",
        url: "",
        type: "",
        size: "",
        dimensions: "",
      })

      toast({
        title: "Success",
        description: "Media uploaded successfully!",
      })
    } catch (error) {
      console.error("Error uploading media:", error)
      alert("An error occurred while uploading the media")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you'd upload this to your server/CDN
      // For demo, we'll use a local URL
      const fileUrl = URL.createObjectURL(file)

      setNewMedia({
        ...newMedia,
        name: file.name,
        url: fileUrl,
        type: file.type,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        dimensions: "1200 × 800", // This would normally be determined after upload
      })
    }
  }

  const filteredMedia = mediaItems.filter(
    (item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
        <div className="flex gap-2">
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Media</DialogTitle>
                <DialogDescription>Upload images or videos to your media library.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleUpload}>
                <div className="border-2 border-dashed rounded-md p-10 flex flex-col items-center justify-center text-center">
                  {newMedia.url ? (
                    <div className="relative w-full aspect-video">
                      <img
                        src={newMedia.url || "/placeholder.svg"}
                        alt="Preview"
                        className="rounded-md object-cover w-full h-full"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setNewMedia({ ...newMedia, url: "" })}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                      <Input
                        type="file"
                        className="hidden"
                        id="media-upload"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("media-upload")?.click()}
                      >
                        Select Files
                      </Button>
                    </>
                  )}
                </div>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="media-name">Name</Label>
                    <Input
                      id="media-name"
                      value={newMedia.name}
                      onChange={(e) => setNewMedia({ ...newMedia, name: e.target.value })}
                      placeholder="Enter a name for this media"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alt-text">Alt Text</Label>
                    <Input
                      id="alt-text"
                      value={newMedia.altText}
                      onChange={(e) => setNewMedia({ ...newMedia, altText: e.target.value })}
                      placeholder="Describe the image for accessibility"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="caption">Caption (optional)</Label>
                    <Textarea
                      id="caption"
                      value={newMedia.caption}
                      onChange={(e) => setNewMedia({ ...newMedia, caption: e.target.value })}
                      placeholder="Add a caption to your media"
                    />
                  </div>
                </div>
                <DialogFooter className="mt-4">
                  <Button type="button" variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Upload</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <FolderPlus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search media..."
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
              <DropdownMenuItem onClick={() => setSearchTerm("")}>All Media</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("image")}>Images</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("video")}>Videos</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSearchTerm("document")}>Documents</DropdownMenuItem>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredMedia.length > 0 ? (
              filteredMedia.map((item: any) => (
                <div
                  key={item.id}
                  className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                    selectedMedia === item.id ? "ring-2 ring-theme-primary" : ""
                  }`}
                  onClick={() => setSelectedMedia(selectedMedia === item.id ? null : item.id)}
                >
                  {item.type.startsWith("image") ? (
                    <div className="relative aspect-square bg-gray-100">
                      <img
                        src={item.url || "/placeholder.svg?height=200&width=200"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : item.type.startsWith("video") ? (
                    <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="bg-white/80 rounded-full p-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 5V19L19 12L8 5Z" fill="black" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
                      <ImageIcon className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.size}</p>
                  </div>

                  {selectedMedia === item.id && (
                    <div className="absolute top-2 right-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              navigator.clipboard.writeText(item.url)
                              toast({ title: "URL copied to clipboard" })
                            }}
                          >
                            Copy URL
                          </DropdownMenuItem>
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(item.id)}>
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">
                No media found. {searchTerm && "Try a different search term or "}
                <Button variant="link" onClick={() => setIsUploadDialogOpen(true)}>
                  upload some media
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
                  <th className="text-left p-3 font-medium">File</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Size</th>
                  <th className="text-left p-3 font-medium">Dimensions</th>
                  <th className="text-left p-3 font-medium">Uploaded</th>
                  <th className="p-3 w-[50px]"></th>
                </tr>
              </thead>
              <tbody>
                {filteredMedia.length > 0 ? (
                  filteredMedia.map((item: any) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                            {item.type.startsWith("image") ? (
                              <img
                                src={item.url || "/placeholder.svg?height=40&width=40"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : item.type.startsWith("video") ? (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8 5V19L19 12L8 5Z" fill="#6B7280" />
                              </svg>
                            ) : (
                              <ImageIcon className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-muted-foreground">{item.type}</td>
                      <td className="p-3 text-muted-foreground">{item.size}</td>
                      <td className="p-3 text-muted-foreground">{item.dimensions}</td>
                      <td className="p-3 text-muted-foreground">{item.uploadedOn}</td>
                      <td className="p-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                navigator.clipboard.writeText(item.url)
                                toast({ title: "URL copied to clipboard" })
                              }}
                            >
                              Copy URL
                            </DropdownMenuItem>
                            <DropdownMenuItem>Download</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(item.id)}>
                              <Trash className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-4 text-muted-foreground">
                      No media found. {searchTerm && "Try a different search term or "}
                      <Button variant="link" onClick={() => setIsUploadDialogOpen(true)}>
                        upload some media
                      </Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
