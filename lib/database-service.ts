import { connectToDatabase } from "./mongodb"
import { ObjectId } from "mongodb"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import type { Blog, Event, Contact, Media, Settings, User, ActivityLog } from "./mongodb"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Authentication
export const login = async (
  email: string,
  password: string,
): Promise<{ success: boolean; token?: string; user?: any }> => {
    try {
      const db = await connectToDatabase()
    const user = await db.collection("users").findOne({ email })

    if (!user) {
      return { success: false }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return { success: false }
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name || email.split("@")[0],
      },
      JWT_SECRET,
      { expiresIn: "7d" },
    )

    // Log activity
    await logActivity(user._id.toString(), "Login", "User logged in")

    return {
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name || email.split("@")[0],
      },
    }
    } catch (error) {
    console.error("Error during login:", error)
    return { success: false }
    }
}

export const verifyToken = async (token: string): Promise<{ authenticated: boolean; user?: any }> => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any

    // Check if user exists
    const db = await connectToDatabase()
    const user = await db.collection("users").findOne({ _id: new ObjectId(decoded.id) })

    if (!user) {
      return { authenticated: false }
    }

    return {
      authenticated: true,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        name: user.name || user.email.split("@")[0],
      },
    }
  } catch (error) {
    console.error("Error verifying token:", error)
    return { authenticated: false }
  }
}

// Activity Logging
export const logActivity = async (userId: string, action: string, details: string, req?: any): Promise<boolean> => {
  try {
    const db = await connectToDatabase()

    const activityLog = {
      userId,
      action,
      details,
      ip: req?.headers?.["x-forwarded-for"] || req?.connection?.remoteAddress || "unknown",
      userAgent: req?.headers?.["user-agent"] || "unknown",
      createdAt: new Date(),
    }

    await db.collection("activity_logs").insertOne(activityLog)
    return true
  } catch (error) {
    console.error("Error logging activity:", error)
    return false
  }
}

export const getActivityLogs = async (limit = 50): Promise<ActivityLog[]> => {
  try {
    const db = await connectToDatabase()
    const logs = await db.collection("activity_logs").find({}).sort({ createdAt: -1 }).limit(limit).toArray()

    return logs as ActivityLog[]
  } catch (error) {
    console.error("Error getting activity logs:", error)
    return []
  }
}

// Dashboard Stats
export const getDashboardStats = async (): Promise<any> => {
  try {
    const db = await connectToDatabase()

    // Get counts
    const blogsCount = await db.collection("blogs").countDocuments()
    const eventsCount = await db.collection("events").countDocuments()
    const contactsCount = await db.collection("contacts").countDocuments()
    const mediaCount = await db.collection("media").countDocuments()
    const usersCount = await db.collection("users").countDocuments()

    // Get recent blogs
    const recentBlogs = await db.collection("blogs").find({}).sort({ createdAt: -1 }).limit(5).toArray()

    // Get upcoming events
    const upcomingEvents = await db
      .collection("events")
      .find({ status: "Upcoming" })
      .sort({ date: 1 })
      .limit(5)
      .toArray()

    // Get recent contacts
    const recentContacts = await db.collection("contacts").find({}).sort({ createdAt: -1 }).limit(5).toArray()

    // Get recent activity
    const recentActivity = await db.collection("activity_logs").find({}).sort({ createdAt: -1 }).limit(10).toArray()

    return {
      counts: {
        blogs: blogsCount,
        events: eventsCount,
        contacts: contactsCount,
        media: mediaCount,
        users: usersCount,
      },
      recentBlogs,
      upcomingEvents,
      recentContacts,
      recentActivity,
    }
  } catch (error) {
    console.error("Error getting dashboard stats:", error)
    return {
      counts: { blogs: 0, events: 0, contacts: 0, media: 0, users: 0 },
      recentBlogs: [],
      upcomingEvents: [],
      recentContacts: [],
      recentActivity: [],
    }
  }
}

// Blog CRUD operations
export const getBlogs = async (page = 1, limit = 10, search = ""): Promise<{ blogs: Blog[]; total: number }> => {
  try {
    const db = await connectToDatabase()
    const skip = (page - 1) * limit

    let query = {}
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { excerpt: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ],
      }
    }

    const total = await db.collection("blogs").countDocuments(query)
    const blogs = await db.collection("blogs").find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray()

    return { blogs: blogs as Blog[], total }
  } catch (error) {
    console.error("Error getting blogs:", error)
    return { blogs: [], total: 0 }
  }
}

