import { MongoClient, ServerApiVersion, type ObjectId } from "mongodb"

// Connection URI
const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://techzuperstudio:admin123@cluster0.44kq4op.mongodb.net/prashant-kulkarni?retryWrites=true&w=majority&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

// Database Name
const dbName = "prashant-kulkarni"

// Connect to MongoDB
export async function connectToDatabase() {
  try {
    await client.connect()
    console.log("Connected to MongoDB")
    return client.db(dbName)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
    throw error
  }
}

// Types for our database collections
export type Blog = {
  _id?: ObjectId
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  status: string
  date: string
  views: number
  featuredImage: string
  createdAt?: Date
  updatedAt?: Date
}

export type Event = {
  _id?: ObjectId
  title: string
  location: string
  date: string
  status: string
  attendees: number
  description: string
  image: string
  createdAt?: Date
  updatedAt?: Date
}

export type Contact = {
  _id?: ObjectId
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: string
  createdAt?: Date
}

export type Media = {
  _id?: ObjectId
  name: string
  url: string
  type: string
  size: string
  dimensions: string
  folder: string
  parent?: string
  isFolder?: boolean
  uploadedOn: string
  altText?: string
  caption?: string
  createdAt?: Date
}

export type Settings = {
  _id?: ObjectId
  general: {
    siteName: string
    tagline: string
    siteDescription: string
    email: string
    phone: string
    address: string
  }
  social: {
    twitter: string
    facebook: string
    linkedin: string
    youtube: string
    instagram: string
    pinterest: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: string
    googleAnalyticsId: string
    enableSitemap: boolean
    enableRobotsTxt: boolean
  }
  createdAt?: Date
  updatedAt?: Date
}

export type User = {
  _id?: ObjectId
  email: string
  password: string
  name?: string
  role: string
  createdAt?: Date
  updatedAt?: Date
}
