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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ImageIcon, Save, Eye } from "lucide-react"
import { BlogEditor } from "@/components/admin/blog-editor"
import { createBlog, initMockDataService } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"

export default function NewBlogPage() {
  const router = useRouter()
  const [blogData, setBlogData] = useState({
    title: "Chatar Patar: Standardizing Street Food Across India",
    slug: "chatar-patar-standardizing-street-food",
    excerpt: "Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India. With a vision to standardize the experience of street food, Prashant Kulkarni embarked on a journey to offer a consistent, hygienic, and flavorful street food experience to people across the country.",
    category: "Innovation",
    content: `
      <h2>Preserving Authentic Flavors</h2>
      <p>Chatar Patar's journey began with a deep-rooted love for street food and an unwavering commitment to preserving its authentic flavors. Prashant Kulkarni understood the significance of street food as an integral part of Indian culinary culture. With meticulous attention to detail, he curated recipes and cooking techniques that honored tradition while enhancing the taste and presentation of beloved street food dishes.</p>

      <h2>Quality and Hygiene</h2>
      <p>Setting new benchmarks in the street food industry, Chatar Patar prioritizes quality and hygiene without compromising on taste. Prashant Kulkarni implemented stringent quality control measures and introduced standardized processes across all Chatar Patar outlets. From sourcing fresh ingredients to ensuring impeccable food handling and preparation, every step is carefully executed to deliver a safe and enjoyable street food experience.</p>

      <h2>Innovation and Variety</h2>
      <p>Chatar Patar is synonymous with innovation and variety. Prashant Kulkarni's culinary expertise and passion for experimentation have resulted in a diverse menu that surprises and delights customers. From unique flavor combinations to innovative presentations, Chatar Patar continuously pushes the boundaries of street food, enticing food enthusiasts with an array of exciting options to satisfy their cravings.</p>

      <h2>Expanding Footprint</h2>
      <p>Chatar Patar's success story is evident in its widespread presence across the country. What began as a small endeavor has now grown into a national brand, capturing the hearts and taste buds of people in various cities. Prashant Kulkarni's unwavering commitment to excellence, coupled with a robust franchise model, has fueled the brand's expansion and made Chatar Patar accessible to food lovers nationwide.</p>

      <h2>Social Responsibility</h2>
      <p>Chatar Patar goes beyond culinary excellence and embraces social responsibility. Prashant Kulkarni believes in giving back to the communities that have supported the brand's growth. Chatar Patar actively engages in initiatives to support local farmers, reduce food waste, and contribute to environmental sustainability. This ethos of social responsibility is ingrained in every aspect of the brand's operations.</p>

      <h2>Inspiring Entrepreneurship</h2>
      <p>Prashant Kulkarni's entrepreneurial journey with Chatar Patar has become an inspiration for budding entrepreneurs in the food industry. His relentless pursuit of excellence, commitment to quality, and dedication to preserving the essence of street food serve as a guiding light for those aspiring to create a positive impact through their own ventures.</p>

      <p>Chatar Patar's mission to standardize street food across India has reshaped the perception of this culinary delight. Prashant Kulkarni's unwavering vision, coupled with the brand's commitment to authenticity, quality, and innovation, has elevated street food to new heights. Chatar Patar continues to tantalize taste buds, delighting food enthusiasts with its diverse offerings while upholding the rich tapestry of flavors that define Indian street food.</p>
    `,
    featuredImage: "/placeholder.svg",
    status: "Published",
  })

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
  }, [])

  const handleChange = (field: string, value: string) => {
    setBlogData({
      ...blogData,
      [field]: value,
    })

    // Auto-generate slug from title
    if (field === "title") {
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

    // Update status and save
    const blogToSave = {
      ...blogData,
      status: status === "publish" ? "Published" : "Draft",
    }

    try {
      createBlog(blogToSave)
      toast({
        title: "Success",
        description: `Blog ${status === "publish" ? "published" : "saved as draft"}!`,
      })
      router.push("/admin/blogs")
    } catch (error) {
      console.error("Error saving blog:", error)
      alert("An error occurred while saving the blog")
    }
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
          <h1 className="text-3xl font-bold tracking-tight">New Blog Post</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => handleSave("draft")}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
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
