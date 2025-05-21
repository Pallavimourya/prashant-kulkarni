interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  status: string
  attendees: number
}

// In-memory storage for demo purposes
let events: Event[] = [
  {
    id: 1,
    title: "Food Innovation Summit 2024",
    date: "2024-06-15",
    location: "Mumbai Convention Center",
    description: "Join us for a day of innovation in food technology and business.",
    status: "Upcoming",
    attendees: 150,
  },
  {
    id: 2,
    title: "Entrepreneurship Workshop",
    date: "2024-07-20",
    location: "Delhi Business Hub",
    description: "Learn the fundamentals of starting and scaling a business.",
    status: "Upcoming",
    attendees: 75,
  },
]

export const adminService = {
  // Events
  getEvents: () => {
    return [...events]
  },

  updateEvent: (updatedEvent: Event) => {
    events = events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    )
    return updatedEvent
  },

  deleteEvent: (id: number) => {
    events = events.filter(event => event.id !== id)
    return true
  },

  addEvent: (newEvent: Omit<Event, "id">) => {
    const id = Math.max(0, ...events.map(e => e.id)) + 1
    const event = { ...newEvent, id }
    events.push(event)
    return event
  },
} 