export const getBlogById = async (id: string): Promise<Blog | null> => {
  try {
    const db = await connectToDatabase()
    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) })
    return blog as Blog | null
  } catch (error) {
    console.error("Error getting blog by ID:", error)
    return null
  }
}

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const db = await connectToDatabase()
    const blog = await db.collection("blogs").findOne({ slug })
    return blog as Blog | null
  } catch (error) {
    console.error("Error getting blog by slug:", error)
    return null
  }
}

export const createBlog = async (
  blog: Omit<Blog, "_id" | "createdAt" | "updatedAt">,
  userId: string,
): Promise<Blog | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()
    const blogWithDates = {
      ...blog,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection("blogs").insertOne(blogWithDates)
    const newBlog = await db.collection("blogs").findOne({ _id: result.insertedId })

    // Log activity
    await logActivity(userId, "Create Blog", `Created blog: ${blog.title}`)

    return newBlog as Blog | null
  } catch (error) {
    console.error("Error creating blog:", error)
    return null
  }
}

export const updateBlog = async (id: string, blog: Partial<Blog>, userId: string): Promise<Blog | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()
    const blogWithDate = {
      ...blog,
      updatedAt: now,
    }
    await db.collection("blogs").updateOne({ _id: new ObjectId(id) }, { $set: blogWithDate })
    const updatedBlog = await db.collection("blogs").findOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Update Blog", `Updated blog: ${updatedBlog?.title}`)

    return updatedBlog as Blog | null
  } catch (error) {
    console.error("Error updating blog:", error)
    return null
  }
}

export const deleteBlog = async (id: string, userId: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase()
    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) })
    await db.collection("blogs").deleteOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Delete Blog", `Deleted blog: ${blog?.title}`)

    return true
  } catch (error) {
    console.error("Error deleting blog:", error)
    return false
  }
}

// Events CRUD operations
export const getEvents = async (page = 1, limit = 10, search = ""): Promise<{ events: Event[]; total: number }> => {
  try {
    const db = await connectToDatabase()
    const skip = (page - 1) * limit

    let query = {}
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      }
    }

    const total = await db.collection("events").countDocuments(query)
    const events = await db.collection("events").find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray()

    return { events: events as Event[], total }
  } catch (error) {
    console.error("Error getting events:", error)
    return { events: [], total: 0 }
  }
}

export const getEventById = async (id: string): Promise<Event | null> => {
  try {
    const db = await connectToDatabase()
    const event = await db.collection("events").findOne({ _id: new ObjectId(id) })
    return event as Event | null
  } catch (error) {
    console.error("Error getting event by ID:", error)
    return null
  }
}

export const createEvent = async (
  event: Omit<Event, "_id" | "createdAt" | "updatedAt">,
  userId: string,
): Promise<Event | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()
    const eventWithDates = {
      ...event,
      createdAt: now,
      updatedAt: now,
    }
    const result = await db.collection("events").insertOne(eventWithDates)
    const newEvent = await db.collection("events").findOne({ _id: result.insertedId })

    // Log activity
    await logActivity(userId, "Create Event", `Created event: ${event.title}`)

    return newEvent as Event | null
  } catch (error) {
    console.error("Error creating event:", error)
    return null
  }
}

export const updateEvent = async (id: string, event: Partial<Event>, userId: string): Promise<Event | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()
    const eventWithDate = {
      ...event,
      updatedAt: now,
    }
    await db.collection("events").updateOne({ _id: new ObjectId(id) }, { $set: eventWithDate })
    const updatedEvent = await db.collection("events").findOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Update Event", `Updated event: ${updatedEvent?.title}`)

    return updatedEvent as Event | null
  } catch (error) {
    console.error("Error updating event:", error)
    return null
  }
}

export const deleteEvent = async (id: string, userId: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase()
    const event = await db.collection("events").findOne({ _id: new ObjectId(id) })
    await db.collection("events").deleteOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Delete Event", `Deleted event: ${event?.title}`)

    return true
  } catch (error) {
    console.error("Error deleting event:", error)
    return false
  }
}

// Contacts CRUD operations
export const getContacts = async (
  page = 1,
  limit = 10,
  search = "",
): Promise<{ contacts: Contact[]; total: number }> => {
  try {
    const db = await connectToDatabase()
    const skip = (page - 1) * limit

    let query = {}
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { subject: { $regex: search, $options: "i" } },
          { message: { $regex: search, $options: "i" } },
        ],
      }
    }

    const total = await db.collection("contacts").countDocuments(query)
    const contacts = await db
      .collection("contacts")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray()

    return { contacts: contacts as Contact[], total }
  } catch (error) {
    console.error("Error getting contacts:", error)
    return { contacts: [], total: 0 }
  }
}

