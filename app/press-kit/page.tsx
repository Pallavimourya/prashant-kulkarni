"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Video, Award, Briefcase, Users, Globe, Newspaper, FileDown, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const pressResources = [
  {
    title: "Official Bio",
    description: "Professional biography and background information",
    icon: <FileText className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "High-Resolution Photos",
    description: "Professional headshots and event photos",
    icon: <FileDown className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Media Kit",
    description: "Complete press kit with logos and brand assets",
    icon: <FileDown className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Video Clips",
    description: "Speaking engagements and interviews",
    icon: <Video className="h-7 w-7 text-[#138808]" />
  }
]

const achievements = [
  {
    title: "Harvard Published",
    description: "Prashant Kulkarni's expertise and contributions to the culinary industry acknowledged by Harvard University. Published work reflects thought leadership and innovative approach to transforming the food landscape.",
    icon: <Award className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "CNBC Masterpreneur Award Winner",
    description: "Prashant Kulkarni's entrepreneurial prowess and business acumen recognized by CNBC. Award showcases ability to navigate the competitive business world and build successful ventures.",
    icon: <Award className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Super StartupAsia Award Winner",
    description: "Prashant Kulkarni's entrepreneurial journey and impactful contributions to the startup ecosystem earned Super StartupAsia Award. Highlights ability to create and grow innovative ventures, making significant industry impact.",
    icon: <Award className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Vault Featured",
    description: "Prashant Kulkarni's accomplishments and success story featured in renowned publication, Vault. Being featured amplifies influence and positions as a trailblazer in the culinary domain.",
    icon: <Newspaper className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "World's First Panipur Brand Gapagap",
    description: "Prashant Kulkarni's visionary mindset led to registering Gapagap as the world's first panipur brand. Highlights innovation and solidifies position as a pioneer in street food industry.",
    icon: <Briefcase className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Yashaswi Udhyojak Featured",
    description: "Prashant Kulkarni's entrepreneurial journey and achievements showcased by Yashaswi Udhyojak. Feature recognizes business acumen, innovation, and significant impact on the entrepreneurial ecosystem.",
    icon: <Newspaper className="h-7 w-7 text-[#138808]" />
  }
]

const areasOfExpertise = [
  {
    title: "Hospitality",
    icon: <Users className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Food and Beverages",
    icon: <Briefcase className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Food Tech",
    icon: <Globe className="h-7 w-7 text-[#138808]" />
  },
  {
    title: "Food Franchising",
    icon: <Briefcase className="h-7 w-7 text-[#138808]" />
  }
]

const ventures = [
  "Food Franchise India",
  "Food Business India",
  "Zuper World"
]

const pressCoverage = [
  {
    title: "The Economic Times",
    date: "March 2024",
    description: "How Prashant Kulkarni is Revolutionizing Food Entrepreneurship in India",
    link: "#"
  },
  {
    title: "Business Today",
    date: "February 2024",
    description: "From Startup to Success: The Journey of a Serial Entrepreneur",
    link: "#"
  },
  {
    title: "Entrepreneur India",
    date: "January 2024",
    description: "Innovation in Food Business: A Conversation with Prashant Kulkarni",
    link: "#"
  }
]

const mentorshipPrograms = [
  {
    title: "Digital Marketing for Food Brands",
    description: "Master digital marketing strategies specifically designed for food businesses",
    icon: <Globe className="h-12 w-12 text-[#138808]" />,
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "Food Photography",
      "Influencer Marketing",
      "Online Reputation Management"
    ],
    duration: "8 Weeks",
    price: "₹49,999",
    schedule: "Weekend Classes",
    enrollmentLink: "/courses/digital-marketing-food-brands"
  },
  {
    title: "Restaurant Operations Excellence",
    description: "Learn the art of running a successful restaurant business",
    icon: <Briefcase className="h-12 w-12 text-[#138808]" />,
    features: [
      "Kitchen Management",
      "Staff Training",
      "Inventory Control",
      "Customer Service",
      "Quality Assurance"
    ],
    duration: "12 Weeks",
    price: "₹69,999",
    schedule: "Weekday Classes",
    enrollmentLink: "/courses/restaurant-operations"
  },
  {
    title: "Franchise Development Program",
    description: "Build and scale your food franchise business effectively",
    icon: <Users className="h-12 w-12 text-[#138808]" />,
    features: [
      "Franchise Model Design",
      "Brand Development",
      "Legal Compliance",
      "Franchisee Selection",
      "Growth Strategies"
    ],
    duration: "16 Weeks",
    price: "₹89,999",
    schedule: "Flexible Schedule",
    enrollmentLink: "/courses/franchise-development"
  }
]

