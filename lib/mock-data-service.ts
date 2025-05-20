// Store data in localStorage to persist between page refreshes
const STORAGE_KEYS = {
  BLOGS: "admin_blogs",
  EVENTS: "admin_events",
  CONTACTS: "admin_contacts",
  MEDIA: "admin_media",
  SETTINGS: "admin_settings",
  AUTH: "adminAuthenticated",
}

// First, let's fix the Zustand implementation to ensure it works properly with Next.js
import { create } from "zustand"

// Create a store to manage application state
export interface AppState {
  blogs: Array<{
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    status: string
    date: string
    views: number
    featuredImage: string
  }>
  events: Array<{
    id: number
    title: string
    location: string
    date: string
    status: string
    attendees: number
    description: string
    image: string
  }>
  contacts: Array<{
    id: number
    name: string
    email: string
    subject: string
    message: string
    date: string
    status: string
  }>
  media: Array<{
    id: number
    name: string
    url: string
    type: string
    size: string
    dimensions: string
    folder: string
    parent?: string
    isFolder?: boolean
    uploadedOn?: string
    altText?: string
    caption?: string
  }>
  settings: {
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
  }
  updateBlogs: (blogs: AppState["blogs"]) => void
  updateEvents: (events: AppState["events"]) => void
  updateContacts: (contacts: AppState["contacts"]) => void
  updateMedia: (media: AppState["media"]) => void
  updateSettings: (settings: AppState["settings"]) => void
  refreshData: () => void
}

