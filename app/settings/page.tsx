"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"
import { getSettings, updateSettings, initMockDataService, getMedia, useAppStore } from "@/lib/mock-data-service"
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

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "",
    tagline: "",
    siteDescription: "",
    email: "",
    phone: "",
    address: "",
  })

  const [socialSettings, setSocialSettings] = useState({
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    pinterest: "",
  })

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "",
    metaDescription: "",
    ogImage: "",
    googleAnalyticsId: "",
    enableSitemap: true,
    enableRobotsTxt: true,
  })

  const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false)
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const storeMedia = useAppStore((state) => state.media)
  const refreshData = useAppStore((state) => state.refreshData)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()
    refreshData()

    // Load settings from the mock service
    const settings = getSettings()
    if (settings.general) setGeneralSettings(settings.general)
    if (settings.social) setSocialSettings(settings.social)
    if (settings.seo) setSeoSettings(settings.seo)
  }, [refreshData])

  useEffect(() => {
    // Update local state when store changes
    setMediaItems(storeMedia.length > 0 ? storeMedia : getMedia())
  }, [storeMedia])

  const handleGeneralChange = (field: string, value: string) => {
    setGeneralSettings({
      ...generalSettings,
      [field]: value,
    })
  }

  const handleSocialChange = (field: string, value: string) => {
    setSocialSettings({
      ...socialSettings,
      [field]: value,
    })
  }

  const handleSeoChange = (field: string, value: string | boolean) => {
    setSeoSettings({
      ...seoSettings,
      [field]: value,
    })
  }

  const handleSelectMedia = (mediaId: number) => {
    const selectedItem = mediaItems.find((item: any) => item.id === mediaId)
    if (selectedItem) {
      setSeoSettings({
        ...seoSettings,
        ogImage: selectedItem.url,
      })
      setSelectedMedia(mediaId)
    }
  }

  const confirmMediaSelection = () => {
    setIsMediaDialogOpen(false)
  }

  const handleSave = () => {
    try {
      // Save all settings
      updateSettings({
        general: generalSettings,
        social: socialSettings,
        seo: seoSettings,
      })

      toast({
        title: "Success",
        description: "Settings saved successfully!",
      })
    } catch (error) {
      console.error("Error saving settings:", error)
      toast({
        title: "Error",
        description: "An error occurred while saving settings",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="seo">SEO & Analytics</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure the basic information for your website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={generalSettings.siteName}
                    onChange={(e) => handleGeneralChange("siteName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={generalSettings.tagline}
                    onChange={(e) => handleGeneralChange("tagline", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  rows={3}
                  value={generalSettings.siteDescription}
                  onChange={(e) => handleGeneralChange("siteDescription", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={generalSettings.email}
                    onChange={(e) => handleGeneralChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={generalSettings.phone}
                    onChange={(e) => handleGeneralChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  rows={3}
                  value={generalSettings.address}
                  onChange={(e) => handleGeneralChange("address", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Configure your social media profiles.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter URL</Label>
                  <Input
                    id="twitter"
                    value={socialSettings.twitter}
                    onChange={(e) => handleSocialChange("twitter", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input
                    id="facebook"
                    value={socialSettings.facebook}
                    onChange={(e) => handleSocialChange("facebook", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    value={socialSettings.linkedin}
                    onChange={(e) => handleSocialChange("linkedin", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube URL</Label>
                  <Input
                    id="youtube"
                    value={socialSettings.youtube}
                    onChange={(e) => handleSocialChange("youtube", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input
                    id="instagram"
                    value={socialSettings.instagram}
                    onChange={(e) => handleSocialChange("instagram", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pinterest">Pinterest URL</Label>
                  <Input
                    id="pinterest"
                    value={socialSettings.pinterest}
                    onChange={(e) => handleSocialChange("pinterest", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO & Analytics Settings</CardTitle>
              <CardDescription>Configure search engine optimization and analytics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  value={seoSettings.metaTitle}
                  onChange={(e) => handleSeoChange("metaTitle", e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Recommended length: 50-60 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  rows={3}
                  value={seoSettings.metaDescription}
                  onChange={(e) => handleSeoChange("metaDescription", e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Recommended length: 150-160 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-image">Open Graph Image</Label>
                <div className="flex gap-2">
                  <Input
                    id="og-image"
                    value={seoSettings.ogImage}
                    onChange={(e) => handleSeoChange("ogImage", e.target.value)}
                  />
                  <Button variant="outline" onClick={() => setIsMediaDialogOpen(true)}>
                    Select
                  </Button>
                </div>
                {seoSettings.ogImage && (
                  <div className="mt-2 relative w-full max-w-xs aspect-video">
                    <img
                      src={seoSettings.ogImage || "/placeholder.svg"}
                      alt="OG Image Preview"
                      className="rounded-md object-cover w-full h-full"
                    />
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-1">Recommended size: 1200 × 630 pixels</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ga-id">Google Analytics ID</Label>
                <Input
                  id="ga-id"
                  value={seoSettings.googleAnalyticsId}
                  onChange={(e) => handleSeoChange("googleAnalyticsId", e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="sitemap"
                  checked={seoSettings.enableSitemap}
                  onCheckedChange={(checked) => handleSeoChange("enableSitemap", checked)}
                />
                <Label htmlFor="sitemap">Generate XML Sitemap</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="robots"
                  checked={seoSettings.enableRobotsTxt}
                  onCheckedChange={(checked) => handleSeoChange("enableRobotsTxt", checked)}
                />
                <Label htmlFor="robots">Generate robots.txt</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage admin users and permissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Name</th>
                      <th className="text-left p-3 font-medium">Email</th>
                      <th className="text-left p-3 font-medium">Role</th>
                      <th className="text-left p-3 font-medium">Last Login</th>
                      <th className="p-3 w-[100px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Prashant Kulkarni</td>
                      <td className="p-3">admin@prashantkulkarni.com</td>
                      <td className="p-3">Administrator</td>
                      <td className="p-3">May 17, 2025, 3:45 PM</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Content Manager</td>
                      <td className="p-3">content@prashantkulkarni.com</td>
                      <td className="p-3">Editor</td>
                      <td className="p-3">May 16, 2025, 10:30 AM</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Marketing Team</td>
                      <td className="p-3">marketing@prashantkulkarni.com</td>
                      <td className="p-3">Author</td>
                      <td className="p-3">May 15, 2025, 2:15 PM</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex justify-end">
                <Button>Add New User</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Media Selection Dialog for OG Image */}
      <Dialog open={isMediaDialogOpen} onOpenChange={setIsMediaDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogTitle>Select Media</DialogTitle>
          <DialogDescription>Choose an image for your Open Graph preview</DialogDescription>

          <div className="grid grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-2">
            {mediaItems
              .filter((item: any) => item.type?.startsWith("image"))
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
