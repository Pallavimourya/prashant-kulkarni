import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const timelineData = [
  {
    year: "1987",
    title: "Born",
    image: "/images/1987.jpg",
    description:
      "Born in 1987, Prashant Kulkarni's entrepreneurial journey began at a young age, where he exhibited a remarkable drive for innovation and a keen business sense.",
  },
  {
    year: "1996",
    title: "Selling Paper Boats",
    image: "/images/1996.jpg",
    description:
      "Sold paper boats at 25 paisa for 50 boats to buy orange candies.",
  },
  {
    year: "1997",
    title: "Summer Magazine Library",
    image: "/images/1997.jpg",
    description:
      "Setup magazine library (Champak, Chacha Chaudhary, Pinky) to buy marbles (kanche).",
  },
  {
    year: "1998",
    title: "Video Cassette Library & VCR Rental",
    image: "/images/1998.jpg",
    description: "Managing Video Cassette library & VCR rental.",
  },
  {
    year: "2001",
    title: "Book Trading & Aquarium Passion",
    image: "/images/2001.jpg",
    description:
      "Bought books from 'kabadiwala' and sold them to buy new fishes for aquarium.",
  },
  {
    year: "2003",
    title: "SIM Cards & Tyre Tube Shop",
    image: "/images/2003.jpg",
    description:
      "Sold SIM cards to college students (earned ₹300 per activation) & managed tyre tube shop.",
  },
  {
    year: "2006",
    title: "Tyre Tube Factory Setup",
    image: "/images/2006.jpg",
    description:
      "Helped father set up tyre tube factory at Nimrani Industrial Area.",
  },
  {
    year: "2007",
    title: "Joined Infosys",
    image: "/images/2007.jpg",
    description:
      "Managed projects, implemented innovations, and organized events.",
  },
  {
    year: "2009",
    title: "Chatar Patar Concept",
    image: "/images/2009.jpg",
    description: "Started working on Chatar Patar snack concept.",
  },
  {
    year: "2011",
    title: "Chatar Patar Pvt Ltd",
    image: "/images/2011.jpg",
    description:
      "Registered Pvt Ltd company and expanded Chatar Patar nationally.",
  },
  {
    year: "2013",
    title: "Boxo Burger",
    image: "/images/2013.jpg",
    description:
      "Launched Boxo Burger, a subsidiary to diversify food ventures.",
  },
  {
    year: "2015",
    title: "Andeywala & CNBC Award",
    image: "/images/2015.jpg",
    description:
      "Andeywala received CNBC Masterpreneur award.",
  },
  {
    year: "2016",
    title: "Franchise Consulting",
    image: "/images/2016.jpg",
    description:
      "Started franchise consulting with Connect Franchise.",
  },
  {
    year: "2017",
    title: "Masterpreneur Award by ET Now",
    image: "/images/2017.jpg",
    description:
      "Awarded Masterpreneur by Times Now & ET Now.",
  },
  {
    year: "2019",
    title: "Entrepreneur of the Year",
    image: "/images/2019.jpg",
    description: "Honored as Entrepreneur of the Year.",
  },
  {
    year: "2020",
    title: "Zuper World",
    image: "/images/2020.jpg",
    description:
      "Launched Zuper World to support new entrepreneurs.",
  },
  {
    year: "2023",
    title: "On a Mission to Help Entrepreneurs",
    image: "/images/2023.jpg",
    description:
      "On a mission to uplift entrepreneurs across India.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-theme-gradient text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">My Story</h1>
            <div className="w-20 h-1 bg-theme-accent mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-300 mb-8">
              The entrepreneurial journey of Prashant Kulkarni - from software engineer to parallel entrepreneur.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-theme-dark">Prashant Kulkarni: A Parallel Entrepreneur</h2>
              <p className="text-lg text-theme-muted mb-4">
                Prashant Kulkarni is a visionary entrepreneur with a dynamic portfolio of ventures that span the food
                industry and beyond. As a Parallel Entrepreneur, he excels in managing multiple businesses
                simultaneously, leveraging his expertise, innovation, and strategic thinking to drive success.
              </p>
              <p className="text-lg text-theme-muted mb-4">
                In his role as the Director of Tasty Alphabets, Prashant has revolutionized the field of food, foodtech,
                food education, packaging standards, food standardization. Tasty Alphabets is an innovative platform
                that combines culinary education with language learning, providing a unique and engaging experience for
                children.
              </p>
              <p className="text-lg text-theme-muted">
                Prashant serves as the CEO of Food Franchise India and Food Business India, two leading organizations
                dedicated to nurturing growth and innovation in the food franchise industry. Under his guidance, these
                platforms have become invaluable resources for aspiring entrepreneurs, offering comprehensive guidance,
                industry insights, and networking opportunities.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/prashant1.jpg"
                alt="Prashant Kulkarni"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Prashant Kulkarni's Story</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Prashant Kulkarni: A Journey of Entrepreneurial Spirit and Inspiring Ventures
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Image Side */}
                  <div className="w-1/2 px-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-1/2 px-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-theme-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-theme-primary rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Recognition & Impact</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Awards, accolades, and the impact of Prashant Kulkarni's entrepreneurial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AwardCard
              title="CNBC Masterpreneur"
              description="Recognized for exceptional entrepreneurial skills and business acumen."
              year="2019"
            />

            <AwardCard
              title="Super Startup Asia"
              description="Honored for innovative business models and sustainable growth strategies."
              year="2018"
            />

            <AwardCard
              title="Food Innovator of the Year"
              description="Awarded for revolutionizing the street food industry with standardized processes."
              year="2017"
            />

            <AwardCard
              title="Franchise Leadership Award"
              description="Recognized for outstanding contribution to the franchise ecosystem in India."
              year="2016"
            />

            <AwardCard
              title="Young Entrepreneur Award"
              description="Honored for exceptional business leadership and innovation at a young age."
              year="2015"
            />

            <AwardCard
              title="Business Excellence Award"
              description="Recognized for operational excellence and business transformation."
              year="2014"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Connect?</h2>
              <p className="text-gray-300 max-w-md">
                Reach out to discuss speaking engagements, partnerships, or mentorship opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-200">Contact Me</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Book for an Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AwardCard({
  title,
  description,
  year,
}: {
  title: string
  description: string
  year: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="text-sm font-medium text-muted-foreground mb-2">{year}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
