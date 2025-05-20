import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IdeasPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ideas & Insights</h1>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-300">
              Explore Prashant Kulkarni's thoughts on entrepreneurship, innovation, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">FEATURED ARTICLE</div>
              <h2 className="text-3xl font-bold mb-4">
                Trailblazing Success: Prashant Kulkarni's Leadership Making a Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Exploring the leadership principles and business acumen that have made Prashant Kulkarni a standout
                entrepreneur in the food industry and beyond.
              </p>
              <p className="text-muted-foreground mb-6">
                In this comprehensive article, we delve into the key strategies, mindset shifts, and practical
                approaches that have enabled Prashant to build multiple successful businesses while maintaining a focus
                on innovation and community impact.
              </p>
              <Link href="/ideas/trailblazing-success">
                <Button className="group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/events/event.jpg"
                alt="Prashant Kulkarni Leadership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Insights, stories, and practical advice from Prashant's entrepreneurial journey.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="entrepreneurship">Entrepreneurship</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
              <TabsTrigger value="newsroom">Newsroom</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Chatar Patar: Standardizing Street Food Across India",
                    category: "Newsroom",
                    date: "June 15, 2023",
                    excerpt:
                      "Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "chatar-patar-standardizing-street-food",
                  },
                  {
                    title: "From Coding Software to Selling Panipuri",
                    category: "Newsroom",
                    date: "June 15, 2023",
                    excerpt:
                      "In a remarkable twist of fate, Prashant Kulkarni's journey took him from coding software to revolutionizing the street food industry...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "coding-software-to-selling-panipuri",
                  },
                  {
                    title: "The Power of Mentorship",
                    category: "Entrepreneurship",
                    date: "June 13, 2023",
                    excerpt:
                      "Empowering Growth and Success: Today, as Prashant Kulkarni, I am thrilled to explore the transformative power of mentorship...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "power-of-mentorship",
                  },
                  {
                    title: "Chatar Patar's Journey: From a Vision to a Culinary Sensation",
                    category: "Innovation",
                    date: "June 13, 2023",
                    excerpt:
                      "Greetings, food enthusiasts and curious minds! Today, as Prashant Kulkarni, I am thrilled to take you through the inspiring journey of Chatar Patar...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "chatar-patar-journey",
                  },
                  {
                    title: "Mastering Time Management",
                    category: "Entrepreneurship",
                    date: "June 13, 2023",
                    excerpt:
                      "Unlocking Productivity and Success: Today, I want to share with you some valuable insights and strategies on mastering time management...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "mastering-time-management",
                  },
                  {
                    title: "The Journey of Entrepreneurship",
                    category: "Entrepreneurship",
                    date: "June 2, 2023",
                    excerpt:
                      "Join us as we dive into the inspiring journey of Prashant Kulkarni, a visionary entrepreneur who has transformed the landscape of food business in India...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "journey-of-entrepreneurship",
                  },
                ].map((post, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/ideas/${post.slug}`}>
                        <Button variant="link" className="p-0 h-auto font-medium text-black">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="entrepreneurship" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Power of Mentorship",
                    category: "Entrepreneurship",
                    date: "June 13, 2023",
                    excerpt:
                      "Empowering Growth and Success: Today, as Prashant Kulkarni, I am thrilled to explore the transformative power of mentorship...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "power-of-mentorship",
                  },
                  {
                    title: "Mastering Time Management",
                    category: "Entrepreneurship",
                    date: "June 13, 2023",
                    excerpt:
                      "Unlocking Productivity and Success: Today, I want to share with you some valuable insights and strategies on mastering time management...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "mastering-time-management",
                  },
                  {
                    title: "The Journey of Entrepreneurship",
                    category: "Entrepreneurship",
                    date: "June 2, 2023",
                    excerpt:
                      "Join us as we dive into the inspiring journey of Prashant Kulkarni, a visionary entrepreneur who has transformed the landscape of food business in India...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "journey-of-entrepreneurship",
                  },
                ].map((post, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/ideas/${post.slug}`}>
                        <Button variant="link" className="p-0 h-auto font-medium text-black">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="innovation" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Chatar Patar's Journey: From a Vision to a Culinary Sensation",
                    category: "Innovation",
                    date: "June 13, 2023",
                    excerpt:
                      "Greetings, food enthusiasts and curious minds! Today, as Prashant Kulkarni, I am thrilled to take you through the inspiring journey of Chatar Patar...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "chatar-patar-journey",
                  },
                ].map((post, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/ideas/${post.slug}`}>
                        <Button variant="link" className="p-0 h-auto font-medium text-black">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="newsroom" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Chatar Patar: Standardizing Street Food Across India",
                    category: "Newsroom",
                    date: "June 15, 2023",
                    excerpt:
                      "Chatar Patar, a renowned name in the culinary realm, has revolutionized the street food scene in India...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "chatar-patar-standardizing-street-food",
                  },
                  {
                    title: "From Coding Software to Selling Panipuri",
                    category: "Newsroom",
                    date: "June 15, 2023",
                    excerpt:
                      "In a remarkable twist of fate, Prashant Kulkarni's journey took him from coding software to revolutionizing the street food industry...",
                    image: "/placeholder.svg?height=400&width=600",
                    slug: "coding-software-to-selling-panipuri",
                  },
                ].map((post, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/ideas/${post.slug}`}>
                        <Button variant="link" className="p-0 h-auto font-medium text-black">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="group">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">SIGN UP FOR IDEAS</h2>
            <p className="max-w-2xl text-gray-300 mb-8">
              Join my newsletter to receive the latest insights, ideas, and updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white flex-grow"
                required
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