export default function PressKitPage() {
  const [selectedProgram, setSelectedProgram] = React.useState<string | null>(null)

  const handleEnrollClick = (programTitle: string) => {
    setSelectedProgram(programTitle)
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FF9933] via-white to-[#138808] text-[#000B3A] py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">PRASHANT KULKARNI</h1>
            <div className="w-20 h-1 bg-[#000B3A] mb-8"></div>
            <p className="max-w-3xl text-lg text-[#000B3A]/80">
              An innovative entrepreneur and culinary maverick, transforming the food industry with visionary approach and passion for excellence.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="https://www.prashantkulkarni.in" target="_blank">
                <Button variant="outline" className="border-[#000B3A] text-[#000B3A] hover:bg-[#000B3A]/10">
                  www.prashantkulkarni.in
                </Button>
              </Link>
              <Link href="https://twitter.com/zuperprashant" target="_blank">
                <Button variant="outline" className="border-[#000B3A] text-[#000B3A] hover:bg-[#000B3A]/10">
                  @zuperprashant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#000B3A]">PROFILE</h2>
              <p className="text-lg text-[#000B3A]/70 mb-6">
                Prashant Kulkarni, an innovative entrepreneur and culinary maverick, is transforming the food industry with his visionary approach and passion for excellence. As the driving force behind successful ventures like Chatar Patar, Prashant Kulkarni has revolutionized street food, offering a fusion of flavors, impeccable hygiene standards, and unparalleled customer satisfaction.
              </p>
              <p className="text-lg text-[#000B3A]/70 mb-6">
                With his relentless pursuit of culinary innovation and commitment to community empowerment, Prashant Kulkarni has garnered industry recognition and loyal patronage. His visionary leadership and entrepreneurial spirit continue to shape the culinary landscape, inspiring aspiring entrepreneurs and delighting taste buds nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Prashant-Kulkarni-Presskit.pdf';
                    link.setAttribute('download', 'Prashant-Kulkarni-Presskit.pdf');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-[#138808] hover:bg-[#138808]/90 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Press Kit
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10">
                    Media Inquiry
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Images/enter.jpg"
                alt="Prashant Kulkarni Press Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FF9933]/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#000B3A]">AREAS OF EXPERTISE</h2>
            <div className="w-20 h-1 bg-[#138808] mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasOfExpertise.map((area, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-[#000B3A]">{area.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="py-20 bg-gradient-to-b from-[#FF9933]/5 to-[#138808]/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#000B3A]">MENTORSHIP PROGRAMS</h2>
            <div className="w-20 h-1 bg-[#138808] mb-8"></div>
            <p className="max-w-3xl text-lg text-[#000B3A]/70 mb-8">
              Learn from Prashant Kulkarni's extensive experience in food entrepreneurship and business development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-[#000B3A]">{program.title}</h3>
                  <p className="text-[#000B3A]/70 mb-6 text-center">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#000B3A]/70">
                        <span className="mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#000B3A]/70">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#000B3A]/70">Schedule:</span>
                      <span className="font-medium">{program.schedule}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#000B3A]/70">Price:</span>
                      <span className="font-medium">{program.price}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-[#138808] hover:bg-[#138808]/90 text-white"
                    onClick={() => handleEnrollClick(program.title)}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedProgram && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <Card className="max-w-2xl w-full">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-[#000B3A]">
                      {selectedProgram} - Course Details
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProgram(null)}
                      className="text-[#000B3A]"
                    >
                      ✕
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Course Overview</h4>
                      <p className="text-[#000B3A]/70">
                        {mentorshipPrograms.find(p => p.title === selectedProgram)?.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What You'll Learn</h4>
                      <ul className="space-y-2">
                        {mentorshipPrograms.find(p => p.title === selectedProgram)?.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-[#000B3A]/70">
                            <span className="mr-2">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Duration</h4>
                        <p className="text-[#000B3A]/70">
                          {mentorshipPrograms.find(p => p.title === selectedProgram)?.duration}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Schedule</h4>
                        <p className="text-[#000B3A]/70">
                          {mentorshipPrograms.find(p => p.title === selectedProgram)?.schedule}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Price</h4>
                        <p className="text-[#000B3A]/70">
                          {mentorshipPrograms.find(p => p.title === selectedProgram)?.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Link href={mentorshipPrograms.find(p => p.title === selectedProgram)?.enrollmentLink || '#'}>
                        <Button className="w-full bg-[#138808] hover:bg-[#138808]/90 text-white">
                          Proceed to Enrollment
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10"
                        onClick={() => setSelectedProgram(null)}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" className="border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10">
                Custom Mentorship Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#000B3A]">AWARDS & ACHIEVEMENTS</h2>
            <div className="w-20 h-1 bg-[#138808] mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#138808] mt-1">{achievement.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#000B3A]">{achievement.title}</h3>
                      <p className="text-[#000B3A]/70">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-br from-[#FF9933] to-[#138808] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">CONNECT WITH PRASHANT</h2>
            <div className="flex gap-4">
              <Link href="https://twitter.com/zuperprashant" target="_blank">
                <Button className="bg-white text-[#138808] hover:bg-white/90">@zuperprashant</Button>
              </Link>
              <Link href="https://instagram.com/zuperprashant" target="_blank">
                <Button className="bg-white text-[#138808] hover:bg-white/90">@zuperprashant</Button>
              </Link>
              <Link href="https://linkedin.com/in/zuperprashant" target="_blank">
                <Button className="bg-white text-[#138808] hover:bg-white/90">@zuperprashant</Button>
              </Link>
            </div>
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
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
        {icon ? (
          <div className="text-[#138808]">{icon}</div>
        ) : (
          <Image src={image} alt={title} fill className="object-cover" />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-1 text-[#000B3A]">{title}</h3>
        <p className="text-sm text-[#000B3A]/70 mb-4">{type}</p>
        <Button variant="outline" size="sm" className="w-full border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardContent>
    </Card>
  )
}