export const getContactById = async (id: string): Promise<Contact | null> => {
  try {
    const db = await connectToDatabase()
    const contact = await db.collection("contacts").findOne({ _id: new ObjectId(id) })
    return contact as Contact | null
  } catch (error) {
    console.error("Error getting contact by ID:", error)
    return null
  }
}

export const updateContact = async (id: string, contact: Partial<Contact>, userId: string): Promise<Contact | null> => {
  try {
    const db = await connectToDatabase()
    await db.collection("contacts").updateOne({ _id: new ObjectId(id) }, { $set: contact })
    const updatedContact = await db.collection("contacts").findOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Update Contact", `Updated contact: ${updatedContact?.name}`)

    return updatedContact as Contact | null
  } catch (error) {
    console.error("Error updating contact:", error)
    return null
  }
}

export const deleteContact = async (id: string, userId: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase()
    const contact = await db.collection("contacts").findOne({ _id: new ObjectId(id) })
    await db.collection("contacts").deleteOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Delete Contact", `Deleted contact: ${contact?.name}`)

    return true
  } catch (error) {
    console.error("Error deleting contact:", error)
    return false
  }
}

// Media CRUD operations
export const getMedia = async (page = 1, limit = 10, search = ""): Promise<{ media: Media[]; total: number }> => {
  try {
    const db = await connectToDatabase()
    const skip = (page - 1) * limit

    let query = {}
    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { altText: { $regex: search, $options: "i" } },
          { type: { $regex: search, $options: "i" } },
        ],
      }
    }

    const total = await db.collection("media").countDocuments(query)
    const media = await db.collection("media").find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray()

    return { media: media as Media[], total }
  } catch (error) {
    console.error("Error getting media:", error)
    return { media: [], total: 0 }
  }
}

export const getMediaById = async (id: string): Promise<Media | null> => {
  try {
    const db = await connectToDatabase()
    const media = await db.collection("media").findOne({ _id: new ObjectId(id) })
    return media as Media | null
  } catch (error) {
    console.error("Error getting media by ID:", error)
    return null
  }
}

export const createMedia = async (media: Omit<Media, "_id" | "createdAt">, userId: string): Promise<Media | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()
    const mediaWithDate = {
      ...media,
      createdAt: now,
    }
    const result = await db.collection("media").insertOne(mediaWithDate)
    const newMedia = await db.collection("media").findOne({ _id: result.insertedId })

    // Log activity
    await logActivity(userId, "Create Media", `Created media: ${media.name}`)

    return newMedia as Media | null
  } catch (error) {
    console.error("Error creating media:", error)
    return null
  }
}

export const updateMedia = async (id: string, media: Partial<Media>, userId: string): Promise<Media | null> => {
  try {
    const db = await connectToDatabase()
    await db.collection("media").updateOne({ _id: new ObjectId(id) }, { $set: media })
    const updatedMedia = await db.collection("media").findOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Update Media", `Updated media: ${updatedMedia?.name}`)

    return updatedMedia as Media | null
  } catch (error) {
    console.error("Error updating media:", error)
    return null
  }
}

export const deleteMedia = async (id: string, userId: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase()
    const media = await db.collection("media").findOne({ _id: new ObjectId(id) })
    await db.collection("media").deleteOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Delete Media", `Deleted media: ${media?.name}`)

    return true
  } catch (error) {
    console.error("Error deleting media:", error)
    return false
  }
}

// Settings operations
export const getSettings = async (): Promise<Settings | null> => {
  try {
    const db = await connectToDatabase()
    const settings = await db.collection("settings").findOne({})
    return settings as Settings | null
  } catch (error) {
    console.error("Error getting settings:", error)
    return null
  }
}

export const updateSettings = async (settings: Partial<Settings>, userId: string): Promise<Settings | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()
    const settingsWithDate = {
      ...settings,
      updatedAt: now,
    }

    // Get the current settings
    const currentSettings = await getSettings()

    if (!currentSettings) {
      // If no settings exist, create them
      const settingsWithCreatedDate = {
        ...settingsWithDate,
        createdAt: now,
      }
      const result = await db.collection("settings").insertOne(settingsWithCreatedDate as any)
      const newSettings = await db.collection("settings").findOne({ _id: result.insertedId })

      // Log activity
      await logActivity(userId, "Create Settings", "Created site settings")

      return newSettings as Settings | null
    } else {
      // Update existing settings
      await db.collection("settings").updateOne({}, { $set: settingsWithDate })
      const updatedSettings = await db.collection("settings").findOne({})

      // Log activity
      await logActivity(userId, "Update Settings", "Updated site settings")

      return updatedSettings as Settings | null
    }
  } catch (error) {
    console.error("Error updating settings:", error)
    return null
  }
}

