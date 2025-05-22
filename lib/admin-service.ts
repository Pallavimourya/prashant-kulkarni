interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  status: string
  attendees: number
  videoUrl?: string
}

// In-memory storage for demo purposes
let events: Event[] = [
  {
    id: 1,
    title: "History of Parantha",
    date: "2024-03-15",
    location: "YouTube",
    description: "Explore the rich history and cultural significance of Parantha in Indian cuisine.",
    status: "Published",
    attendees: 1500,
    videoUrl: "https://youtu.be/i6_mjzN-Q4E?si=D3v5-oZdnHMOifFa"
  },
  {
    id: 2,
    title: "History of Kadhi by Zuper Prashant",
    date: "2024-03-10",
    location: "YouTube Shorts",
    description: "Discover the fascinating history of Kadhi, a beloved Indian dish.",
    status: "Published",
    attendees: 1200,
    videoUrl: "https://youtube.com/shorts/mkOjV7D8PpI?si=I-ZsYXbPOyaC2mjp"
  },
  {
    id: 3,
    title: "The Secret to Success: Franchise Operating System Benefits",
    date: "2024-03-05",
    location: "YouTube",
    description: "Learn about the key benefits of implementing a robust franchise operating system.",
    status: "Published",
    attendees: 2000,
    videoUrl: "https://youtu.be/hsoS9xpSnc4?si=-ovFwXMRz0Lr5ZsD"
  },
  {
    id: 4,
    title: "Unlocking Entrepreneurship Secrets",
    date: "2024-02-28",
    location: "YouTube",
    description: "Discover the essential secrets to successful entrepreneurship.",
    status: "Published",
    attendees: 1800,
    videoUrl: "https://youtu.be/CbMxUpd7XWM?si=JfCXFw1Ix_mJLJEG"
  },
  {
    id: 5,
    title: "Zuper Prashant | Start Now Don't Wish",
    date: "2024-02-20",
    location: "YouTube",
    description: "Motivational talk about taking action and achieving your goals.",
    status: "Published",
    attendees: 2500,
    videoUrl: "https://youtu.be/Mz6keGGFOLU?si=POMSK-rh-ZXjt1mk"
  },
  {
    id: 6,
    title: "Seize the Moment: Take the Risk, Unlock the Opportunity",
    date: "2024-02-15",
    location: "YouTube",
    description: "Learn how to identify and seize opportunities in business and life.",
    status: "Published",
    attendees: 2200,
    videoUrl: "https://youtu.be/8bWP6xHsOlo?si=yWnWIxpaD9lFGlEt"
  }
]

export const adminService = {
  // Events
  getEvents: () => {
    try {
      return [...events]
    } catch (error) {
      console.error('Error getting events:', error)
      throw new Error('Failed to get events')
    }
  },

  updateEvent: (updatedEvent: Event) => {
    try {
      const index = events.findIndex(event => event.id === updatedEvent.id)
      if (index === -1) {
        throw new Error('Event not found')
      }
      events[index] = updatedEvent
      return updatedEvent
    } catch (error) {
      console.error('Error updating event:', error)
      throw new Error('Failed to update event')
    }
  },

  deleteEvent: (id: number) => {
    try {
      const index = events.findIndex(event => event.id === id)
      if (index === -1) {
        throw new Error('Event not found')
      }
      events = events.filter(event => event.id !== id)
      return true
    } catch (error) {
      console.error('Error deleting event:', error)
      throw new Error('Failed to delete event')
    }
  },

  addEvent: (newEvent: Omit<Event, "id">) => {
    try {
      if (!newEvent.title || !newEvent.date || !newEvent.location) {
        throw new Error('Missing required fields')
      }
      const id = Math.max(0, ...events.map(e => e.id)) + 1
      const event = { ...newEvent, id }
      events.push(event)
      return event
    } catch (error) {
      console.error('Error adding event:', error)
      throw new Error('Failed to add event')
    }
  },
} 