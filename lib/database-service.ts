'use server'

import { MongoClient, ObjectId, Document, WithId, Filter, UpdateFilter } from 'mongodb'
import { User, Blog, Event, Contact, Media, Settings } from '@/types'
import bcrypt from 'bcryptjs'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const client = new MongoClient(uri)

async function connect() {
  try {
    await client.connect()
    return client.db('zuper')
  } catch (error) {
    console.error('Database connection error:', error)
    throw error
  }
}

async function getCollection<T extends Document>(name: string) {
  const db = await connect()
  return db.collection<T>(name)
}

async function getAll<T extends Document>(collection: string): Promise<WithId<T>[]> {
  const coll = await getCollection<T>(collection)
  return coll.find().toArray()
}

async function getById<T extends Document>(collection: string, id: string): Promise<WithId<T> | null> {
  const coll = await getCollection<T>(collection)
  return coll.findOne({ _id: new ObjectId(id) } as Filter<T>)
}

async function create<T extends Document>(collection: string, data: Omit<T, '_id'>): Promise<WithId<T>> {
  const coll = await getCollection<T>(collection)
  const result = await coll.insertOne(data as any)
  return { ...data, _id: result.insertedId } as WithId<T>
}

async function update<T extends Document>(collection: string, id: string, data: Partial<T>): Promise<WithId<T> | null> {
  const coll = await getCollection<T>(collection)
  const result = await coll.findOneAndUpdate(
    { _id: new ObjectId(id) } as Filter<T>,
    { $set: data } as UpdateFilter<T>,
    { returnDocument: 'after' }
  )
  return result as WithId<T> | null
}

async function remove(collection: string, id: string): Promise<boolean> {
  const coll = await getCollection(collection)
  const result = await coll.deleteOne({ _id: new ObjectId(id) })
  return result.deletedCount > 0
}

// Blog operations
export async function getBlogs(): Promise<WithId<Blog>[]> {
  return getAll<Blog>('blogs')
}

export async function getBlogById(id: string): Promise<WithId<Blog> | null> {
  return getById<Blog>('blogs', id)
}

export async function createBlog(data: Omit<Blog, '_id'>): Promise<WithId<Blog>> {
  return create<Blog>('blogs', data)
}

export async function updateBlog(id: string, data: Partial<Blog>): Promise<WithId<Blog> | null> {
  return update<Blog>('blogs', id, data)
}

export async function deleteBlog(id: string): Promise<boolean> {
  return remove('blogs', id)
}

// Event operations
export async function getEvents(): Promise<WithId<Event>[]> {
  return getAll<Event>('events')
}

export async function getEventById(id: string): Promise<WithId<Event> | null> {
  return getById<Event>('events', id)
}

export async function createEvent(data: Omit<Event, '_id'>): Promise<WithId<Event>> {
  return create<Event>('events', data)
}

export async function updateEvent(id: string, data: Partial<Event>): Promise<WithId<Event> | null> {
  return update<Event>('events', id, data)
}

export async function deleteEvent(id: string): Promise<boolean> {
  return remove('events', id)
}

// Contact operations
export async function getContacts(): Promise<WithId<Contact>[]> {
  return getAll<Contact>('contacts')
}

export async function getContactById(id: string): Promise<WithId<Contact> | null> {
  return getById<Contact>('contacts', id)
}

export async function createContact(data: Omit<Contact, '_id'>): Promise<WithId<Contact>> {
  return create<Contact>('contacts', data)
}

export async function updateContact(id: string, data: Partial<Contact>): Promise<WithId<Contact> | null> {
  return update<Contact>('contacts', id, data)
}

export async function deleteContact(id: string): Promise<boolean> {
  return remove('contacts', id)
}

// Media operations
export async function getMedia(): Promise<WithId<Media>[]> {
  return getAll<Media>('media')
}

export async function getMediaById(id: string): Promise<WithId<Media> | null> {
  return getById<Media>('media', id)
}

export async function createMedia(data: Omit<Media, '_id'>): Promise<WithId<Media>> {
  return create<Media>('media', data)
}

export async function updateMedia(id: string, data: Partial<Media>): Promise<WithId<Media> | null> {
  return update<Media>('media', id, data)
}

export async function deleteMedia(id: string): Promise<boolean> {
  return remove('media', id)
}

// Settings operations
export async function getSettings(): Promise<WithId<Settings> | null> {
  return getById<Settings>('settings', 'global')
}

export async function updateSettings(data: Partial<Settings>): Promise<WithId<Settings> | null> {
  return update<Settings>('settings', 'global', data)
}

// User operations
export async function getUserByEmail(email: string): Promise<WithId<User> | null> {
  const coll = await getCollection<User>('users')
  return coll.findOne({ email } as Filter<User>)
}

export async function createUser(data: Omit<User, '_id'>): Promise<WithId<User>> {
  return create<User>('users', data)
}

export async function updateUser(id: string, data: Partial<User>): Promise<WithId<User> | null> {
  return update<User>('users', id, data)
}

export async function deleteUser(id: string): Promise<boolean> {
  return remove('users', id)
}

// Authentication functions
export async function checkAuth(): Promise<boolean> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/auth/verify`, {
      method: 'GET',
      credentials: 'include',
    })

    if (response.ok) {
      const data = await response.json()
      return data.authenticated
    }
    return false
  } catch (error) {
    console.error('Error checking auth:', error)
    return false
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    console.log('Attempting login for email:', email)
    const user = await getUserByEmail(email)

    if (!user) {
      console.log('User not found:', email)
      return false
    }

    console.log('User found, comparing passwords')
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      console.log('Invalid password for user:', email)
      return false
    }

    // Call the auth API to handle token generation and storage
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        action: 'login',
        email: user.email,
        password: password,
        role: user.role 
      }),
      credentials: 'include',
    })

    if (!response.ok) {
      console.log('Failed to generate token')
      return false
    }

    return true
  } catch (error) {
    console.error('Error during login:', error)
    return false
  }
}

export async function logout(): Promise<boolean> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
    return response.ok
  } catch (error) {
    console.error('Error during logout:', error)
    return false
  }
}

// For demo purposes, create a user if it doesn't exist
export async function createDemoUser(): Promise<boolean> {
  try {
    console.log('Checking for existing demo user')
    const user = await getUserByEmail('admin@example.com')

    if (!user) {
      console.log('Creating new demo user')
      const hashedPassword = await bcrypt.hash('password', 10)
      const newUser = await createUser({
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      console.log('Demo user created:', newUser)
    } else {
      console.log('Demo user already exists')
    }

    return true
  } catch (error) {
    console.error('Error creating demo user:', error)
    return false
  }
}
