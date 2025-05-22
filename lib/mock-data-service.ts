import { create } from "zustand"

export interface AppState {
  media: any[]
  refreshData: () => void
}

export const useAppStore = create<AppState>((set) => ({
  media: [],
  refreshData: () => {
    set({ media: [] })
  }
}))

// Store data in localStorage to persist between page refreshes
const STORAGE_KEYS = {
  EVENTS: "admin_events",
  CONTACTS: "admin_contacts",
  MEDIA: "admin_media",
  SETTINGS: "admin_settings",
  AUTH: "adminAuthenticated",
}

// Helper function to safely access localStorage
const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
  return null
}

// Helper function to safely set localStorage
const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value)
  }
}

// Initialize with sample data if not exists
const initializeData = () => {
  if (typeof window === "undefined") return

  if (!getLocalStorage(STORAGE_KEYS.EVENTS)) {
    setLocalStorage(
      STORAGE_KEYS.EVENTS,
      JSON.stringify([
    {
      id: 1,
      title: "AIBC Eurasia Dubai",
      location: "Dubai, UAE",
      date: "March 14, 2023",
      status: "Upcoming",
      attendees: 250,
      description: "Join us for the premier blockchain and AI event in Dubai.",
    },
    {
      id: 2,
      title: "Food Business Summit",
      location: "Mumbai, India",
      date: "April 22, 2023",
      status: "Upcoming",
      attendees: 180,
      description: "A gathering of food industry leaders to discuss the future of food business in India.",
    },
    {
      id: 3,
      title: "Entrepreneurship Conference",
      location: "Bangalore, India",
      date: "May 10, 2023",
      status: "Upcoming",
      attendees: 320,
      description: "Learn from successful entrepreneurs and network with like-minded individuals.",
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      location: "Delhi, India",
      date: "February 15, 2023",
      status: "Past",
      attendees: 150,
      description: "A comprehensive masterclass on digital marketing strategies for businesses.",
    },
    {
      id: 5,
      title: "Franchise Expo 2023",
      location: "Hyderabad, India",
      date: "January 28, 2023",
      status: "Past",
      attendees: 420,
      description: "The largest franchise exhibition in India showcasing various franchise opportunities.",
        },
      ]),
    )
  }

  if (!getLocalStorage(STORAGE_KEYS.CONTACTS)) {
    setLocalStorage(
      STORAGE_KEYS.CONTACTS,
      JSON.stringify([
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
      ]),
    )
  }

  if (!getLocalStorage(STORAGE_KEYS.MEDIA)) {
    setLocalStorage(
      STORAGE_KEYS.MEDIA,
      JSON.stringify([
    {
      id: 1,
      name: "hero-image-1.jpg",
      type: "image/jpeg",
      size: "1.2 MB",
      dimensions: "1920 × 1080",
      uploadedOn: "May 15, 2023",
      url: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      altText: "Hero image for homepage",
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
    },
      ]),
    )
  }

  if (!getLocalStorage(STORAGE_KEYS.SETTINGS)) {
    setLocalStorage(
      STORAGE_KEYS.SETTINGS,
      JSON.stringify({
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
      }),
    )
  }
}

// Call this function when the app starts
export function initMockDataService() {
  if (typeof window !== "undefined") {
      initializeData()
  }
}

export function getMedia() {
  const media = getLocalStorage(STORAGE_KEYS.MEDIA)
  return media ? JSON.parse(media) : []
}

export function getMediaById(id: number) {
  const media = getMedia()
  return media.find((item: any) => item.id === id)
}

export function getMediaBySlug(slug: string) {
  const media = getMedia()
  return media.find((item: any) => item.slug === slug)
}

// Events CRUD operations
export function getEvents() {
  const events = getLocalStorage(STORAGE_KEYS.EVENTS)
    return events ? JSON.parse(events) : []
}

export function getEventById(id: number) {
    const events = getEvents()
    return events.find((event: any) => event.id === id)
}

