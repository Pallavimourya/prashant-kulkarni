"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Clock,
  MessageSquare,
  Star,
  Trophy,
  Play,
  CheckCircle,
  Infinity,
  RefreshCw,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courseCategories = ["All", "Food Business", "Entrepreneurship", "Marketing", "Operations"]

const courses = [
  {
    id: 1,
    slug: "plus-food-training-mastery",
    title: "Plus Food Training Mastery",
    description: "Complete food business training from setup to scaling",
    duration: "12 weeks",
    lessons: "48 lessons",
    price: "₹75,000",
    originalPrice: "₹1,00,000",
    category: "Food Business",
    level: "Intermediate",
    students: "2,500+",
    rating: 4.8,
    features: [
      "Advanced food preparation techniques",
      "Business operations management",
      "Quality control systems",
      "Customer service excellence",
      "Franchise development",
      "Digital marketing for food business",
    ],
    thumbnail: "/prashant.jpg",
    bestseller: true,
  },
  {
    id: 2,
    slug: "andeywala-business-blueprint",
    title: "Andeywala Business Blueprint",
    description: "Specialized training for egg-based food ventures",
    duration: "8 weeks",
    lessons: "32 lessons",
    price: "₹50,000",
    originalPrice: "₹70,000",
    category: "Food Business",
    level: "Beginner",
    students: "1,800+",
    rating: 4.7,
    features: [
      "Egg-based recipe development",
      "Food safety standards",
      "Inventory management",
      "Cost optimization",
      "Menu engineering",
      "Location strategy",
    ],
    thumbnail: "/prashant.jpg",
  },
  {
    id: 3,
    slug: "entrepreneurship-fundamentals",
    title: "Entrepreneurship Fundamentals",
    description: "Build your entrepreneurial mindset and skills",
    duration: "6 weeks",
    lessons: "24 lessons",
    price: "₹35,000",
    originalPrice: "₹50,000",
    category: "Entrepreneurship",
    level: "Beginner",
    students: "3,200+",
    rating: 4.9,
    features: [
      "Business idea validation",
      "Market research techniques",
      "Financial planning",
      "Team building",
      "Leadership skills",
      "Growth strategies",
    ],
    thumbnail: "/prashant.jpg",
    popular: true,
  },
  {
    slug: "entrepreneurship-fundamentals",
    id: 4,
    title: "Digital Marketing for Food Brands",
    description: "Master online marketing for food businesses",
    duration: "10 weeks",
    lessons: "40 lessons",
    price: "₹60,000",
    originalPrice: "₹80,000",
    category: "Marketing",
    level: "Intermediate",
    students: "1,500+",
    rating: 4.6,
    features: [
      "Social media marketing",
      "Content creation strategies",
      "Influencer partnerships",
      "Email marketing",
      "SEO for restaurants",
      "Paid advertising",
    ],
    thumbnail: "/prashant.jpg",
  },
  {
    slug: "restaurant-operations",
    id: 5,
    title: "Restaurant Operations Excellence",
    description: "Streamline your food business operations",
    duration: "8 weeks",
    lessons: "36 lessons",
    price: "₹55,000",
    originalPrice: "₹75,000",
    category: "Operations",
    level: "Advanced",
    students: "1,200+",
    rating: 4.8,
    features: [
      "Supply chain optimization",
      "Staff management",
      "Technology integration",
      "Quality assurance",
      "Financial controls",
      "Customer experience",
    ],
    thumbnail: "/prashant.jpg",
  },
  {
    slug: "franchise-development",
    id: 6,
    title: "Franchise Development Program",
    description: "Scale your food business through franchising",
    duration: "16 weeks",
    lessons: "64 lessons",
    price: "₹1,25,000",
    originalPrice: "₹1,75,000",
    category: "Entrepreneurship",
    level: "Advanced",
    students: "800+",
    rating: 4.9,
    features: [
      "Franchise model development",
      "Legal documentation",
      "Training systems",
      "Brand standardization",
      "Partner selection",
      "Growth scaling",
    ],
    thumbnail: "/prashant.jpg",
    premium: true,
  },
]

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Plus Food Graduate",
    business: "Sharma's Kitchen Chain",
    content:
      "The Plus Food Training program transformed my approach to food business. I've successfully opened three outlets and expanded my menu offerings.",
    image: "/prashant.jpg",
    revenue: "₹50L+ Annual Revenue",
  },
  {
    name: "Priya Patel",
    role: "Digital Marketing Graduate",
    business: "Patel's Breakfast Corner",
    content:
      "The digital marketing course helped me grow my Instagram following from 500 to 50,000 in just 6 months. My sales tripled!",
    image: "/prashant.jpg",
    revenue: "300% Sales Growth",
  },
  {
    name: "Vikram Singh",
    role: "Franchise Program Graduate",
    business: "Singh's Street Food",
    content:
      "From a single cart to 15 franchise locations across 3 cities. The franchise development program was a game-changer.",
    image: "/prashant.jpg",
    revenue: "15 Franchise Locations",
  },
]

