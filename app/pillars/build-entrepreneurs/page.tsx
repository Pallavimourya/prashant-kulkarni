import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BuildEntrepreneursPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1726137569758-fb5f8d47ae4c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Build Entrepreneurs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-dark/80 to-theme-dark/60 flex flex-col items-center justify-center text-white">
          <Lightbulb className="h-16 w-16 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Entrepreneurs</h1>
          <div className="w-20 h-1 bg-theme-accent"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-theme-dark">
              Mentoring and empowering the next generation of entrepreneurs
            </h2>

            <p className="text-lg text-theme-muted mb-8">
              Prashant Kulkarni is passionate about nurturing entrepreneurial talent and helping aspiring business
              owners navigate their journey. Through mentorship, education, and practical guidance, he empowers
              individuals to transform their ideas into successful ventures.
            </p>

            <div className="space-y-12 mt-12">
              <EntrepreneurHighlight
                title="Campus Drives"
                description="Inspiring students at colleges and universities to consider entrepreneurship as a viable career path. These campus drives combine motivational talks with practical workshops on business fundamentals."
                image="/Images/entrepreneurs/img11.jpg"
              />

              <EntrepreneurHighlight
                title="Entrepreneurship Workshops"
                description="Intensive training sessions focused on developing practical business skills. These workshops cover everything from ideation and business planning to marketing, finance, and scaling strategies."
                image="/Images/entrepreneurs/img12.jpg"
                imageRight
              />

              <EntrepreneurHighlight
                title="Keynote Speaking"
                description="Sharing insights and experiences at conferences, seminars, and industry events. Prashant's keynotes inspire action and provide valuable lessons from his entrepreneurial journey."
                image="/Images/entrepreneurs/img13.jpg"
              />

              <EntrepreneurHighlight
                title="Business Coaching"
                description="Personalized guidance for entrepreneurs facing specific challenges or seeking to scale their ventures. This one-on-one coaching addresses the unique needs and goals of each entrepreneur."
                image="/Images/entrepreneurs/img14.jpg"
                imageRight
              />

              <EntrepreneurHighlight
                title="Startup Incubation"
                description="Nurturing new ventures through their early stages with resources, mentorship, and networking opportunities. The incubation program provides a supportive environment for startups to grow and thrive."
                image="/Images/entrepreneurs/img15.jpg"
              />
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 text-theme-dark">Entrepreneurship Philosophy</h3>
              <p className="text-lg text-theme-muted mb-8">
                "Entrepreneurship is not just about starting businesses; it's about developing a mindset that sees
                opportunities where others see challenges. By building entrepreneurs, we're creating problem-solvers who
                will drive innovation and positive change in society."
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

function EntrepreneurHighlight({
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
