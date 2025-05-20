import { NextResponse } from 'next/server'
import {
  getBlogs, getBlogById, createBlog, updateBlog, deleteBlog,
  getEvents, getEventById, createEvent, updateEvent, deleteEvent,
  getContacts, getContactById, createContact, updateContact, deleteContact,
  getMedia, getMediaById, createMedia, updateMedia, deleteMedia,
  getSettings, updateSettings
} from '@/lib/database-service'
import { authService } from '@/lib/auth-service'

// Blog routes
export async function GET(request: Request) {
  try {
    // Check authentication
    if (!await authService.isAuthenticated()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const id = searchParams.get('id')

    let data

    switch (type) {
      case 'blogs':
        data = id ? await getBlogById(id) : await getBlogs()
        break
      case 'events':
        data = id ? await getEventById(id) : await getEvents()
        break
      case 'contacts':
        data = id ? await getContactById(id) : await getContacts()
        break
      case 'media':
        data = id ? await getMediaById(id) : await getMedia()
        break
      case 'settings':
        data = await getSettings()
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // Check authentication
    if (!await authService.isAuthenticated()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const data = await request.json()

    let result

    switch (type) {
      case 'blogs':
        result = await createBlog(data)
        break
      case 'events':
        result = await createEvent(data)
        break
      case 'contacts':
        result = await createContact(data)
        break
      case 'media':
        result = await createMedia(data)
        break
      case 'settings':
        result = await updateSettings(data)
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    // Check authentication
    if (!await authService.isAuthenticated()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const id = searchParams.get('id')
    const data = await request.json()

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    let result

    switch (type) {
      case 'blogs':
        result = await updateBlog(id, data)
        break
      case 'events':
        result = await updateEvent(id, data)
        break
      case 'contacts':
        result = await updateContact(id, data)
        break
      case 'media':
        result = await updateMedia(id, data)
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    // Check authentication
    if (!await authService.isAuthenticated()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    let result

    switch (type) {
      case 'blogs':
        result = await deleteBlog(id)
        break
      case 'events':
        result = await deleteEvent(id)
        break
      case 'contacts':
        result = await deleteContact(id)
        break
      case 'media':
        result = await deleteMedia(id)
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
