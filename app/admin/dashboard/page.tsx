'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Blog, Event, Contact, Media } from '@/types'
import { 
  getBlogs, createBlog, updateBlog, deleteBlog,
  getEvents, createEvent, updateEvent, deleteEvent,
  getContacts, createContact, updateContact, deleteContact,
  getMedia, createMedia, updateMedia, deleteMedia,
  checkAuth, logout
} from '@/lib/database-service'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('blogs')
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuth = await checkAuth()
      if (!isAuth) {
        router.push('/admin/login')
      }
    }

    const loadData = async () => {
      try {
        setLoading(true)
        const [blogsData, eventsData, contactsData, mediaData] = await Promise.all([
          getBlogs(),
          getEvents(),
          getContacts(),
          getMedia()
        ])
        setBlogs(blogsData)
        setEvents(eventsData)
        setContacts(contactsData)
        setMedia(mediaData)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthentication()
    loadData()
  }, [router])

  const handleLogout = async () => {
    await logout()
    router.push('/admin/login')
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>

        <TabsContent value="blogs">
          <Card>
            <CardHeader>
              <CardTitle>Blogs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button onClick={() => router.push('/admin/blogs/new')}>Add New Blog</Button>
              </div>
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div key={blog._id?.toString()} className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-gray-600">{blog.content.substring(0, 150)}...</p>
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => router.push(`/admin/blogs/${blog._id?.toString()}/edit`)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => blog._id && deleteBlog(blog._id.toString())}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button onClick={() => router.push('/admin/events/new')}>Add New Event</Button>
              </div>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event._id?.toString()} className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => router.push(`/admin/events/${event._id?.toString()}/edit`)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => event._id && deleteEvent(event._id.toString())}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact._id?.toString()} className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{contact.name}</h3>
                    <p className="text-gray-600">{contact.email}</p>
                    <p className="text-gray-600">{contact.message}</p>
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => router.push(`/admin/contacts/${contact._id?.toString()}/edit`)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => contact._id && deleteContact(contact._id.toString())}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end mb-4">
                <Button onClick={() => router.push('/admin/media/new')}>Add New Media</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {media.map((item) => (
                  <div key={item._id?.toString()} className="border p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.type}</p>
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => router.push(`/admin/media/${item._id?.toString()}/edit`)}>
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => item._id && deleteMedia(item._id.toString())}>
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 