export function createEvent(event: any) {
    const events = getEvents()
    const newEvent = {
      ...event,
      id: events.length > 0 ? Math.max(...events.map((e: any) => e.id)) + 1 : 1,
    }

  setLocalStorage(STORAGE_KEYS.EVENTS, JSON.stringify([...events, newEvent]))
    return newEvent
}

export function updateEvent(id: number, updatedEvent: any) {
    const events = getEvents()
    const updatedEvents = events.map((event: any) => (event.id === id ? { ...event, ...updatedEvent } : event))

  setLocalStorage(STORAGE_KEYS.EVENTS, JSON.stringify(updatedEvents))
    return updatedEvent
}

export function deleteEvent(id: number) {
    const events = getEvents()
    const filteredEvents = events.filter((event: any) => event.id !== id)

  setLocalStorage(STORAGE_KEYS.EVENTS, JSON.stringify(filteredEvents))
    return id
}

// Contacts CRUD operations
export function getContacts() {
  const contacts = getLocalStorage(STORAGE_KEYS.CONTACTS)
    return contacts ? JSON.parse(contacts) : []
}

export function getContactById(id: number) {
    const contacts = getContacts()
    return contacts.find((contact: any) => contact.id === id)
}

export function createContact(contact: any) {
    const contacts = getContacts()
    const newContact = {
      ...contact,
      id: contacts.length > 0 ? Math.max(...contacts.map((c: any) => c.id)) + 1 : 1,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      status: "New",
    }

  setLocalStorage(STORAGE_KEYS.CONTACTS, JSON.stringify([...contacts, newContact]))
    return newContact
}

export function updateContact(id: number, updatedContact: any) {
    const contacts = getContacts()
    const updatedContacts = contacts.map((contact: any) =>
      contact.id === id ? { ...contact, ...updatedContact } : contact,
    )

  setLocalStorage(STORAGE_KEYS.CONTACTS, JSON.stringify(updatedContacts))
    return updatedContact
}

export function deleteContact(id: number) {
    const contacts = getContacts()
    const filteredContacts = contacts.filter((contact: any) => contact.id !== id)

  setLocalStorage(STORAGE_KEYS.CONTACTS, JSON.stringify(filteredContacts))
    return id
}

// Media CRUD operations
export function createMedia(mediaItem: any) {
    const media = getMedia()
    const newMedia = {
      ...mediaItem,
      id: media.length > 0 ? Math.max(...media.map((m: any) => m.id)) + 1 : 1,
      uploadedOn: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    }

  setLocalStorage(STORAGE_KEYS.MEDIA, JSON.stringify([...media, newMedia]))
    return newMedia
}

export function updateMedia(id: number, updatedMedia: any) {
    const media = getMedia()
    const updatedMediaItems = media.map((item: any) => (item.id === id ? { ...item, ...updatedMedia } : item))

  setLocalStorage(STORAGE_KEYS.MEDIA, JSON.stringify(updatedMediaItems))
    return updatedMedia
}

export function deleteMedia(id: number) {
    const media = getMedia()
    const filteredMedia = media.filter((item: any) => item.id !== id)

  setLocalStorage(STORAGE_KEYS.MEDIA, JSON.stringify(filteredMedia))
    return id
}

// Settings operations
export function getSettings() {
  const settings = getLocalStorage(STORAGE_KEYS.SETTINGS)
  return settings ? JSON.parse(settings) : {}
}

export function updateSettings(updatedSettings: any) {
  setLocalStorage(STORAGE_KEYS.SETTINGS, JSON.stringify(updatedSettings))
    return updatedSettings
}

// Authentication
export function checkAuth() {
  return getLocalStorage("adminAuthenticated") === "true"
}

export function login(email: string, password: string) {
  // For demo purposes, hardcoded credentials
  if (email === "admin@example.com" && password === "password") {
    setLocalStorage("adminAuthenticated", "true")
        return true
  }
  return false
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminAuthenticated")
  }
}