// Sample default data
const DEFAULT_DATA = {
  blogs: [
    {
      id: 1,
      title: "Chatar Patar: Standardizing Street Food Across India",
      slug: "chatar-patar-standardizing-street-food",
      excerpt:
        "Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India...",
      content:
        "<p>Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India...</p>",
      category: "Newsroom",
      status: "Published",
      date: "June 15, 2023",
      views: 1245,
      featuredImage: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
    {
      id: 2,
      title: "The Future of Food Franchising in India",
      slug: "future-of-food-franchising-india",
      excerpt:
        "As India's food industry continues to evolve, franchising presents unique opportunities for entrepreneurs...",
      content:
        "<p>As India's food industry continues to evolve, franchising presents unique opportunities for entrepreneurs...</p>",
      category: "Business",
      status: "Published",
      date: "May 22, 2023",
      views: 982,
      featuredImage: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
    {
      id: 3,
      title: "Building a Sustainable Food Business Ecosystem",
      slug: "sustainable-food-business-ecosystem",
      excerpt: "Sustainability is no longer just a buzzword but a necessity in the food industry...",
      content: "<p>Sustainability is no longer just a buzzword but a necessity in the food industry...</p>",
      category: "Innovation",
      status: "Draft",
      date: "April 10, 2023",
      views: 0,
      featuredImage: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
  ],
  events: [
    {
      id: 1,
      title: "AIBC Eurasia Dubai",
      location: "Dubai, UAE",
      date: "March 14, 2023",
      status: "Upcoming",
      attendees: 250,
      description: "Join us for the premier blockchain and AI event in Dubai.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
    {
      id: 2,
      title: "Food Business Summit",
      location: "Mumbai, India",
      date: "April 22, 2023",
      status: "Upcoming",
      attendees: 180,
      description: "A gathering of food industry leaders to discuss the future of food business in India.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
    {
      id: 3,
      title: "Entrepreneurship Conference",
      location: "Bangalore, India",
      date: "May 10, 2023",
      status: "Upcoming",
      attendees: 320,
      description: "Learn from successful entrepreneurs and network with like-minded individuals.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      location: "Delhi, India",
      date: "February 15, 2023",
      status: "Past",
      attendees: 150,
      description: "A comprehensive masterclass on digital marketing strategies for businesses.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
    {
      id: 5,
      title: "Franchise Expo 2023",
      location: "Hyderabad, India",
      date: "January 28, 2023",
      status: "Past",
      attendees: 420,
      description: "The largest franchise exhibition in India showcasing various franchise opportunities.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      subject: "Speaking Engagement Request",
      message: "I would like to invite you to speak at our upcoming business conference in Mumbai.",
      date: "May 15, 2023",
      status: "New",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      subject: "Franchise Inquiry",
      message: "I'm interested in opening a franchise of one of your food brands. Could you provide more information?",
      date: "May 14, 2023",
      status: "New",
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit.singh@example.com",
      subject: "Media Interview Request",
      message: "I'm a journalist with Business Today and would like to schedule an interview with you.",
      date: "May 12, 2023",
      status: "Replied",
    },
  ],
  media: [
    {
      id: 1,
      name: "hero-image-1.jpg",
      type: "image/jpeg",
      size: "1.2 MB",
      dimensions: "1920 × 1080",
      uploadedOn: "May 15, 2023",
      url: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      altText: "Hero image for homepage",
      folder: "",
    },
    {
      id: 2,
      name: "about-profile.jpg",
      type: "image/jpeg",
      size: "850 KB",
      dimensions: "800 × 1000",
      uploadedOn: "May 14, 2023",
      url: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      altText: "Prashant Kulkarni profile photo",
      folder: "",
    },
    {
      id: 3,
      name: "event-banner.jpg",
      type: "image/jpeg",
      size: "1.5 MB",
      dimensions: "1600 × 800",
      uploadedOn: "May 12, 2023",
      url: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      altText: "Event banner image",
      folder: "",
    },
  ],
  settings: {
    general: {
      siteName: "Prashant Kulkarni",
      tagline: "Parallel Entrepreneur | Innovator | Speaker | Thinker",
      siteDescription:
        "Official portfolio of Prashant Kulkarni - Director of Tasty Alphabets, CEO of Food Franchise India, and Founder of Zuper World.",
      email: "contact@prashantkulkarni.com",
      phone: "+91 1234567890",
      address: "Food Franchise India, 123 Business Hub, Mumbai, Maharashtra, India",
    },
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      pinterest: "https://pinterest.com",
    },
    seo: {
      metaTitle: "Prashant Kulkarni | Parallel Entrepreneur, Innovator, Speaker, Thinker",
      metaDescription:
        "Official portfolio of Prashant Kulkarni - Director of Tasty Alphabets, CEO of Food Franchise India, and Founder of Zuper World.",
      ogImage: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      googleAnalyticsId: "UA-XXXXXXXXX-X",
      enableSitemap: true,
      enableRobotsTxt: true,
    },
  },
}

// Fix the store implementation to work properly with Next.js
export const useAppStore = create<AppState>((set) => ({
  blogs: [],
  events: [],
  contacts: [],
  media: [],
  settings: {
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
      enableSitemap: false,
      enableRobotsTxt: false,
    },
  },
  updateBlogs: (blogs: AppState["blogs"]) => set({ blogs }),
  updateEvents: (events: AppState["events"]) => set({ events }),
  updateContacts: (contacts: AppState["contacts"]) => set({ contacts }),
  updateMedia: (media: AppState["media"]) => set({ media }),
  updateSettings: (settings: AppState["settings"]) => set({ settings }),
  refreshData: () => {
    if (typeof window !== "undefined") {
      try {
        const blogs = localStorage.getItem(STORAGE_KEYS.BLOGS)
        const events = localStorage.getItem(STORAGE_KEYS.EVENTS)
        const contacts = localStorage.getItem(STORAGE_KEYS.CONTACTS)
        const media = localStorage.getItem(STORAGE_KEYS.MEDIA)
        const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS)

        set({
          blogs: blogs ? JSON.parse(blogs) : [],
          events: events ? JSON.parse(events) : [],
          contacts: contacts ? JSON.parse(contacts) : [],
          media: media ? JSON.parse(media) : [],
          settings: settings
            ? JSON.parse(settings)
            : {
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
                  enableSitemap: false,
                  enableRobotsTxt: false,
                },
              },
        })
      } catch (error) {
        console.error("Error refreshing data:", error)
      }
    }
  },
}))

// Modify the initializeData function to only initialize if data doesn't exist
const initializeData = () => {
  if (typeof window === "undefined") return

  try {
    // Only initialize data if it doesn't exist
    if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
      localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(DEFAULT_DATA.blogs))
    }

    if (!localStorage.getItem(STORAGE_KEYS.EVENTS)) {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(DEFAULT_DATA.events))
    }

    if (!localStorage.getItem(STORAGE_KEYS.CONTACTS)) {
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(DEFAULT_DATA.contacts))
    }

    if (!localStorage.getItem(STORAGE_KEYS.MEDIA)) {
      localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(DEFAULT_DATA.media))
    }

    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_DATA.settings))
    }

    // Update the store with the data from localStorage
    useAppStore.getState().refreshData()
  } catch (error) {
    console.error("Error initializing data:", error)
  }
}

// Call this function when the app starts
export const initMockDataService = () => {
  if (typeof window !== "undefined") {
    try {
      initializeData()
    } catch (error) {
      console.error("Error in initMockDataService:", error)
    }
  }
}

// Update all CRUD operations to also update the store

