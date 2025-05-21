import { MongoClient, type Db } from "mongodb"
import type { ObjectId } from "mongodb"

// Types for our collections
export interface Blog {
  _id?: ObjectId | string
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

export interface Event {
  _id?: ObjectId | string
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

export interface Contact {
  _id?: ObjectId | string
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: string
  createdAt?: Date
}

export interface Media {
  _id?: ObjectId | string
  name: string
  type: string
  size: string
  dimensions?: string
  uploadedOn: string
  url: string
  altText?: string
  folder: string
  createdAt?: Date
}

export interface Settings {
  _id?: ObjectId | string
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

export interface User {
  _id?: ObjectId | string
  email: string
  password: string
  name?: string
  role: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ActivityLog {
  _id?: ObjectId | string
  userId: string
  action: string
  details: string
  ip?: string
  userAgent?: string
  createdAt: Date
}

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || ""
const MONGODB_DB = process.env.MONGODB_DB || "prashant-kulkarni"

// Check if MongoDB URI is defined
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable")
}

// Global variables
let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase(): Promise<Db> {
  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    return cachedDb
  }

  // Create a new connection
  const client = await MongoClient.connect(MONGODB_URI)
  const db = client.db(MONGODB_DB)

  // Cache the connection
  cachedClient = client
  cachedDb = db

  return db
}
