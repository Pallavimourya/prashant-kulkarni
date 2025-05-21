"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save } from "lucide-react"
import { getSettings, updateSettings, initMockDataService } from "@/lib/mock-data-service"
import { toast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>({
    general: {
      siteName: "",
      tagline: "",
      siteDescription: "",
      email: "",
      phone: "",
      address: "",
    },
    social: {
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      pinterest: "",
    },
    seo: {
      metaTitle: "",
      metaDescription: "",
      ogImage: "",
      googleAnalyticsId: "",
      enableSitemap: true,
      enableRobotsTxt: true,
    },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize mock data service
    initMockDataService()

    // Load settings from the mock service
    const savedSettings = getSettings()
    if (savedSettings) {
      setSettings(savedSettings)
    }

    setLoading(false)
  }, [])

  const handleChange = (section: string, field: string, value: string | boolean) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value,
      },
    })
  }

  const handleSave = () => {
    try {
      updateSettings(settings)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    } catch (error) {
      console.error("Error saving settings:", error)
      toast({
        title: "Error",
        description: "An error occurred while saving settings.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-theme-primary"></div>
      </div>
    )
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
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your website's general information and contact details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => handleChange("general", "siteName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={settings.general.tagline}
                    onChange={(e) => handleChange("general", "tagline", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  rows={3}
                  value={settings.general.siteDescription}
                  onChange={(e) => handleChange("general", "siteDescription", e.target.value)}
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.general.email}
                    onChange={(e) => handleChange("general", "email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={settings.general.phone}
                    onChange={(e) => handleChange("general", "phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  rows={2}
                  value={settings.general.address}
                  onChange={(e) => handleChange("general", "address", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Manage your social media profiles and links.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    placeholder="https://twitter.com/username"
                    value={settings.social.twitter}
                    onChange={(e) => handleChange("social", "twitter", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    placeholder="https://facebook.com/username"
                    value={settings.social.facebook}
                    onChange={(e) => handleChange("social", "facebook", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={settings.social.linkedin}
                    onChange={(e) => handleChange("social", "linkedin", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input
                    id="youtube"
                    placeholder="https://youtube.com/channel/username"
                    value={settings.social.youtube}
                    onChange={(e) => handleChange("social", "youtube", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    placeholder="https://instagram.com/username"
                    value={settings.social.instagram}
                    onChange={(e) => handleChange("social", "instagram", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pinterest">Pinterest</Label>
                  <Input
                    id="pinterest"
                    placeholder="https://pinterest.com/username"
                    value={settings.social.pinterest}
                    onChange={(e) => handleChange("social", "pinterest", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={settings.seo.metaTitle}
                  onChange={(e) => handleChange("seo", "metaTitle", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Recommended length: 50-60 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  rows={3}
                  value={settings.seo.metaDescription}
                  onChange={(e) => handleChange("seo", "metaDescription", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Recommended length: 150-160 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ogImage">Open Graph Image URL</Label>
                <Input
                  id="ogImage"
                  value={settings.seo.ogImage}
                  onChange={(e) => handleChange("seo", "ogImage", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Recommended size: 1200 × 630 pixels</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                <Input
                  id="googleAnalyticsId"
                  placeholder="UA-XXXXXXXXX-X"
                  value={settings.seo.googleAnalyticsId}
                  onChange={(e) => handleChange("seo", "googleAnalyticsId", e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enableSitemap"
                  checked={settings.seo.enableSitemap}
                  onChange={(e) => handleChange("seo", "enableSitemap", e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="enableSitemap">Generate XML Sitemap</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enableRobotsTxt"
                  checked={settings.seo.enableRobotsTxt}
                  onChange={(e) => handleChange("seo", "enableRobotsTxt", e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="enableRobotsTxt">Generate robots.txt</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
