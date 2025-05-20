"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ImageIcon, Save, Eye } from "lucide-react"
import { BlogEditor } from "@/components/admin/blog-editor"
import { getBlogById, updateBlog, initMockDataService } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const [blogData, setBlogData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category: "",
    content: "",
    featuredImage: "",
    status: "Draft",
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()

    // Load blog data
    if (params.id) {
      const blogId = Number.parseInt(params.id as string)
      const blog = getBlogById(blogId)

      if (blog) {
        setBlogData(blog)
      } else {
        toast({
          title: "Error",
          description: "Blog post not found",
          variant: "destructive",
        })
        router.push("/admin/blogs")
      }
    }

    setLoading(false)
  }, [params.id, router])

  const handleChange = (field: string, value: string) => {
    setBlogData({
      ...blogData,
      [field]: value,
    })

    // Auto-generate slug from title if slug is empty
    if (field === "title" && !blogData.slug) {
      setBlogData({
        ...blogData,
        title: value,
        slug: value
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s+/g, "-"),
      })
    }
  }

  const handleSave = (status: string) => {
    // Validate required fields
    if (!blogData.title) {
      alert("Please enter a blog title")
      return
    }

    if (!blogData.slug) {
      alert("Please enter a blog slug")
      return
    }

    if (!blogData.category) {
      alert("Please select a category")
      return
    }

    // Update status if needed
    const blogToSave = {
      ...blogData,
      status: status === "publish" ? "Published" : blogData.status,
    }

    try {
      updateBlog(Number.parseInt(params.id as string), blogToSave)
      toast({
        title: "Success",
        description: `Blog ${status === "publish" ? "published" : "updated"}!`,
      })
      router.push("/admin/blogs")
    } catch (error) {
      console.error("Error updating blog:", error)
      alert("An error occurred while updating the blog")
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center h-full">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/admin/blogs">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Edit Blog Post</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => handleSave("draft")}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button onClick={() => handleSave("publish")}>
            <Eye className="mr-2 h-4 w-4" />
            Publish
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter blog title"
                    value={blogData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    placeholder="enter-blog-slug"
                    value={blogData.slug}
                    onChange={(e) => handleChange("slug", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief summary of the blog post"
                    rows={3}
                    value={blogData.excerpt}
                    onChange={(e) => handleChange("excerpt", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="write">
                <TabsList className="mb-4">
                  <TabsTrigger value="write">Write</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="write">
                  <BlogEditor value={blogData.content} onChange={(value) => handleChange("content", value)} />
                </TabsContent>
                <TabsContent value="preview">
                  <div className="prose max-w-none">
                    {blogData.content ? (
                      <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
                    ) : (
                      <p className="text-muted-foreground">Nothing to preview yet.</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Settings</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={blogData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Published">Published</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={blogData.category} onValueChange={(value) => handleChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Newsroom">Newsroom</SelectItem>
                      <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Innovation">Innovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Featured Image</h3>

              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                {blogData.featuredImage ? (
                  <div className="relative w-full aspect-video">
                    <img
                      src={blogData.featuredImage || "/placeholder.svg?height=300&width=500"}
                      alt="Featured"
                      className="rounded-md object-cover w-full h-full"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => handleChange("featuredImage", "")}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop an image, or click to browse</p>
                    <Input
                      type="file"
                      className="hidden"
                      id="featured-image"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          // In a real app, you'd upload this to your server/CDN
                          // For demo, we'll use a local URL
                          const imageUrl = URL.createObjectURL(file)
                          handleChange("featuredImage", imageUrl)
                        }
                      }}
                    />
                    <Button variant="outline" onClick={() => document.getElementById("featured-image")?.click()}>
                      Select Image
                    </Button>
                  </>
                )}
              </div>

              <p className="text-xs text-muted-foreground mt-2">Recommended size: 1200 × 630 pixels</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
