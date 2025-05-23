"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Award, Clock, MessageSquare, Star, Trophy, Quote, ChefHat, Coffee, Utensils, Soup } from "lucide-react"

const programs = [
  {
    title: "Plus Food Training",
    description: "Comprehensive training program for food entrepreneurs",
    duration: "3 months",
    sessions: "24 sessions",
    price: "₹75,000",
    features: [
      "Advanced food preparation techniques",
      "Business operations management",
      "Quality control systems",
      "Customer service excellence"
    ],
    icon: <ChefHat className="h-8 w-8 text-lime-600" />
  },
  {
    title: "Andeywala Food Training",
    description: "Specialized training for egg-based food businesses",
    duration: "2 months",
    sessions: "16 sessions",
    price: "₹50,000",
    features: [
      "Egg-based recipe development",
      "Food safety standards",
      "Inventory management",
      "Cost optimization"
    ],
    icon: <Coffee className="h-8 w-8 text-lime-600" />
  },
  {
    title: "Punchaiyat Food Training",
    description: "Traditional food business training program",
    duration: "4 months",
    sessions: "32 sessions",
    price: "₹1,00,000",
    features: [
      "Traditional recipe preservation",
      "Modern business practices",
      "Marketing strategies",
      "Supply chain management"
    ],
    icon: <Utensils className="h-8 w-8 text-lime-600" />
  },
  {
    title: "Bakaiti Food Training",
    description: "Street food business development program",
    duration: "2 months",
    sessions: "16 sessions",
    price: "₹45,000",
    features: [
      "Street food preparation",
      "Mobile business setup",
      "Location optimization",
      "Customer engagement"
    ],
    icon: <Soup className="h-8 w-8 text-lime-600" />
  }
]

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Plus Food Graduate",
    content: "The Plus Food Training program transformed my approach to food business. I've successfully opened three outlets and expanded my menu offerings.",
    icon: <Trophy className="h-8 w-8 text-lime-600" />
  },
  {
    name: "Priya Patel",
    role: "Andeywala Graduate",
    content: "The specialized egg-based training helped me create unique recipes and establish a successful breakfast chain. The business insights were invaluable.",
    icon: <Award className="h-8 w-8 text-lime-600" />
  },
  {
    name: "Vikram Singh",
    role: "Punchaiyat Graduate",
    content: "Learning to balance traditional recipes with modern business practices has helped me preserve our culinary heritage while growing a successful business.",
    icon: <Star className="h-8 w-8 text-lime-600" />
  }
]

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400">
              Food Business Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your food business with expert training and mentorship from industry leaders
            </p>
            <Button size="lg" className="gap-2 bg-lime-600 hover:bg-lime-700 text-white">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Mission is to foster and nurture entrepreneurship in India by providing valuable resources, 
              mentorship, and guidance to aspiring entrepreneurs, empowering them to create successful ventures 
              and contribute to the country's economic growth.
            </p>
            <div className="relative">
              <Quote className="h-12 w-12 text-lime-600 mx-auto mb-4" />
              <p className="text-xl italic text-gray-700">
                "Success is a journey, and mentorship is the compass that guides you towards your destination."
              </p>
              <p className="text-lime-600 font-semibold mt-2">- Prashant Kulkarni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all border-lime-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-lime-50 flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
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
                    <Button className="w-full mt-4 bg-lime-600 hover:bg-lime-700 text-white">Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from entrepreneurs who have transformed their food businesses through our training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all border-lime-100">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-24 w-24 text-lime-600" />
                </div>
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full bg-lime-50 flex items-center justify-center">
                      {testimonial.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-lime-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Food Business Journey?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of successful food entrepreneurs who have transformed their businesses with our specialized training programs.
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
