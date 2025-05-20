import { MongoClient, ObjectId } from 'mongodb'

// Initialize MongoDB client
const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017')

// Connect to MongoDB
async function connect() {
  try {
    await client.connect()
    return client.db('zuper-prashant')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

// Generic CRUD operations
async function getCollection(collectionName: string) {
  const db = await connect()
  return db.collection(collectionName)
}

async function getAll(collectionName: string) {
  const collection = await getCollection(collectionName)
  return collection.find({}).toArray()
}

async function getById(collectionName: string, id: string) {
  const collection = await getCollection(collectionName)
  return collection.findOne({ _id: new ObjectId(id) })
}

async function create(collectionName: string, data: any) {
  const collection = await getCollection(collectionName)
  const result = await collection.insertOne(data)
  return { ...data, _id: result.insertedId }
}

async function update(collectionName: string, id: string, data: any) {
  const collection = await getCollection(collectionName)
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
  return { ...data, _id: id }
}

async function remove(collectionName: string, id: string) {
  const collection = await getCollection(collectionName)
  await collection.deleteOne({ _id: new ObjectId(id) })
  return { _id: id }
}

// Blog operations
export const dataService = {
  // Blog operations
  getBlogs: () => getAll('blogs'),
  getBlogById: (id: string) => getById('blogs', id),
  createBlog: (data: any) => create('blogs', data),
  updateBlog: (id: string, data: any) => update('blogs', id, data),
  deleteBlog: (id: string) => remove('blogs', id),

  // Event operations
  getEvents: () => getAll('events'),
  getEventById: (id: string) => getById('events', id),
  createEvent: (data: any) => create('events', data),
  updateEvent: (id: string, data: any) => update('events', id, data),
  deleteEvent: (id: string) => remove('events', id),

  // Contact operations
  getContacts: () => getAll('contacts'),
  getContactById: (id: string) => getById('contacts', id),
  createContact: (data: any) => create('contacts', data),
  updateContact: (id: string, data: any) => update('contacts', id, data),
  deleteContact: (id: string) => remove('contacts', id),

  // Media operations
  getMedia: () => getAll('media'),
  getMediaById: (id: string) => getById('media', id),
  createMedia: (data: any) => create('media', data),
  updateMedia: (id: string, data: any) => update('media', id, data),
  deleteMedia: (id: string) => remove('media', id),

  // Settings operations
  getSettings: () => getById('settings', 'global'),
  updateSettings: (data: any) => update('settings', 'global', data),
} 