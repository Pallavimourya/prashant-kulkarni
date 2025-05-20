import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  email: string
  password: string
  name?: string
  role?: 'admin' | 'user'
  createdAt?: Date
  updatedAt?: Date
}

export interface Blog {
  _id?: ObjectId
  title: string
  content: string
  slug: string
  author?: string
  publishedAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export interface Event {
  _id?: ObjectId
  title: string
  description: string
  date: Date
  location?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Contact {
  _id?: ObjectId
  name: string
  email: string
  message: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Media {
  _id?: ObjectId
  title: string
  type: 'image' | 'video'
  url: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Settings {
  _id?: ObjectId
  siteName: string
  description?: string
  logo?: string
  theme?: {
    primary: string
    secondary: string
    accent: string
  }
  social?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  createdAt?: Date
  updatedAt?: Date
} 