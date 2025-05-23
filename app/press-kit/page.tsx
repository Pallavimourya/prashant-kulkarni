"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Image, Video, Award, Briefcase, Users, Globe, Newspaper, FileDown, ArrowRight } from "lucide-react"

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/pdf/Prashant-Kulkarni-Presskit.pdf';
  link.setAttribute('download', 'Prashant-Kulkarni-Presskit.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const pressResources = [
  {
    title: "Official Bio",
    description: "Professional biography and background information",
    icon: <FileText className="h-6 w-6" />
  },
  {
    title: "High-Resolution Photos",
    description: "Professional headshots and event photos",
    icon: <Image className="h-6 w-6" />
  },
  {
    title: "Media Kit",
    description: "Complete press kit with logos and brand assets",
    icon: <FileDown className="h-6 w-6" />
  },
  {
    title: "Video Clips",
    description: "Speaking engagements and interviews",
    icon: <Video className="h-6 w-6" />
  }
]

const achievements = [
  {
    title: "Entrepreneurial Success",
    description: "Founded and scaled multiple successful businesses",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    title: "Industry Recognition",
    description: "Awarded for innovation and business excellence",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Global Impact",
    description: "Business presence across multiple countries",
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: "Community Building",
    description: "Mentored thousands of entrepreneurs",
    icon: <Users className="h-6 w-6" />
  }
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

export default function PressKitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-lime-600 via-lime-500 to-lime-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Press Kit
            </h1>
            <p className="text-xl md:text-2xl text-lime-100 mb-8 font-light">
              Media resources and information for journalists and content creators
            </p>
            {/* <a 
              href="/pdf/Prashant-Kulkarni-Presskit.pdf"
              className="inline-flex items-center justify-center bg-white text-lime-600 hover:bg-lime-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              Download Full Press Kit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a> */}
          </div>
        </div>
      </section>

      {/* Quick Bio Section */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-lime-600 to-lime-500 bg-clip-text text-transparent">
                  BIOGRAPHY
                </h2>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Prashant Kulkarni: A Parallel Entrepreneur Revolutionizing the Food Industry
                </h3>
                
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Prashant Kulkarni is a visionary entrepreneur with a dynamic portfolio of ventures that span the food industry and beyond. As a Parallel Entrepreneur, he excels in managing multiple businesses simultaneously, leveraging his expertise, innovation, and strategic thinking to drive success.
                  </p>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-900">Director of Tasty Alphabets:</h4>
                    <p>
                      In his role as the Director of Tasty Alphabets, Prashant has revolutionized the field of food, foodtech, food education, packaging standards, food standardization. Tasty Alphabets is an innovative platform that combines culinary education with language learning, providing a unique and engaging experience for children. Prashant's visionary leadership has transformed the way young minds explore and understand the world of food.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-900">CEO of Food Franchise India and Food Business India:</h4>
                    <p>
                      Prashant serves as the CEO of Food Franchise India and Food Business India, two leading organizations dedicated to nurturing growth and innovation in the food franchise industry. Under his guidance, these platforms have become invaluable resources for aspiring entrepreneurs, offering comprehensive guidance, industry insights, and networking opportunities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-900">Zuper World:</h4>
                    <p>
                      Prashant's passion for empowering entrepreneurs led him to create Zuper World, an exceptional platform designed to support and mentor individuals on their entrepreneurial journey. Through Zuper World, Prashant provides valuable resources, mentorship programs, and strategic guidance, empowering aspiring entrepreneurs to turn their dreams into successful businesses with the help of technology and other win-win business models.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-900">Thought Leader and Motivator:</h4>
                    <p>
                      Prashant is renowned as a prolific thinker, motivator, speaker, and innovator. His insights and expertise make him a highly sought-after speaker at prestigious conferences and forums. Prashant's ability to inspire and motivate audiences with his unique perspectives on entrepreneurship, innovation, and business growth is unparalleled.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-900">Innovation and Excellence:</h4>
                    <p>
                      Prashant Kulkarni's entrepreneurial journey is marked by a relentless pursuit of innovation and excellence. His ability to identify untapped market opportunities, think outside the box, and drive transformative change has set him apart as a true innovator in the industry. Prashant's ventures are known for pushing boundaries and redefining industry norms.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-gray-900">Recognition and Impact:</h4>
                    <p>
                      Prashant's remarkable contributions have been widely recognized and celebrated. His exceptional leadership and entrepreneurial achievements have earned him numerous awards and accolades, cementing his status as an industry luminary. From the CNBC Masterpreneur award to the Super Startup Asia award, Prashant's impact continues to inspire others in the entrepreneurial ecosystem worldwide.
                    </p>
                  </div>

                  <p>
                    Prashant Kulkarni's dedication to driving innovation, empowering entrepreneurs, and transforming the food industry has established him as a prominent figure in the business world. His role as a Parallel Entrepreneur, Director of Tasty Alphabets, Founder & CEO of Food Franchise India, Food Business India, and Zuper World showcases his diverse skill set and unwavering commitment to making a positive impact. Prashant's entrepreneurial journey is characterised by his ability to motivate, inspire, and pave the way for aspiring entrepreneurs to unlock their full potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Resources Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-lime-600 to-lime-500 bg-clip-text text-transparent">
              Press Resources
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Download high-quality media assets and resources for your coverage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pressResources.map((resource, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
              >
                <CardContent className="p-8">
                  <div className="text-lime-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-lime-600 to-lime-500 bg-clip-text text-transparent">
              Recent Press Coverage
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Latest features and interviews in leading publications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pressCoverage.map((coverage, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 text-lime-600 mb-6">
                    <Newspaper className="h-6 w-6" />
                    <span className="font-medium">{coverage.date}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">{coverage.title}</h3>
                  <p className="text-gray-600 mb-6">{coverage.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-lime-600 hover:text-lime-700 hover:bg-lime-50 rounded-full px-6"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-lime-600 to-lime-700 text-white shadow-2xl border-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <CardContent className="p-16 text-center relative">
              <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
              <p className="text-lime-100 text-lg mb-10 max-w-2xl mx-auto">
                For interview requests, speaking engagements, or media inquiries, please contact our press team
              </p>
              <Button 
                size="lg"
                variant="secondary" 
                className="bg-white text-lime-600 hover:bg-lime-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Press Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </main>
  )
}
