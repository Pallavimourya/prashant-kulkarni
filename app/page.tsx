"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoHero from "@/components/video-hero"
import ThreePillars from "@/components/three-pillars"
import ImpactCounter from "@/components/impact-counter"
import BlogCarousel from "@/components/blog-carousel"
import LatestEvents from "@/components/latest-events"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <VideoHero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-theme-dark">My Story</h2>
            <div className="w-20 h-1 bg-theme-accent mb-8"></div>
            <p className="max-w-3xl text-lg text-theme-muted">
              Prashant Kulkarni is a visionary entrepreneur with a dynamic portfolio of ventures that span the food
              industry and beyond. As a Parallel Entrepreneur, he excels in managing multiple businesses simultaneously,
              leveraging his expertise, innovation, and strategic thinking to drive success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/prashant.jpg"
                alt="Prashant Kulkarni"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-theme-dark">Parallel Entrepreneur</h3>
              <p className="text-theme-muted mb-4">
                Prashant Kulkarni's journey as a parallel entrepreneur has led to the creation of multiple successful
                businesses that have revolutionized their respective industries. His approach to business building
                combines innovation, standardization, and scalability.
              </p>
              <p className="text-theme-muted mb-4">
                From transforming the street food landscape with Chatar Patar to revolutionizing food education through
                Tasty Alphabets, Prashant's ventures are characterized by their innovative approach and commitment to
                excellence.
              </p>
              <p className="text-theme-muted">
                As the CEO of Food Franchise India and founder of Zuper World, he continues to empower aspiring
                entrepreneurs and create platforms for growth and innovation.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme-primary hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-theme-dark">Director of Tasty Alphabets</h3>
              <p className="text-theme-muted">
                Revolutionized the field of food, foodtech, food education, packaging standards, and food
                standardization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme-primary hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-theme-dark">CEO of Food Franchise India</h3>
              <p className="text-theme-muted">
                Leading organization dedicated to nurturing growth and innovation in the food franchise industry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-theme-primary hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-theme-dark">Founder of Zuper World</h3>
              <p className="text-theme-muted">
                Platform designed to support and mentor individuals on their entrepreneurial journey with technology and
                win-win business models.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/about">
              <Button
                variant="outline"
                className="group border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="three-pillars">
        <ThreePillars />
      </section>

      {/* Impact Counter Section */}
      <ImpactCounter />

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-theme-dark">
              Latest Ideas & Insights
            </h2>
            <div className="w-20 h-1 bg-theme-accent mb-8"></div>
            <p className="max-w-3xl text-lg text-theme-muted">
              Explore Prashant's latest thoughts, insights, and ideas on entrepreneurship, innovation, and business
              growth.
            </p>
          </div>

          <BlogCarousel />

          <div className="flex justify-center mt-12">
            <Link href="/ideas">
              <Button
                variant="outline"
                className="group border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-theme-light">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-theme-dark">Upcoming Events</h2>
            <div className="w-20 h-1 bg-theme-accent mb-8"></div>
            <p className="max-w-3xl text-lg text-theme-muted">
              Join Prashant at these upcoming speaking engagements and events.
            </p>
          </div>

          <LatestEvents />

          <div className="flex justify-center mt-12">
            <Link href="/events">
              <Button className="bg-theme-primary hover:bg-theme-secondary text-white">Book Me For An Event</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-theme-dark text-white">
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
                className="px-4 py-3 rounded-md bg-theme-primary/20 text-white border border-theme-primary/30 focus:outline-none focus:ring-2 focus:ring-theme-accent flex-grow"
                required
              />
              <Button type="submit" className="bg-theme-accent text-white hover:bg-theme-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="bg-theme-primary text-white p-3 rounded-full shadow-lg hover:bg-theme-secondary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </main>
  )
}
