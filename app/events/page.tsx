import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Events</h1>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-300">
              Book Prashant Kulkarni for speaking engagements, interviews, and events.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
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
                image: "/placeholder.svg?height=300&width=500",
                description:
                  "Prashant will be speaking on food innovation and entrepreneurship at this premier business conference.",
                link: "#",
              },
              {
                id: 2,
                title: "Food Business Summit",
                date: "April 22, 2023",
                location: "Mumbai, India",
                image: "/placeholder.svg?height=300&width=500",
                description: "A keynote on scaling food businesses and creating sustainable franchise models.",
                link: "#",
              },
              {
                id: 3,
                title: "Entrepreneurship Conference",
                date: "May 10, 2023",
                location: "Bangalore, India",
                image: "/placeholder.svg?height=300&width=500",
                description: "Panel discussion on transitioning from corporate careers to successful entrepreneurship.",
                link: "#",
              },
            ].map((event) => (
              <Card key={event.id} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Link href={event.link}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">Event Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Past Events</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Watch recordings and highlights from Prashant's previous speaking engagements.
            </p>
          </div>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="events">Event Archive</TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "History of Paratha | Zuper Prashant",
                  "History of Kadhi by Zuper Prashant",
                  "The Secret to Success: Franchise Operating System Benefits",
                  "Unlocking Entrepreneurship Secrets",
                  "Zuper Prashant | Start Now Don't Wish",
                  "Seize the Moment: Take the Risk, Unlock the Opportunity",
                ].map((title, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                    <div className="relative h-48 w-full bg-gray-200">
                      <Image src={`/placeholder.svg?height=300&width=500`} alt={title} fill className="object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black bg-opacity-60 rounded-full p-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 5V19L19 12L8 5Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium line-clamp-2">{title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Link href="#">
                  <Button variant="outline" className="group">
                    View All Videos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-8">
              <div className="space-y-6">
                {[2022, 2021, 2020].map((year) => (
                  <div key={year}>
                    <h3 className="text-xl font-bold mb-4">{year}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <Card key={item} className="overflow-hidden">
                          <CardContent className="p-6">
                            <h4 className="font-bold mb-2">{`${year} Conference ${item}`}</h4>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="text-sm">{`${["January", "March", "June", "October"][item - 1]} ${item * 5}, ${year}`}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground mb-4">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span className="text-sm">
                                {["Mumbai", "Delhi", "Bangalore", "Hyderabad"][item - 1]}, India
                              </span>
                            </div>
                            <Link href="#">
                              <Button variant="link" className="p-0 h-auto font-medium text-black">
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
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Book Me For An Event</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Prashant Kulkarni is available for keynote speaking, panel discussions, interviews, and workshops. His
                engaging presentations cover topics including:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span>Entrepreneurship and Innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span>Food Business and Franchise Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span>Transitioning from Corporate to Entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span>Building and Scaling Multiple Businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black font-bold mr-2">•</span>
                  <span>Community Building and Mentorship</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-black hover:bg-gray-800 text-white">Inquire About Booking</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Prashant Kulkarni Speaking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
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
              <Card key={index} className="bg-white p-6 rounded-lg shadow-md">
                <CardContent className="p-0">
                  <div className="text-4xl text-gray-200 mb-4">"</div>
                  <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Prashant?</h2>
              <p className="text-gray-300 max-w-md">
                Contact us today to check availability and discuss your event requirements.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-200">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
