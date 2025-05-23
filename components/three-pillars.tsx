import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ThreePillars() {
  return (
    <section className="py-20 bg-theme-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-theme-dark">
            Experience, Expertise, Empowerment
          </h2>
          <div className="w-20 h-1 bg-theme-accent mb-8"></div>
          <p className="max-w-3xl text-lg text-theme-muted">
            Prashant Kulkarni's three pillars of success that drive innovation and growth in the entrepreneurial
            ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <PillarCard
            title="Build Businesses"
            image="/img.jpg"
            href="/pillars/build-businesses"
          />

          <PillarCard
            title="Build Community"
            image="/Images/community.jpg"
            href="/pillars/build-community"
          />

          <PillarCard
            title="Build Entrepreneurs"
            image="/Images/enter.jpg"
            href="/pillars/build-entrepreneurs"
          />
        </div>
      </div>
    </section>
  )
}

function PillarCard({
  title,
  image,
  href,
}: {
  title: string
  image: string
  href: string
}) {
  return (
    <Link href={href} className="group">
      <div className="relative h-80 overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-dark to-transparent flex flex-col items-center justify-center p-6 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
          <div className="w-12 h-1 bg-theme-accent mb-4"></div>
          <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mr-2">Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
