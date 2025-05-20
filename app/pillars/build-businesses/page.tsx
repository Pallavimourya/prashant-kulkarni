import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BuildBusinessesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1556742504-16b083241fab?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Build Businesses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-dark/80 to-theme-dark/60 flex flex-col items-center justify-center text-white">
          <Building className="h-16 w-16 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Businesses</h1>
          <div className="w-20 h-1 bg-theme-accent"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-theme-dark">
              Showcasing ventures and brands that redefine industry standards
            </h2>

            <p className="text-lg text-theme-muted mb-8">
              Prashant Kulkarni's journey as a parallel entrepreneur has led to the creation of multiple successful
              businesses that have revolutionized their respective industries. His approach to business building
              combines innovation, standardization, and scalability to create ventures that not only succeed but
              transform entire sectors.
            </p>

            <div className="space-y-12 mt-12">
              <BusinessHighlight
                title="Tasty Alphabets"
                description="Revolutionizing food education by combining culinary learning with innovative educational approaches. Tasty Alphabets has transformed how children and adults alike learn about food, nutrition, and culinary arts."
                image="/tasty.jpeg"
              />

              <BusinessHighlight
                title="Food Franchise India"
                description="A comprehensive platform nurturing growth in the food franchise industry. Food Franchise India provides aspiring entrepreneurs with the knowledge, resources, and connections needed to establish successful food businesses."
                image="/franchise.jpeg"
                imageRight
              />

              <BusinessHighlight
                title="Chatar Patar"
                description="Standardizing street food across India with a focus on hygiene, quality, and consistency. Chatar Patar has grown from a single outlet to a nationwide franchise network, bringing the authentic flavors of Indian street food to a wider audience."
                image="/chatarpatarlogo.jpg"
              />

              <BusinessHighlight
                title="Food Business India"
                description="A comprehensive industry platform providing insights, trends, and business opportunities in the food sector. Food Business India connects stakeholders across the food ecosystem, facilitating growth and innovation."
                image="/franchise.jpeg"
                imageRight
              />

              <BusinessHighlight
                title="Zuper World"
                description="Empowering entrepreneurs with technology and win-win business models. Zuper World provides the tools, mentorship, and resources needed for aspiring business owners to succeed in today's competitive landscape."
                image="/zuper.png"
              />
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 text-theme-dark">Business Philosophy</h3>
              <p className="text-lg text-theme-muted mb-8">
                "Building businesses isn't just about creating profit centers; it's about solving problems, creating
                value, and transforming industries. Every venture should aim to leave a positive impact on its
                ecosystem."
              </p>
              <p className="italic text-theme-primary">- Prashant Kulkarni</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/#three-pillars">
                <Button
                  variant="outline"
                  className="group border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Pillars
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function BusinessHighlight({
  title,
  description,
  image,
  imageRight = false,
}: {
  title: string
  description: string
  image: string
  imageRight?: boolean
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imageRight ? "md:flex-row-reverse" : ""}`}>
      <div className={`${imageRight ? "md:order-2" : ""}`}>
        <h3 className="text-2xl font-bold mb-4 text-theme-dark">{title}</h3>
        <p className="text-theme-muted">{description}</p>
      </div>
      <div className={`relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md ${imageRight ? "md:order-1" : ""}`}>
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </div>
  )
}
