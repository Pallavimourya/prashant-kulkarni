"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoPopup from "@/components/video-popup"

export default function EventsPage() {
  const youtubeVideos = [
    {
      id: "1",
      title: "History of Parantha",
      thumbnail: "https://img.youtube.com/vi/i6_mjzN-Q4E/maxresdefault.jpg",
      url: "https://youtu.be/i6_mjzN-Q4E?si=D3v5-oZdnHMOifFa",
      date: "May 15, 2023",
    },
    {
      id: "2",
      title: "History of Kadhi by Zuper Prashant",
      thumbnail: "https://img.youtube.com/vi/mkOjV7D8PpI/maxresdefault.jpg",
      url: "https://youtube.com/shorts/mkOjV7D8PpI?si=I-ZsYXbPOyaC2mjp",
      date: "April 20, 2023",
    },
    {
      id: "3",
      title: "The Secret to Success: Franchise Operating System Benefits",
      thumbnail: "https://img.youtube.com/vi/hsoS9xpSnc4/maxresdefault.jpg",
      url: "https://youtu.be/hsoS9xpSnc4?si=-ovFwXMRz0Lr5ZsD",
      date: "March 10, 2023",
    },
    {
      id: "4",
      title: "Unlocking Entrepreneurship Secrets",
      thumbnail: "https://img.youtube.com/vi/CbMxUpd7XWM/maxresdefault.jpg",
      url: "https://youtu.be/CbMxUpd7XWM?si=JfCXFw1Ix_mJLJEG",
      date: "February 5, 2023",
    },
    {
      id: "5",
      title: "Zuper Prashant | Start Now Don't Wish",
      thumbnail: "https://img.youtube.com/vi/Mz6keGGFOLU/maxresdefault.jpg",
      url: "https://youtu.be/Mz6keGGFOLU?si=POMSK-rh-ZXjt1mk",
      date: "January 20, 2023",
    },
    {
      id: "6",
      title: "Seize the Moment: Take the Risk, Unlock the Opportunity",
      thumbnail: "https://img.youtube.com/vi/8bWP6xHsOlo/maxresdefault.jpg",
      url: "https://youtu.be/8bWP6xHsOlo?si=yWnWIxpaD9lFGlEt",
      date: "December 15, 2022",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF9933] via-white to-[#138808] text-[#000080] py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Events</h1>
            <div className="w-20 h-1 bg-[#FF9933] mb-8"></div>
            <p className="max-w-3xl text-lg text-[#000080]">
              Book Prashant Kulkarni for speaking engagements, interviews, and events.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#000080]">Upcoming Events</h2>
            <div className="w-20 h-1 bg-[#FF9933] mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-600">
              Join Prashant at these upcoming speaking engagements and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "AIBC Eurasia Dubai",
                date: "March 14, 2023",
                location: "Dubai, UAE",
                image: "/prashant.jpg",
                description:
                  "Prashant will be speaking on food innovation and entrepreneurship at this premier business conference.",
                link: "#",
              },
              {
                id: 2,
                title: "Food Business Summit",
                date: "April 22, 2023",
                location: "Mumbai, India",
                image: "/prashant.jpg",
                description: "A keynote on scaling food businesses and creating sustainable franchise models.",
                link: "#",
              },
              {
                id: 3,
                title: "Entrepreneurship Conference",
                date: "May 10, 2023",
                location: "Bangalore, India",
                image: "/prashant.jpg",
                description: "Panel discussion on transitioning from corporate careers to successful entrepreneurship.",
                link: "#",
              },
            ].map((event) => (
              <Card key={event.id} className="overflow-hidden border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-colors shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#000080]">{event.title}</h3>
                  <div className="flex items-center text-[#138808] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-[#138808] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link href={event.link}>
                    <Button className="w-full bg-[#138808] hover:bg-[#138808]/90 text-white">Event Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF9933]/5 to-[#138808]/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#000080]">Past Events</h2>
            <div className="w-20 h-1 bg-[#FF9933] mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-600">
              Watch recordings and highlights from Prashant's previous speaking engagements.
            </p>
          </div>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white">
              <TabsTrigger value="videos" className="data-[state=active]:bg-[#138808] data-[state=active]:text-white">Videos</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-[#138808] data-[state=active]:text-white">Event Archive</TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="mt-8">
              <VideoPopup>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {youtubeVideos.map((video) => (
                    <Card key={video.id} className="overflow-hidden border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-colors">
                      <a href={video.url} className="video-popup">
                        <div className="relative aspect-video">
                          <Image
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-[#138808] bg-opacity-90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                              <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                      <CardContent className="p-4">
                        <div className="text-sm text-[#138808] mb-2">{video.date}</div>
                        <h3 className="font-semibold text-lg text-[#000080] mb-2">{video.title}</h3>
                        <a
                          href={video.url}
                          className="video-popup text-[#FF9933] hover:text-[#FF9933]/80 text-sm"
                        >
                          Watch on YouTube
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </VideoPopup>

              <div className="flex justify-center mt-8">
                <a href="https://www.youtube.com/c/zuperprashant" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933] hover:text-white group">
                    View All Videos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-8">
              <div className="space-y-6">
                {[2022, 2021, 2020].map((year) => (
                  <div key={year}>
                    <h3 className="text-xl font-bold mb-4 text-[#000080]">{year}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <Card key={item} className="overflow-hidden border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-colors">
                          <CardContent className="p-6">
                            <h4 className="font-bold mb-2 text-[#000080]">{`${year} Conference ${item}`}</h4>
                            <div className="flex items-center text-[#138808] mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="text-sm">{`${["January", "March", "June", "October"][item - 1]} ${item * 5}, ${year}`}</span>
                            </div>
                            <div className="flex items-center text-[#138808] mb-4">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span className="text-sm">
                                {["Mumbai", "Delhi", "Bangalore", "Hyderabad"][item - 1]}, India
                              </span>
                            </div>
                            <Link href="#">
                              <Button variant="link" className="p-0 h-auto font-medium text-[#FF9933] hover:text-[#FF9933]/80">
                                View Details
                              </Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#000080]">Book Me For An Event</h2>
              <p className="text-lg text-gray-600 mb-6">
                Prashant Kulkarni is available for keynote speaking, panel discussions, interviews, and workshops. His
                engaging presentations cover topics including:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-[#138808] font-bold mr-2">•</span>
                  <span>Entrepreneurship and Innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#138808] font-bold mr-2">•</span>
                  <span>Food Business and Franchise Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#138808] font-bold mr-2">•</span>
                  <span>Transitioning from Corporate to Entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#138808] font-bold mr-2">•</span>
                  <span>Building and Scaling Multiple Businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#138808] font-bold mr-2">•</span>
                  <span>Community Building and Mentorship</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-[#138808] hover:bg-[#138808]/90 text-white">Inquire About Booking</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/prashant.jpg" alt="Prashant Kulkarni Speaking" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF9933]/5 to-[#138808]/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#000080]">What People Say</h2>
            <div className="w-20 h-1 bg-[#FF9933] mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-600">
              Feedback from event organizers and attendees about Prashant's speaking engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Prashant's keynote was the highlight of our conference. His insights on food entrepreneurship were both practical and inspiring.",
                name: "Rajiv Sharma",
                title: "Event Director, Food Business Summit",
              },
              {
                quote:
                  "The audience was captivated by Prashant's journey from software engineer to successful entrepreneur. His authentic storytelling and practical advice resonated with everyone.",
                name: "Anita Patel",
                title: "Program Coordinator, Entrepreneurship Conference",
              },
              {
                quote:
                  "Prashant brings a unique perspective to the stage. His ability to break down complex business concepts into actionable steps is remarkable.",
                name: "Vikram Mehta",
                title: "CEO, Business Leadership Forum",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white p-6 rounded-lg shadow-md border-[#FF9933]/20 hover:border-[#FF9933]/40 transition-colors">
                <CardContent className="p-0">
                  <div className="text-4xl text-[#FF9933]/20 mb-4">"</div>
                  <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-[#000080]">{testimonial.name}</p>
                    <p className="text-sm text-[#138808]">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#FF9933] to-[#138808] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Prashant?</h2>
              <p className="text-white/90 max-w-md">
                Contact us today to check availability and discuss your event requirements.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-[#138808] hover:bg-white/90">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
