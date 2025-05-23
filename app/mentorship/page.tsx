"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Award, Clock, MessageSquare } from "lucide-react"

const programs = [
  {
    title: "Startup Mentorship",
    description: "One-on-one guidance for early-stage startups",
    duration: "3 months",
    sessions: "12 sessions",
    price: "₹50,000",
    features: [
      "Business model validation",
      "Market strategy development",
      "Pitch deck preparation",
      "Investor connections"
    ]
  },
  {
    title: "Business Growth",
    description: "Strategic guidance for scaling businesses",
    duration: "6 months",
    sessions: "24 sessions",
    price: "₹1,00,000",
    features: [
      "Growth strategy planning",
      "Team building & leadership",
      "Process optimization",
      "International expansion"
    ]
  },
  {
    title: "Executive Coaching",
    description: "Personal development for business leaders",
    duration: "12 months",
    sessions: "48 sessions",
    price: "₹2,00,000",
    features: [
      "Leadership development",
      "Strategic decision making",
      "Work-life balance",
      "Personal branding"
    ]
  }
]

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart",
    content: "Prashant's mentorship helped me transform my startup idea into a successful business. His insights on market strategy were invaluable.",
    image: "/testimonials/rahul.jpg"
  },
  {
    name: "Priya Patel",
    role: "CEO, GrowthLabs",
    content: "The business growth program gave me the tools and confidence to scale my company from 10 to 100 employees.",
    image: "/testimonials/priya.jpg"
  },
  {
    name: "Amit Kumar",
    role: "Director, InnovateCorp",
    content: "Executive coaching with Prashant helped me become a more effective leader and make better strategic decisions.",
    image: "/testimonials/amit.jpg"
  }
]

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Transform Your Business Journey
        </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get personalized guidance from a successful entrepreneur with 15+ years of experience in building and scaling businesses.
            </p>
            <Button size="lg" className="gap-2 bg-lime-600 hover:bg-lime-700 text-white">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Mentees</div>
        </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Success Rate</div>
              </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Companies Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mentorship Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all border-lime-200">
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      <span>{program.sessions}</span>
                    </div>
                    <div className="text-2xl font-bold text-lime-600">{program.price}</div>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-lime-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-lime-600 hover:bg-lime-700 text-white">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          </div>
        </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-lime-600 text-white">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of successful entrepreneurs who have transformed their businesses with personalized mentorship.
              </p>
              <Button variant="secondary" size="lg" className="gap-2 bg-white text-lime-600 hover:bg-lime-50">
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
