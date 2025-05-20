import { connectToDatabase } from "./mongodb"
import bcrypt from "bcryptjs"

// Sample default data
const DEFAULT_DATA = {
  blogs: [
    {
      title: "Chatar Patar: Standardizing Street Food Across India",
      slug: "chatar-patar-standardizing-street-food",
      excerpt:
        "Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India...",
      content:
        "<p>Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India. With a vision to standardize the street food experience, Chatar Patar has created a unique business model that combines traditional flavors with modern hygiene standards.</p><p>Founded by visionary entrepreneurs, the brand has expanded to multiple locations across the country, offering a consistent and high-quality experience to food lovers everywhere.</p><p>The success of Chatar Patar demonstrates how traditional Indian street food can be transformed into a scalable business while preserving authentic flavors and culinary traditions.</p>",
      category: "Newsroom",
      status: "Published",
      date: "June 15, 2023",
      views: 1245,
      featuredImage: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "The Future of Food Franchising in India",
      slug: "future-of-food-franchising-india",
      excerpt:
        "As India's food industry continues to evolve, franchising presents unique opportunities for entrepreneurs...",
      content:
        "<p>As India's food industry continues to evolve, franchising presents unique opportunities for entrepreneurs looking to enter the market with reduced risk and established business models.</p><p>The food franchise sector in India is experiencing rapid growth, driven by changing consumer preferences, urbanization, and an increasing appetite for diverse culinary experiences.</p><p>Successful franchisors are those who can balance standardization with localization, adapting their offerings to suit regional tastes while maintaining consistent quality and service standards across locations.</p><p>Technology integration, sustainability practices, and innovative business models will be key differentiators for food franchises looking to thrive in the competitive Indian market.</p>",
      category: "Business",
      status: "Published",
      date: "May 22, 2023",
      views: 982,
      featuredImage: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  events: [
    {
      title: "AIBC Eurasia Dubai",
      location: "Dubai, UAE",
      date: "March 14, 2023",
      status: "Upcoming",
      attendees: 250,
      description:
        "Join us for the premier blockchain and AI event in Dubai, featuring industry leaders and innovators discussing the future of technology and its applications in business.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Food Business Summit",
      location: "Mumbai, India",
      date: "April 22, 2023",
      status: "Upcoming",
      attendees: 180,
      description:
        "A gathering of food industry leaders to discuss the future of food business in India, exploring trends, challenges, and opportunities in the evolving market.",
      image: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  contacts: [
    {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      subject: "Speaking Engagement Request",
      message:
        "I would like to invite you to speak at our upcoming business conference in Mumbai. We believe your insights on food franchising would be valuable to our audience of aspiring entrepreneurs.",
      date: "May 15, 2023",
      status: "New",
      createdAt: new Date(),
    },
    {
      name: "Priya Patel",
      email: "priya.patel@example.com",
      subject: "Franchise Inquiry",
      message:
        "I'm interested in opening a franchise of one of your food brands. Could you provide more information about the investment requirements, support provided, and the application process?",
      date: "May 14, 2023",
      status: "New",
      createdAt: new Date(),
    },
  ],
  media: [
    {
      name: "hero-image-1.jpg",
      type: "image/jpeg",
      size: "1.2 MB",
      dimensions: "1920 × 1080",
      uploadedOn: "May 15, 2023",
      url: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      altText: "Hero image for homepage",
      folder: "",
      createdAt: new Date(),
    },
    {
      name: "about-profile.jpg",
      type: "image/jpeg",
      size: "850 KB",
      dimensions: "800 × 1000",
      uploadedOn: "May 14, 2023",
      url: "https://drive.google.com/uc?export=download&id=1uemfG0AJo1Tg4pUJSxYzl59f7ZvHw0lB",
      altText: "Prashant Kulkarni profile photo",
      folder: "",
      createdAt: new Date(),
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
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  users: [
    {
      email: "admin@example.com",
      password: bcrypt.hashSync("password", 10),
      name: "Admin User",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
}

// Initialize the database with default data
export const initializeDatabase = async () => {
  try {
    console.log("Initializing database...")
    const db = await connectToDatabase()

    // Create collections if they don't exist
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map((c) => c.name)

    // Create indexes for better performance
    if (!collectionNames.includes("blogs")) {
      await db.createCollection("blogs")
      await db.collection("blogs").createIndex({ slug: 1 }, { unique: true })
    }

    if (!collectionNames.includes("events")) {
      await db.createCollection("events")
    }

    if (!collectionNames.includes("contacts")) {
      await db.createCollection("contacts")
    }

    if (!collectionNames.includes("media")) {
      await db.createCollection("media")
    }

    if (!collectionNames.includes("settings")) {
      await db.createCollection("settings")
    }

    if (!collectionNames.includes("users")) {
      await db.createCollection("users")
      await db.collection("users").createIndex({ email: 1 }, { unique: true })
    }

    // Check if blogs collection is empty
    const blogsCount = await db.collection("blogs").countDocuments()

    // If blogs collection is empty, insert default blogs
    if (blogsCount === 0) {
      console.log("Inserting default blogs...")
      await db.collection("blogs").insertMany(DEFAULT_DATA.blogs)
    }

    // Check if events collection is empty
    const eventsCount = await db.collection("events").countDocuments()

    // If events collection is empty, insert default events
    if (eventsCount === 0) {
      console.log("Inserting default events...")
      await db.collection("events").insertMany(DEFAULT_DATA.events)
    }

    // Check if contacts collection is empty
    const contactsCount = await db.collection("contacts").countDocuments()

    // If contacts collection is empty, insert default contacts
    if (contactsCount === 0) {
      console.log("Inserting default contacts...")
      await db.collection("contacts").insertMany(DEFAULT_DATA.contacts)
    }

    // Check if media collection is empty
    const mediaCount = await db.collection("media").countDocuments()

    // If media collection is empty, insert default media
    if (mediaCount === 0) {
      console.log("Inserting default media...")
      await db.collection("media").insertMany(DEFAULT_DATA.media)
    }

    // Check if settings collection is empty
    const settingsCount = await db.collection("settings").countDocuments()

    // If settings collection is empty, insert default settings
    if (settingsCount === 0) {
      console.log("Inserting default settings...")
      await db.collection("settings").insertOne(DEFAULT_DATA.settings)
    }

    // Check if users collection is empty
    const usersCount = await db.collection("users").countDocuments()

    // If users collection is empty, insert default users
    if (usersCount === 0) {
      console.log("Inserting default users...")
      await db.collection("users").insertMany(DEFAULT_DATA.users)
    }

    console.log("Database initialization complete!")
    return true
  } catch (error) {
    console.error("Error initializing database:", error)
    return false
  }
}
