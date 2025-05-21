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
        "<p>Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India. With a vision to standardize street food and make it accessible to all, Chatar Patar has created a unique franchise model that has seen tremendous success.</p><p>The brand focuses on hygiene, quality, and consistency, ensuring that customers get the same great taste no matter which outlet they visit. This approach has helped them expand rapidly across the country.</p><p>Their innovative menu combines traditional flavors with modern presentation, appealing to both the older generation who crave authentic tastes and the younger crowd looking for something Instagram-worthy.</p>",
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
        "<p>As India's food industry continues to evolve, franchising presents unique opportunities for entrepreneurs looking to enter the market. The franchise model offers a proven business system, established brand recognition, and ongoing support.</p><p>In recent years, we've seen a shift towards more specialized and niche food concepts. Consumers are increasingly looking for unique dining experiences, and franchises that can offer something different are seeing great success.</p><p>Technology is also playing a crucial role in the future of food franchising. From online ordering systems to customer loyalty programs, franchises that embrace digital transformation are positioning themselves for long-term growth.</p>",
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
        "Join us for the premier blockchain and AI event in Dubai. This conference brings together industry leaders, innovators, and entrepreneurs to discuss the latest trends and developments in blockchain technology and artificial intelligence.",
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
        "A gathering of food industry leaders to discuss the future of food business in India. Topics will include franchising opportunities, digital transformation in the food industry, and sustainable food practices.",
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
        "I would like to invite you to speak at our upcoming business conference in Mumbai. We believe your insights on entrepreneurship and innovation would be valuable to our audience. Please let me know if you're interested and available.",
      date: "May 15, 2023",
      status: "New",
      createdAt: new Date(),
    },
    {
      name: "Priya Patel",
      email: "priya.patel@example.com",
      subject: "Franchise Inquiry",
      message:
        "I'm interested in opening a franchise of one of your food brands. Could you provide more information about the investment required, support provided, and the application process? I have experience in the food industry and am looking to expand my business portfolio.",
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

// Initialize the database with default data if empty
export async function initializeDatabase() {
  try {
    const db = await connectToDatabase()

    // Create collections if they don't exist
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map((c) => c.name)

    // Create collections and indexes
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

    if (!collectionNames.includes("activity_logs")) {
      await db.createCollection("activity_logs")
      await db.collection("activity_logs").createIndex({ createdAt: 1 })
    }

    // Check if blogs collection is empty
    const blogsCount = await db.collection("blogs").countDocuments()

    // If blogs collection is empty, insert default blogs
    if (blogsCount === 0) {
      await db.collection("blogs").insertMany(DEFAULT_DATA.blogs)
    }

    // Check if events collection is empty
    const eventsCount = await db.collection("events").countDocuments()

    // If events collection is empty, insert default events
    if (eventsCount === 0) {
      await db.collection("events").insertMany(DEFAULT_DATA.events)
    }

    // Check if contacts collection is empty
    const contactsCount = await db.collection("contacts").countDocuments()

    // If contacts collection is empty, insert default contacts
    if (contactsCount === 0) {
      await db.collection("contacts").insertMany(DEFAULT_DATA.contacts)
    }

    // Check if media collection is empty
    const mediaCount = await db.collection("media").countDocuments()

    // If media collection is empty, insert default media
    if (mediaCount === 0) {
      await db.collection("media").insertMany(DEFAULT_DATA.media)
    }

    // Check if settings collection is empty
    const settingsCount = await db.collection("settings").countDocuments()

    // If settings collection is empty, insert default settings
    if (settingsCount === 0) {
      await db.collection("settings").insertOne(DEFAULT_DATA.settings)
    }

    // Check if users collection is empty
    const usersCount = await db.collection("users").countDocuments()

    // If users collection is empty, insert default users
    if (usersCount === 0) {
      await db.collection("users").insertMany(DEFAULT_DATA.users)
    }

    return { success: true, message: "Database initialized successfully" }
  } catch (error) {
    console.error("Error initializing database:", error)
    return { success: false, message: "Error initializing database", error }
  }
}
