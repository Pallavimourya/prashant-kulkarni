import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Briefcase, Lightbulb, Users } from "lucide-react"

const timelineData = [
  {
    year: "1987",
    title: "Born",
    image: "/Images/1987.jpg",
    description:
      "Born in 1987, Prashant Kulkarni's entrepreneurial journey began at a young age, where he exhibited a remarkable drive for innovation and a keen business sense.",
  },
  {
    year: "1996",
    title: "Selling Paper Boats",
    image: "/Images/1996.jpg",
    description:
      "Sold paper boats at 25 paisa for 50 boats to buy orange candies.",
  },
  {
    year: "1997",
    title: "Summer Magazine Library",
    image: "/Images/1997.jpg",
    description:
      "Setup magazine library (Champak, Chacha Chaudhary, Pinky) to buy marbles (kanche).",
  },
  {
    year: "1998",
    title: "Video Cassette Library & VCR Rental",
    image: "/Images/1998.jpg",
    description: "Managing Video Cassette library & VCR rental.",
  },
  {
    year: "2001",
    title: "Book Trading & Aquarium Passion",
    image: "/Images/2001.jpg",
    description:
      "Bought books from 'kabadiwala' and sold them to buy new fishes for aquarium.",
  },
  {
    year: "2003",
    title: "SIM Cards & Tyre Tube Shop",
    image: "/Images/2003.jpg",
    description:
      "Sold SIM cards to college students (earned ₹300 per activation) & managed tyre tube shop.",
  },
  {
    year: "2006",
    title: "Tyre Tube Factory Setup",
    image: "/Images/2006.jpg",
    description:
      "Helped father set up tyre tube factory at Nimrani Industrial Area.",
  },
  {
    year: "2007",
    title: "Joined Infosys",
    image: "/Images/2007.jpg",
    description:
      "Managed projects, implemented innovations, and organized events.",
  },
  {
    year: "2009",
    title: "Chatar Patar Concept",
    image: "/Images/2009.jpg",
    description: "Started working on Chatar Patar snack concept.",
  },
  {
    year: "2011",
    title: "Chatar Patar Pvt Ltd",
    image: "/Images/2011.jpg",
    description:
      "Registered Pvt Ltd company and expanded Chatar Patar nationally.",
  },
  {
    year: "2013",
    title: "Boxo Burger",
    image: "/Images/2013.jpg",
    description:
      "Launched Boxo Burger, a subsidiary to diversify food ventures.",
  },
  {
    year: "2015",
    title: "Andeywala & CNBC Award",
    image: "/Images/2015.jpg",
    description:
      "Andeywala received CNBC Masterpreneur award.",
  },
  {
    year: "2016",
    title: "Franchise Consulting",
    image: "/Images/2016.jpg",
    description:
      "Started franchise consulting with Connect Franchise.",
  },
  {
    year: "2017",
    title: "Masterpreneur Award by ET Now",
    image: "/Images/2017.jpg",
    description:
      "Awarded Masterpreneur by Times Now & ET Now.",
  },
  {
    year: "2019",
    title: "Entrepreneur of the Year",
    image: "/Images/2019.jpg",
    description: "Honored as Entrepreneur of the Year.",
  },
  {
    year: "2020",
    title: "Zuper World",
    image: "/Images/2020.jpg",
    description:
      "Launched Zuper World to support new entrepreneurs.",
  },
  {
    year: "2023",
    title: "On a Mission to Help Entrepreneurs",
    image: "/Images/2023.jpg",
    description:
      "On a mission to uplift entrepreneurs across India.",
  },
];