export default function MentorshipPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCourses =
    selectedCategory === "All" ? courses : courses.filter((course) => course.category === selectedCategory)

  return (
    <main className="min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#FF9933] via-white to-[#138808]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#000080]">
              Skyrocket Your{" "}
              <span className="bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
                Food Business!
              </span>
        </h1>
            <p className="text-xl text-[#000080] mb-8 max-w-2xl mx-auto">
              Years of experience crunched into easy and risk-free courses!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-[#000080]">
              <div className="flex items-center gap-2">
                <Infinity className="h-5 w-5 text-[#FF9933]" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-[#FF9933]" />
                <span>14-Day Refund Policy</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#FF9933]" />
                <span>10,000+ Students Enrolled</span>
              </div>
            </div>

            <Button size="lg" className="gap-2 bg-[#000080] hover:bg-[#000080]/90 text-white mb-12">
              Explore All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Video Preview */}
            <div className="relative max-w-3xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#000080] to-[#138808] border border-white">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg?height=1080&width=1920"
                >
                  <source src="/Images/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" variant="secondary" className="rounded-full h-16 w-16 p-0 bg-white text-[#000080] hover:bg-white/90">
                    <Play className="h-6 w-6 ml-1" />
            </Button>
          </div>
        </div>
          </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#138808]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">Practical Courses</h2>
            <p className="text-xl text-[#FF9933] font-medium mb-8">For Food Business & Entrepreneurship</p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {courseCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-[#000080] hover:bg-[#000080]/90 text-white"
                      : "border-[#FF9933] text-[#000080] hover:bg-[#FF9933]/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                {/* Badge */}
                {course.bestseller && (
                  <Badge className="absolute top-4 left-4 z-10 bg-[#FF9933] hover:bg-[#FF9933]/90 text-white">
                    Bestseller
                  </Badge>
                )}
                {course.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-[#138808] hover:bg-[#138808]/90 text-white">
                    Most Popular
                  </Badge>
                )}
                {course.premium && (
                  <Badge className="absolute top-4 left-4 z-10 bg-[#000080] hover:bg-[#000080]/90 text-white">
                    Premium
                  </Badge>
                )}

                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs bg-[#138808]/10 text-[#138808]">
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#FF9933] text-[#FF9933]" />
                      <span className="text-sm font-medium text-[#000080]">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight text-[#000080]">{course.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-[#000080]">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{course.lessons}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
            </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {course.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#138808] flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
              </div>
                      ))}
                      {course.features.length > 3 && (
                        <div className="text-sm text-[#000080] font-medium">
                          +{course.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#000080]">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>

                    <Link href={`/courses/${course.slug}`}>
                      <Button className="w-full bg-[#000080] hover:bg-[#000080]/90 text-white">Enroll Now</Button>
                    </Link>
            </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-white to-[#138808]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real entrepreneurs, real results. See how our courses have transformed food businesses across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-lg transition-all border-0 bg-white"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-[#000080]">{testimonial.name}</div>
                      <div className="text-sm text-[#FF9933] font-medium">{testimonial.business}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
          </div>
        </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{testimonial.content}</p>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-[#FF9933]" />
                    <span className="text-sm font-semibold text-[#138808]">{testimonial.revenue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#000080] via-[#FF9933] to-[#138808]">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-sm text-white border-0">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Food Business?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                Join thousands of successful food entrepreneurs who have scaled their businesses with our proven
                training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="gap-2 bg-white text-[#000080] hover:bg-white/90">
                  Schedule a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
                <Button variant="outline" size="lg" className="gap-2 border-white text-white hover:bg-white/10">
                  View All Courses
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

