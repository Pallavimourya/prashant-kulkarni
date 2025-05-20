"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample gallery data
const galleryItems = [
  {
    id: 1,
    title: "Speaking at Business Conference",
    category: "speaking",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Chatar Patar Store Launch",
    category: "business",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Food Franchise India Summit",
    category: "events",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Community Outreach Program",
    category: "community",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Keynote at Entrepreneurship Conference",
    category: "speaking",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Tasty Alphabets Product Launch",
    category: "business",
    year: "2021",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    title: "Panel Discussion on Food Innovation",
    category: "speaking",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 8,
    title: "Mentorship Workshop",
    category: "community",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    title: "International Food Expo",
    category: "events",
    year: "2021",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 10,
    title: "Zuper World Launch Event",
    category: "business",
    year: "2020",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 11,
    title: "Entrepreneur Awards Ceremony",
    category: "events",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 12,
    title: "Campus Entrepreneurship Drive",
    category: "community",
    year: "2021",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all")

  const filterItemsByCategory = (category: string) => {
    if (selectedYear === "all") {
      return category === "all" ? galleryItems : galleryItems.filter((item) => item.category === category)
    } else {
      return category === "all"
        ? galleryItems.filter((item) => item.year === selectedYear)
        : galleryItems.filter((item) => item.category === category && item.year === selectedYear)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Gallery</h1>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-300">
              A visual journey through Prashant Kulkarni's speaking engagements, business launches, and community work.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          {/* Year Filter */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {["all", "2023", "2022", "2021", "2020"].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedYear === year ? "bg-black text-white" : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {year === "all" ? "All Years" : year}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="speaking">Speaking</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            {["all", "speaking", "business", "events", "community"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterItemsByCategory(category).map((item) => (
                    <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md">
                      <div className="relative h-64 w-full">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-200 text-sm">{item.year}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {filterItemsByCategory(category).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No images found for the selected filters.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  )
}