// User management
export const getUsers = async (
  page = 1,
  limit = 10,
  search = "",
): Promise<{ users: Omit<User, "password">[]; total: number }> => {
  try {
    const db = await connectToDatabase()
    const skip = (page - 1) * limit

    let query = {}
    if (search) {
      query = {
        $or: [
          { email: { $regex: search, $options: "i" } },
          { name: { $regex: search, $options: "i" } },
          { role: { $regex: search, $options: "i" } },
        ],
      }
    }

    const total = await db.collection("users").countDocuments(query)
    const users = await db
      .collection("users")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .project({ password: 0 }) // Exclude password
      .toArray()

    return { users: users as Omit<User, "password">[], total }
  } catch (error) {
    console.error("Error getting users:", error)
    return { users: [], total: 0 }
  }
}

export const getUserById = async (id: string): Promise<Omit<User, "password"> | null> => {
  try {
    const db = await connectToDatabase()
    const user = await db.collection("users").findOne(
      { _id: new ObjectId(id) },
      { projection: { password: 0 } }, // Exclude password
    )
    return user as Omit<User, "password"> | null
  } catch (error) {
    console.error("Error getting user by ID:", error)
    return null
  }
}

export const createUser = async (
  user: Omit<User, "_id" | "createdAt" | "updatedAt" | "password"> & { password: string },
  userId: string,
): Promise<Omit<User, "password"> | null> => {
  try {
    const db = await connectToDatabase()

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email: user.email })
    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    const now = new Date()
    const hashedPassword = await bcrypt.hash(user.password, 10)

    const userWithDates = {
      ...user,
      password: hashedPassword,
      createdAt: now,
      updatedAt: now,
    }

    const result = await db.collection("users").insertOne(userWithDates)
    const newUser = await db.collection("users").findOne(
      { _id: result.insertedId },
      { projection: { password: 0 } }, // Exclude password
    )

    // Log activity
    await logActivity(userId, "Create User", `Created user: ${user.email}`)

    return newUser as Omit<User, "password"> | null
  } catch (error) {
    console.error("Error creating user:", error)
    return null
  }
}

export const updateUser = async (
  id: string,
  user: Partial<User> & { password?: string },
  userId: string,
): Promise<Omit<User, "password"> | null> => {
  try {
    const db = await connectToDatabase()
    const now = new Date()

    // If password is provided, hash it
    const updateData: any = { ...user, updatedAt: now }
    if (user.password) {
      updateData.password = await bcrypt.hash(user.password, 10)
    }

    // Remove password if it's empty
    if (updateData.password === "") {
      delete updateData.password
    }

    await db.collection("users").updateOne({ _id: new ObjectId(id) }, { $set: updateData })
    const updatedUser = await db.collection("users").findOne(
      { _id: new ObjectId(id) },
      { projection: { password: 0 } }, // Exclude password
    )

    // Log activity
    await logActivity(userId, "Update User", `Updated user: ${updatedUser?.email}`)

    return updatedUser as Omit<User, "password"> | null
  } catch (error) {
    console.error("Error updating user:", error)
    return null
  }
}

export const deleteUser = async (id: string, userId: string): Promise<boolean> => {
  try {
    const db = await connectToDatabase()

    // Don't allow deleting yourself
    if (id === userId) {
      throw new Error("Cannot delete your own account")
    }

    const user = await db.collection("users").findOne({ _id: new ObjectId(id) })
    await db.collection("users").deleteOne({ _id: new ObjectId(id) })

    // Log activity
    await logActivity(userId, "Delete User", `Deleted user: ${user?.email}`)

    return true
  } catch (error) {
    console.error("Error deleting user:", error)
    return false
  }
}

// Change password
export const changePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string,
): Promise<boolean> => {
  try {
    const db = await connectToDatabase()
    const user = await db.collection("users").findOne({ _id: new ObjectId(userId) })

    if (!user) {
      return false
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)

    if (!isPasswordValid) {
      return false
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await db
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: { password: hashedPassword, updatedAt: new Date() } })

    // Log activity
    await logActivity(userId, "Change Password", "Changed password")

    return true
  } catch (error) {
    console.error("Error changing password:", error)
    return false
  }
}
