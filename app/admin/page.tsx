"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { initMockDataService } from "@/lib/mock-data-service"
import { BarChart, Activity, Users, FileText, Calendar, MessageSquare } from "lucide-react"

export default function AdminDashboard() {
  useEffect(() => {
    // Initialize mock data service when the dashboard loads
    initMockDataService()
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Blogs</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="p-2 bg-theme-primary/10 rounded-full">
                <FileText className="h-6 w-6 text-theme-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Activity className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+12%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                <p className="text-3xl font-bold">18</p>
              </div>
              <div className="p-2 bg-theme-primary/10 rounded-full">
                <Calendar className="h-6 w-6 text-theme-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Activity className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+5%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Contacts</p>
                <p className="text-3xl font-bold">142</p>
              </div>
              <div className="p-2 bg-theme-primary/10 rounded-full">
                <MessageSquare className="h-6 w-6 text-theme-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Activity className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+18%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Visitors</p>
                <p className="text-3xl font-bold">28.4K</p>
              </div>
              <div className="p-2 bg-theme-primary/10 rounded-full">
                <Users className="h-6 w-6 text-theme-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Activity className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">+24%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Website Traffic</CardTitle>
              <CardDescription>Website traffic over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[300px] flex items-center justify-center">
                <BarChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">Traffic visualization will appear here</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions on your website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-theme-primary mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New blog post published</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Popular Content</CardTitle>
                <CardDescription>Most viewed pages this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-theme-primary/10 flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-theme-primary">{i}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">The Future of Food Franchising in India</p>
                        <p className="text-xs text-muted-foreground">4,256 views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed website analytics will appear here</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Analytics data will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Reports will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