// Blog CRUD operations
export const getBlogs = () => {
  if (typeof window === "undefined") return []

  try {
    const blogs = localStorage.getItem(STORAGE_KEYS.BLOGS)
    return blogs ? JSON.parse(blogs) : []
  } catch (error) {
    console.error("Error getting blogs:", error)
    return []
  }
}

export const getBlogById = (id: number) => {
  try {
    const blogs = getBlogs()
    return blogs.find((blog: any) => blog.id === id)
  } catch (error) {
    console.error("Error getting blog by ID:", error)
    return null
  }
}

export const getBlogBySlug = (slug: string) => {
  try {
    const blogs = getBlogs()
    return blogs.find((blog: any) => blog.slug === slug)
  } catch (error) {
    console.error("Error getting blog by slug:", error)
    return null
  }
}

export const createBlog = (blog: any) => {
  if (typeof window === "undefined") return null

  try {
    const blogs = getBlogs()
    const newBlog = {
      ...blog,
      id: blogs.length > 0 ? Math.max(...blogs.map((b: any) => b.id)) + 1 : 1,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      views: 0,
    }

    const updatedBlogs = [...blogs, newBlog]
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(updatedBlogs))
    useAppStore.getState().updateBlogs(updatedBlogs)
    return newBlog
  } catch (error) {
    console.error("Error creating blog:", error)
    return null
  }
}

export const updateBlog = (id: number, updatedBlog: any) => {
  if (typeof window === "undefined") return null

  try {
    const blogs = getBlogs()
    const updatedBlogs = blogs.map((blog: any) => (blog.id === id ? { ...blog, ...updatedBlog } : blog))

    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(updatedBlogs))
    useAppStore.getState().updateBlogs(updatedBlogs)
    return updatedBlog
  } catch (error) {
    console.error("Error updating blog:", error)
    return null
  }
}

export const deleteBlog = (id: number) => {
  if (typeof window === "undefined") return null

  try {
    const blogs = getBlogs()
    const filteredBlogs = blogs.filter((blog: any) => blog.id !== id)

    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(filteredBlogs))
    useAppStore.getState().updateBlogs(filteredBlogs)
    return id
  } catch (error) {
    console.error("Error deleting blog:", error)
    return null
  }
}

// Events CRUD operations
export const getEvents = () => {
  if (typeof window === "undefined") return []

  try {
    const events = localStorage.getItem(STORAGE_KEYS.EVENTS)
    return events ? JSON.parse(events) : []
  } catch (error) {
    console.error("Error getting events:", error)
    return []
  }
}

export const getEventById = (id: number) => {
  try {
    const events = getEvents()
    return events.find((event: any) => event.id === id)
  } catch (error) {
    console.error("Error getting event by ID:", error)
    return null
  }
}

export const createEvent = (event: any) => {
  if (typeof window === "undefined") return null

  try {
    const events = getEvents()
    const newEvent = {
      ...event,
      id: events.length > 0 ? Math.max(...events.map((e: any) => e.id)) + 1 : 1,
    }

    const updatedEvents = [...events, newEvent]
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updatedEvents))
    useAppStore.getState().updateEvents(updatedEvents)
    return newEvent
  } catch (error) {
    console.error("Error creating event:", error)
    return null
  }
}

export const updateEvent = (id: number, updatedEvent: any) => {
  if (typeof window === "undefined") return null

  try {
    const events = getEvents()
    const updatedEvents = events.map((event: any) => (event.id === id ? { ...event, ...updatedEvent } : event))

    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updatedEvents))
    useAppStore.getState().updateEvents(updatedEvents)
    return updatedEvent
  } catch (error) {
    console.error("Error updating event:", error)
    return null
  }
}

export const deleteEvent = (id: number) => {
  if (typeof window === "undefined") return null

  try {
    const events = getEvents()
    const filteredEvents = events.filter((event: any) => event.id !== id)

    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(filteredEvents))
    useAppStore.getState().updateEvents(filteredEvents)
    return id
  } catch (error) {
    console.error("Error deleting event:", error)
    return null
  }
}

// Contacts CRUD operations
export const getContacts = () => {
  if (typeof window === "undefined") return []

  try {
    const contacts = localStorage.getItem(STORAGE_KEYS.CONTACTS)
    return contacts ? JSON.parse(contacts) : []
  } catch (error) {
    console.error("Error getting contacts:", error)
    return []
  }
}

export const getContactById = (id: number) => {
  try {
    const contacts = getContacts()
    return contacts.find((contact: any) => contact.id === id)
  } catch (error) {
    console.error("Error getting contact by ID:", error)
    return null
  }
}

