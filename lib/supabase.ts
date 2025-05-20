import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project-url.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key",
)

// Types for our database tables
export type Blog = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  status: string
  date: string
  views: number
  featured_image: string
  created_at?: string
  updated_at?: string
}

export type Event = {
  id: number
  title: string
  location: string
  date: string
  status: string
  attendees: number
  description: string
  image: string
  created_at?: string
  updated_at?: string
}

export type Contact = {
  id: number
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: string
  created_at?: string
}

export type Media = {
  id: number
  name: string
  url: string
  type: string
  size: string
  dimensions: string
  folder: string
  parent?: string
  is_folder?: boolean
  uploaded_on: string
  alt_text?: string
  caption?: string
  created_at?: string
}

export type Settings = {
  id: number
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
  created_at?: string
  updated_at?: string
}
