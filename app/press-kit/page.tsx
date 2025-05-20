import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText, Video, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PressKitPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Press Kit</h1>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-300">
              Official media resources for Prashant Kulkarni - Parallel Entrepreneur, Innovator, Speaker, and Thinker.
            </p>
          </div>
        </div>
      </section>

      {/* Press Kit Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Media Resources</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to the official press kit for Prashant Kulkarni. Here you'll find downloadable assets, biography
                information, and media mentions to support your coverage.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                These resources are available for journalists, event organizers, and media professionals. For additional
                materials or specific requests, please contact our media relations team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Press Kit
                </Button>
                <Link href="/contact">
                  <Button variant="outline">Media Inquiry</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Prashant Kulkarni Press Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Assets */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Downloadable Assets</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              High-quality assets for media use, including photos, logos, and brand materials.
            </p>
          </div>

          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="logos">Logos</TabsTrigger>
              <TabsTrigger value="bios">Biographies</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <AssetCard
                    key={item}
                    title={`Official Headshot ${item}`}
                    type="JPG, PNG | High Resolution"
                    image={`/placeholder.svg?height=400&width=300`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="logos" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Tasty Alphabets", "Food Franchise India", "Zuper World", "Chatar Patar"].map((brand) => (
                  <AssetCard
                    key={brand}
                    title={`${brand} Logo`}
                    type="PNG, SVG | Transparent Background"
                    image={`/placeholder.svg?height=300&width=300`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bios" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AssetCard
                  title="Full Biography"
                  type="PDF, DOCX | 1,200 words"
                  image={`/placeholder.svg?height=300&width=400`}
                  icon={<FileText className="h-10 w-10" />}
                />
                <AssetCard
                  title="Short Biography"
                  type="PDF, DOCX | 300 words"
                  image={`/placeholder.svg?height=300&width=400`}
                  icon={<FileText className="h-10 w-10" />}
                />
                <AssetCard
                  title="Speaking Introduction"
                  type="PDF, DOCX | 150 words"
                  image={`/placeholder.svg?height=300&width=400`}
                  icon={<FileText className="h-10 w-10" />}
                />
                <AssetCard
                  title="Achievements & Awards"
                  type="PDF, DOCX | Comprehensive List"
                  image={`/placeholder.svg?height=300&width=400`}
                  icon={<FileText className="h-10 w-10" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AssetCard
                  title="Promo Video"
                  type="MP4 | 1080p | 2 minutes"
                  image={`/placeholder.svg?height=300&width=500`}
                  icon={<Video className="h-10 w-10" />}
                />
                <AssetCard
                  title="Speaking Highlights"
                  type="MP4 | 1080p | 5 minutes"
                  image={`/placeholder.svg?height=300&width=500`}
                  icon={<Video className="h-10 w-10" />}
                />
                <AssetCard
                  title="Interview Clips"
                  type="MP4 | 1080p | Various Lengths"
                  image={`/placeholder.svg?height=300&width=500`}
                  icon={<Video className="h-10 w-10" />}
                />
                <AssetCard
                  title="B-Roll Footage"
                  type="MP4 | 1080p | 10 minutes"
                  image={`/placeholder.svg?height=300&width=500`}
                  icon={<Video className="h-10 w-10" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recent Media Coverage */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Recent Press</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Latest media mentions, interviews, and press coverage featuring Prashant Kulkarni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chatar Patar: Standardizing Street Food Across India",
                publication: "Food Business Magazine",
                date: "June 15, 2023",
                excerpt:
                  "Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India...",
                link: "#",
              },
              {
                title: "From Coding Software to Selling Panipuri",
                publication: "Entrepreneur Weekly",
                date: "June 15, 2023",
                excerpt:
                  "In a remarkable twist of fate, Prashant Kulkarni's journey took him from coding software to revolutionizing the street food industry...",
                link: "#",
              },
              {
                title: "Infosys Techie Leaves Company To Have A Healthy Chaat Brand",
                publication: "Business Insider",
                date: "June 15, 2023",
                excerpt:
                  "In a bold move that showcases the spirit of entrepreneurship and a passion for healthy food options...",
                link: "#",
              },
              {
                title: "The Journey of Entrepreneurship: Insights from Prashant Kulkarni",
                publication: "Startup Journal",
                date: "June 2, 2023",
                excerpt:
                  "Join us as we dive into the inspiring journey of Prashant Kulkarni, a visionary entrepreneur...",
                link: "#",
              },
              {
                title: "Trailblazing Success: Prashant Kulkarni's Leadership",
                publication: "Leadership Today",
                date: "May 28, 2023",
                excerpt:
                  "Exploring the leadership principles and business acumen that have made Prashant Kulkarni a standout entrepreneur...",
                link: "#",
              },
              {
                title: "Revolutionizing Food Education with Tasty Alphabets",
                publication: "Education Innovation",
                date: "May 15, 2023",
                excerpt:
                  "How Prashant Kulkarni's Tasty Alphabets is changing the landscape of food education and culinary learning...",
                link: "#",
              },
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Newspaper className="h-4 w-4 mr-2" />
                    <span>{article.publication}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Link href={article.link} className="text-sm font-medium text-black hover:underline">
                    Read Full Article
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="group">
              View All Press Coverage
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Media Inquiries</h2>
              <p className="text-gray-300 max-w-md">
                For press inquiries, interview requests, or additional information, please contact our media relations
                team.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200">Contact Press Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function AssetCard({
  title,
  type,
  image,
  icon,
}: {
  title: string
  type: string
  image: string
  icon?: React.ReactNode
}) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
        {icon ? (
          <div className="text-gray-400">{icon}</div>
        ) : (
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{type}</p>
        <Button variant="outline" size="sm" className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardContent>
    </Card>
  )
}
