"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Globe,
  MessageSquare,
  Award,
  BookOpen,
  Video,
} from "lucide-react"
import Image from "next/image"

// Course data
const courseData = {
  "plus-food-training-mastery": {
    title: "Plus Food Training Mastery",
    subtitle: "Complete Food Business Training From Setup To Scaling",
    description:
      "Master the art of food business with comprehensive training covering everything from recipe development to franchise scaling.",
    duration: "12 weeks",
    lessons: "48 lessons",
    hours: "24+ Hours",
    price: "₹75,000",
    originalPrice: "₹1,00,000",
    students: "2,500+",
    rating: 4.8,
    language: "English & Hindi",
    level: "Intermediate",
    certificate: true,
    liveSupport: true,
    features: [
      { icon: <Clock className="h-5 w-5" />, title: "Video Duration", value: "24+ Hours" },
      { icon: <Award className="h-5 w-5" />, title: "Refund Policy", value: "100%" },
      { icon: <Globe className="h-5 w-5" />, title: "Available in", value: "English & Hindi" },
      { icon: <MessageSquare className="h-5 w-5" />, title: "Group Live", value: "Q&A Sessions" },
    ],
    problems: [
      {
        title: "Struggling with food quality consistency",
        description:
          "Learn standardized recipes and quality control systems that ensure consistent taste and presentation across all your outlets.",
        icon: "🍽️",
      },
      {
        title: "Unable to scale your food business",
        description:
          "Discover proven strategies for scaling from a single outlet to multiple locations with systematic franchise development.",
        icon: "📈",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Foundation",
        lessons: 8,
        topics: ["Food Business Basics", "Market Research", "Legal Requirements", "Initial Setup"],
      },
      {
        module: "Module 2: Operations",
        lessons: 12,
        topics: ["Recipe Standardization", "Quality Control", "Inventory Management", "Staff Training"],
      },
      {
        module: "Module 3: Marketing",
        lessons: 10,
        topics: ["Brand Development", "Digital Marketing", "Customer Acquisition", "Social Media Strategy"],
      },
      {
        module: "Module 4: Scaling",
        lessons: 18,
        topics: ["Franchise Model", "Multi-location Management", "Financial Planning", "Growth Strategies"],
      },
    ],
    instructor: {
      name: "Prashant Kulkarni",
      title: "Food Business Expert & Entrepreneur",
      experience: "15+ years",
      students: "10,000+",
      image: "/prashant.jpg",
    },
  },
  "andeywala-business-blueprint": {
    title: "Andeywala Business Blueprint",
    subtitle: "Specialized Training For Egg-Based Food Ventures",
    description:
      "Master the egg-based food business with specialized training covering recipes, operations, and scaling strategies.",
    duration: "8 weeks",
    lessons: "32 lessons",
    hours: "16+ Hours",
    price: "₹50,000",
    originalPrice: "₹70,000",
    students: "1,800+",
    rating: 4.7,
    language: "English & Hindi",
    level: "Beginner",
    certificate: true,
    liveSupport: true,
    features: [
      { icon: <Clock className="h-5 w-5" />, title: "Video Duration", value: "16+ Hours" },
      { icon: <Award className="h-5 w-5" />, title: "Refund Policy", value: "100%" },
      { icon: <Globe className="h-5 w-5" />, title: "Available in", value: "English & Hindi" },
      { icon: <MessageSquare className="h-5 w-5" />, title: "Group Live", value: "Q&A Sessions" },
    ],
    problems: [
      {
        title: "Limited egg-based recipe knowledge",
        description:
          "Learn 50+ unique egg-based recipes and variations that will set your business apart from competitors.",
        icon: "🥚",
      },
      {
        title: "Food safety concerns with eggs",
        description:
          "Master proper egg handling, storage, and preparation techniques to ensure food safety and customer trust.",
        icon: "🛡️",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Egg Business Basics",
        lessons: 6,
        topics: ["Market Analysis", "Business Setup", "Legal Requirements", "Equipment Selection"],
      },
      {
        module: "Module 2: Recipe Development",
        lessons: 12,
        topics: ["Traditional Recipes", "Fusion Variations", "Healthy Options", "Presentation Techniques"],
      },
      {
        module: "Module 3: Operations",
        lessons: 8,
        topics: ["Food Safety", "Inventory Management", "Cost Control", "Quality Assurance"],
      },
      {
        module: "Module 4: Growth",
        lessons: 6,
        topics: ["Marketing Strategies", "Customer Retention", "Expansion Planning", "Franchise Options"],
      },
    ],
    instructor: {
      name: "Prashant Kulkarni",
      title: "Food Business Expert & Entrepreneur",
      experience: "15+ years",
      students: "10,000+",
      image: "/prashant.jpg",
    },
  },
  "entrepreneurship-fundamentals": {
    title: "Entrepreneurship Fundamentals",
    subtitle: "Build Your Entrepreneurial Mindset And Skills",
    description:
      "Develop the essential skills and mindset needed to become a successful entrepreneur in today's competitive market.",
    duration: "6 weeks",
    lessons: "24 lessons",
    hours: "12+ Hours",
    price: "₹35,000",
    originalPrice: "₹50,000",
    students: "3,200+",
    rating: 4.9,
    language: "English & Hindi",
    level: "Beginner",
    certificate: true,
    liveSupport: true,
    features: [
      { icon: <Clock className="h-5 w-5" />, title: "Video Duration", value: "12+ Hours" },
      { icon: <Award className="h-5 w-5" />, title: "Refund Policy", value: "100%" },
      { icon: <Globe className="h-5 w-5" />, title: "Available in", value: "English & Hindi" },
      { icon: <MessageSquare className="h-5 w-5" />, title: "Group Live", value: "Q&A Sessions" },
    ],
    problems: [
      {
        title: "Lack of business idea validation",
        description: "Learn systematic approaches to validate your business ideas before investing time and money.",
        icon: "💡",
      },
      {
        title: "Fear of taking entrepreneurial risks",
        description: "Develop confidence and risk assessment skills to make informed entrepreneurial decisions.",
        icon: "🎯",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Entrepreneurial Mindset",
        lessons: 6,
        topics: ["Mindset Development", "Risk Assessment", "Opportunity Recognition", "Goal Setting"],
      },
      {
        module: "Module 2: Business Planning",
        lessons: 8,
        topics: ["Idea Validation", "Market Research", "Business Model", "Financial Planning"],
      },
      {
        module: "Module 3: Execution",
        lessons: 6,
        topics: ["Team Building", "Leadership Skills", "Project Management", "Problem Solving"],
      },
      {
        module: "Module 4: Growth",
        lessons: 4,
        topics: ["Scaling Strategies", "Investment", "Partnerships", "Exit Planning"],
      },
    ],
    instructor: {
      name: "Prashant Kulkarni",
      title: "Serial Entrepreneur & Business Mentor",
      experience: "15+ years",
      students: "10,000+",
      image: "/prashant.jpg",
    },
  },
  "digital-marketing-food-brands": {
    title: "Digital Marketing for Food Brands",
    subtitle: "Master Digital Marketing Strategies for Food Business Success",
    description:
      "Learn comprehensive digital marketing strategies specifically designed for food businesses, from social media to influencer marketing.",
    duration: "8 weeks",
    lessons: "32 lessons",
    hours: "16+ Hours",
    price: "₹49,999",
    originalPrice: "₹69,999",
    students: "1,500+",
    rating: 4.8,
    language: "English & Hindi",
    level: "Intermediate",
    certificate: true,
    liveSupport: true,
    features: [
      { icon: <Clock className="h-5 w-5" />, title: "Video Duration", value: "16+ Hours" },
      { icon: <Award className="h-5 w-5" />, title: "Refund Policy", value: "100%" },
      { icon: <Globe className="h-5 w-5" />, title: "Available in", value: "English & Hindi" },
      { icon: <MessageSquare className="h-5 w-5" />, title: "Group Live", value: "Q&A Sessions" },
    ],
    problems: [
      {
        title: "Low social media engagement",
        description:
          "Learn proven strategies to create engaging content, build a loyal following, and drive customer engagement through social media platforms.",
        icon: "📱",
      },
      {
        title: "Ineffective online presence",
        description:
          "Master the art of building a strong digital presence, from website optimization to content marketing, to attract and retain customers.",
        icon: "🌐",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Digital Marketing Fundamentals",
        lessons: 8,
        topics: ["Social Media Strategy", "Content Marketing", "Food Photography", "Video Content Creation"],
      },
      {
        module: "Module 2: Platform-Specific Marketing",
        lessons: 10,
        topics: ["Instagram Marketing", "Facebook Marketing", "YouTube Strategy", "TikTok Marketing"],
      },
      {
        module: "Module 3: Influencer & Community",
        lessons: 8,
        topics: ["Influencer Partnerships", "Community Building", "User-Generated Content", "Brand Advocacy"],
      },
      {
        module: "Module 4: Analytics & Optimization",
        lessons: 6,
        topics: ["Performance Tracking", "ROI Measurement", "Campaign Optimization", "Growth Strategies"],
      },
    ],
    instructor: {
      name: "Prashant Kulkarni",
      title: "Food Business Expert & Digital Marketing Strategist",
      experience: "15+ years",
      students: "10,000+",
      image: "/prashant.jpg",
    },
  },
  "restaurant-operations": {
    title: "Restaurant Operations Excellence",
    subtitle: "Master the Art of Running a Successful Restaurant",
    description:
      "Learn comprehensive restaurant management skills, from kitchen operations to customer service, to run a successful food business.",
    duration: "12 weeks",
    lessons: "48 lessons",
    hours: "24+ Hours",
    price: "₹69,999",
    originalPrice: "₹89,999",
    students: "2,000+",
    rating: 4.9,
    language: "English & Hindi",
    level: "Intermediate",
    certificate: true,
    liveSupport: true,
    features: [
      { icon: <Clock className="h-5 w-5" />, title: "Video Duration", value: "24+ Hours" },
      { icon: <Award className="h-5 w-5" />, title: "Refund Policy", value: "100%" },
      { icon: <Globe className="h-5 w-5" />, title: "Available in", value: "English & Hindi" },
      { icon: <MessageSquare className="h-5 w-5" />, title: "Group Live", value: "Q&A Sessions" },
    ],
    problems: [
      {
        title: "Inconsistent food quality",
        description:
          "Learn standardized procedures and quality control systems to maintain consistent food quality across all operations.",
        icon: "🍽️",
      },
      {
        title: "Operational inefficiencies",
        description:
          "Master efficient kitchen management, inventory control, and staff training to optimize restaurant operations.",
        icon: "⚡",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Kitchen Management",
        lessons: 12,
        topics: ["Recipe Standardization", "Quality Control", "Inventory Management", "Kitchen Layout"],
      },
      {
        module: "Module 2: Staff Management",
        lessons: 10,
        topics: ["Staff Training", "Team Building", "Performance Management", "Customer Service"],
      },
      {
        module: "Module 3: Operations",
        lessons: 14,
        topics: ["Cost Control", "Waste Management", "Safety Protocols", "Equipment Maintenance"],
      },
      {
        module: "Module 4: Business Excellence",
        lessons: 12,
        topics: ["Customer Experience", "Quality Assurance", "Process Optimization", "Growth Planning"],
      },
    ],
    instructor: {
      name: "Prashant Kulkarni",
      title: "Restaurant Operations Expert & Business Consultant",
      experience: "15+ years",
      students: "10,000+",
      image: "/prashant.jpg",
    },
  },
  "franchise-development": {
    title: "Franchise Development Program",
    subtitle: "Build and Scale Your Food Franchise Business",
    description:
      "Master the art of creating and scaling a successful food franchise business, from model development to expansion strategies.",
    duration: "16 weeks",
    lessons: "64 lessons",
    hours: "32+ Hours",
    price: "₹89,999",
    originalPrice: "₹1,19,999",
    students: "1,200+",
    rating: 4.9,
    language: "English & Hindi",
    level: "Advanced",
    certificate: true,
    liveSupport: true,
    features: [
      { icon: <Clock className="h-5 w-5" />, title: "Video Duration", value: "32+ Hours" },
      { icon: <Award className="h-5 w-5" />, title: "Refund Policy", value: "100%" },
      { icon: <Globe className="h-5 w-5" />, title: "Available in", value: "English & Hindi" },
      { icon: <MessageSquare className="h-5 w-5" />, title: "Group Live", value: "Q&A Sessions" },
    ],
    problems: [
      {
        title: "Franchise model development",
        description:
          "Learn how to create a scalable and profitable franchise model that attracts quality franchisees and ensures business success.",
        icon: "📊",
      },
      {
        title: "Expansion challenges",
        description:
          "Master the strategies for successful franchise expansion, from location selection to franchisee support systems.",
        icon: "🌍",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Franchise Model Development",
        lessons: 16,
        topics: ["Business Model Design", "Legal Framework", "Financial Planning", "Brand Development"],
      },
      {
        module: "Module 2: Franchisee Selection",
        lessons: 12,
        topics: ["Franchisee Profiling", "Selection Process", "Training Programs", "Support Systems"],
      },
      {
        module: "Module 3: Operations & Quality",
        lessons: 20,
        topics: ["Standardization", "Quality Control", "Supply Chain", "Technology Integration"],
      },
      {
        module: "Module 4: Growth & Expansion",
        lessons: 16,
        topics: ["Market Analysis", "Location Strategy", "International Expansion", "Brand Evolution"],
      },
    ],
    instructor: {
      name: "Prashant Kulkarni",
      title: "Franchise Development Expert & Business Strategist",
      experience: "15+ years",
      students: "10,000+",
      image: "/prashant.jpg",
    },
  },
}

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CoursePage({ params }: CoursePageProps) {
  const resolvedParams = use(params)
  const course = courseData[resolvedParams.slug as keyof typeof courseData]

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="p-8 lg:p-12 text-white">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{course.title}</h1>
                    <p className="text-lg mb-8 text-white/90">{course.subtitle}</p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {course.features.map((feature, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                          <div className="flex justify-center mb-2 text-white">{feature.icon}</div>
                          <div className="text-sm font-medium text-white/90">{feature.title}</div>
                          <div className="text-lg font-bold text-white">{feature.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3D Illustration */}
                  <div className="relative h-80 lg:h-96 flex items-center justify-center">
                    <div className="relative">
                      {/* Main illustration placeholder */}
                      <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="text-6xl">🍽️</div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                        <div className="text-2xl">📈</div>
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                        <div className="text-xl">💡</div>
                      </div>

                      {/* Click to watch video indicator */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Play className="h-4 w-4" />
                          <span>Click to watch intro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems Faced Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Problems Faced</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {course.problems.map((problem, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Illustration */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center text-3xl">
                          {problem.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Course Curriculum</h2>

            <div className="space-y-6">
              {course.curriculum.map((module, index) => (
                <Card key={index} className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-gray-900">{module.module}</CardTitle>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {module.lessons} Lessons
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Meet Your Instructor</h2>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={course.instructor.image || "/placeholder.svg"}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor.name}</h3>
                    <p className="text-lg text-blue-600 font-medium mb-4">{course.instructor.title}</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-orange-500" />
                        <span>{course.instructor.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>{course.instructor.students} Students Taught</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{course.rating} Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Ready to Transform Your Business?</h2>

            <Card className="bg-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-2xl text-gray-500 line-through">{course.originalPrice}</span>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      Save{" "}
                      {Math.round(
                        ((Number.parseInt(course.originalPrice.replace(/[₹,]/g, "")) -
                          Number.parseInt(course.price.replace(/[₹,]/g, ""))) /
                          Number.parseInt(course.originalPrice.replace(/[₹,]/g, ""))) *
                          100,
                      )}
                      %
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Video className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{course.hours}</div>
                      <div className="text-sm text-gray-600">Video Content</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{course.lessons}</div>
                      <div className="text-sm text-gray-600">Lessons</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">Certificate</div>
                      <div className="text-sm text-gray-600">On Completion</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Enroll Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Play className="h-4 w-4" />
                    Watch Preview
                  </Button>
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  💯 100% Money-back guarantee • 🔒 Secure payment • 📱 Lifetime access
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