const achievements = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "CNBC Masterpreneur",
    description: "Recognized for exceptional entrepreneurial skills and business acumen.",
    year: "2019"
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Super Startup Asia",
    description: "Honored for innovative business models and sustainable growth strategies.",
    year: "2018"
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Food Innovator of the Year",
    description: "Awarded for revolutionizing the street food industry with standardized processes.",
    year: "2017"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Franchise Leadership Award",
    description: "Recognized for outstanding contribution to the franchise ecosystem in India.",
    year: "2016"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Young Entrepreneur Award",
    description: "Honored for exceptional business leadership and innovation at a young age.",
    year: "2015"
  }
]

export default function AboutPage() {
  return (
    <main className="pt-20 font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF9933]/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#138808]/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-[#FF9933]"></div>
                  <span className="text-[#FF9933] font-medium tracking-wider">ENTREPRENEUR & MENTOR</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="block text-[#138808]">Innovating</span>
                  <span className="block text-[#FF9933]">Food Industry</span>
                  <span className="block text-gray-800">Through Passion</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl">
                  From software engineer to visionary entrepreneur, transforming the food industry with innovation and passion.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Link href="/contact">
                  <Button className="bg-[#138808] text-white hover:bg-[#138808]/90 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" className="border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933] hover:text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Book for Event
                  </Button>
                </Link>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#FF9933]/10 hover:border-[#FF9933]/30 transition-colors">
                  <div className="text-3xl font-bold text-[#138808] mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#FF9933]/10 hover:border-[#FF9933]/30 transition-colors">
                  <div className="text-3xl font-bold text-[#FF9933] mb-2">5+</div>
                  <div className="text-sm text-gray-600">Successful Ventures</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-[#FF9933]/10 hover:border-[#FF9933]/30 transition-colors">
                  <div className="text-3xl font-bold text-[#138808] mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Mentored Entrepreneurs</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF9933]/20 to-[#138808]/20 rounded-3xl blur-2xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9933]/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#138808]/20 rounded-full blur-xl"></div>
                
                {/* Main Image */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/Images/enter.jpg"
                    alt="Prashant Kulkarni"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-[#FF9933]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#138808]/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#138808]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Awarded</div>
                      <div className="text-[#FF9933] font-semibold">Masterpreneur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#000080]">
              Visionary Leader in Food Industry
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Prashant Kulkarni is a visionary entrepreneur with a dynamic portfolio of ventures that span the food
                industry and beyond. As a Parallel Entrepreneur, he excels in managing multiple businesses
                simultaneously, leveraging his expertise, innovation, and strategic thinking to drive success.
              </p>
              <p className="text-gray-600 mb-6">
                In his role as the Director of Tasty Alphabets, Prashant has revolutionized the field of food, foodtech,
                food education, packaging standards, food standardization. Tasty Alphabets is an innovative platform
                that combines culinary education with language learning, providing a unique and engaging experience for
                children.
              </p>
              <p className="text-gray-600">
                Prashant serves as the CEO of Food Franchise India and Food Business India, two leading organizations
                dedicated to nurturing growth and innovation in the food franchise industry. Under his guidance, these
                platforms have become invaluable resources for aspiring entrepreneurs, offering comprehensive guidance,
                industry insights, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-white to-[#138808]/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">Recognition & Impact</h2>
            <div className="w-20 h-1 bg-[#FF9933] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Awards, accolades, and the impact of Prashant Kulkarni's entrepreneurial journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-[#FF9933] mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="text-sm font-medium text-[#138808] mb-2">{achievement.year}</div>
                <h3 className="text-xl font-bold mb-3 text-[#000080]">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000080]">Journey Through Time</h2>
            <div className="w-20 h-1 bg-[#FF9933] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of Prashant Kulkarni's entrepreneurial journey and key milestones.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#138808]/20"></div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/2">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-1/2 px-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#FF9933]/20">
                      <div className="text-2xl font-bold text-[#138808] mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3 text-[#000080]">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF9933] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-lime-600 to-lime-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect?</h2>
            <p className="text-xl text-lime-100 mb-8">
              Let's discuss how we can work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-lime-600 hover:bg-lime-50 px-8 py-6 text-lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Book for Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}