export const createContact = (contact: any) => {
  if (typeof window === "undefined") return null

  try {
    const contacts = getContacts()
    const newContact = {
      ...contact,
      id: contacts.length > 0 ? Math.max(...contacts.map((c: any) => c.id)) + 1 : 1,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      status: "New",
    }

    const updatedContacts = [...contacts, newContact]
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updatedContacts))
    useAppStore.getState().updateContacts(updatedContacts)
    return newContact
  } catch (error) {
    console.error("Error creating contact:", error)
    return null
  }
}

export const updateContact = (id: number, updatedContact: any) => {
  if (typeof window === "undefined") return null

  try {
    const contacts = getContacts()
    const updatedContacts = contacts.map((contact: any) =>
      contact.id === id ? { ...contact, ...updatedContact } : contact,
    )

    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updatedContacts))
    useAppStore.getState().updateContacts(updatedContacts)
    return updatedContact
  } catch (error) {
    console.error("Error updating contact:", error)
    return null
  }
}

export const deleteContact = (id: number) => {
  if (typeof window === "undefined") return null

  try {
    const contacts = getContacts()
    const filteredContacts = contacts.filter((contact: any) => contact.id !== id)

    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(filteredContacts))
    useAppStore.getState().updateContacts(filteredContacts)
    return id
  } catch (error) {
    console.error("Error deleting contact:", error)
    return null
  }
}

// Media CRUD operations
export const getMedia = () => {
  if (typeof window === "undefined") return []

  try {
    const media = localStorage.getItem(STORAGE_KEYS.MEDIA)
    return media ? JSON.parse(media) : []
  } catch (error) {
    console.error("Error getting media:", error)
    return []
  }
}

export const getMediaById = (id: number) => {
  try {
    const media = getMedia()
    return media.find((item: any) => item.id === id)
  } catch (error) {
    console.error("Error getting media by ID:", error)
    return null
  }
}

export const createMedia = (mediaItem: any) => {
  if (typeof window === "undefined") return null

  try {
    const media = getMedia()
    const newMedia = {
      ...mediaItem,
      id: media.length > 0 ? Math.max(...media.map((m: any) => m.id)) + 1 : 1,
      uploadedOn: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    }

    const updatedMedia = [...media, newMedia]
    localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(updatedMedia))
    useAppStore.getState().updateMedia(updatedMedia)
    return newMedia
  } catch (error) {
    console.error("Error creating media:", error)
    return null
  }
}

export const updateMedia = (id: number, updatedMedia: any) => {
  if (typeof window === "undefined") return null

  try {
    const media = getMedia()
    const updatedMediaItems = media.map((item: any) => (item.id === id ? { ...item, ...updatedMedia } : item))

    localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(updatedMediaItems))
    useAppStore.getState().updateMedia(updatedMediaItems)
    return updatedMedia
  } catch (error) {
    console.error("Error updating media:", error)
    return null
  }
}

export const deleteMedia = (id: number) => {
  if (typeof window === "undefined") return null

  try {
    const media = getMedia()
    const filteredMedia = media.filter((item: any) => item.id !== id)

    localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(filteredMedia))
    useAppStore.getState().updateMedia(filteredMedia)
    return id
  } catch (error) {
    console.error("Error deleting media:", error)
    return null
  }
}

// Settings operations
export const getSettings = () => {
  if (typeof window === "undefined") return DEFAULT_DATA.settings

  try {
    const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS)
    return settings ? JSON.parse(settings) : DEFAULT_DATA.settings
  } catch (error) {
    console.error("Error getting settings:", error)
    return DEFAULT_DATA.settings
  }
}

export const updateSettings = (updatedSettings: any) => {
  if (typeof window === "undefined") return null

  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updatedSettings))
    useAppStore.getState().updateSettings(updatedSettings)
    return updatedSettings
  } catch (error) {
    console.error("Error updating settings:", error)
    return null
  }
}

// Authentication
export const checkAuth = () => {
  if (typeof window === "undefined") return false

  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === "true"
  } catch (error) {
    console.error("Error checking auth:", error)
    return false
  }
}

export const login = (email: string, password: string) => {
  // For demo purposes, hardcoded credentials
  if (email === "admin@example.com" && password === "password") {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.AUTH, "true")
        // Initialize data if it doesn't exist
        initializeData()
        return true
      } catch (error) {
        console.error("Error during login:", error)
        return false
      }
    }
  }
  return false
}

export const logout = () => {
  if (typeof window !== "undefined") {
    try {
      // Only remove authentication, not the data
      localStorage.removeItem(STORAGE_KEYS.AUTH)
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }
}
