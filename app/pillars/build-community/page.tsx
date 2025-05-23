import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BuildCommunityPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1696041757950-62e2c030283b?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Build Community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-theme-dark/80 to-theme-dark/60 flex flex-col items-center justify-center text-white">
          <Users className="h-16 w-16 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Community</h1>
          <div className="w-20 h-1 bg-theme-accent"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-theme-dark">
              Creating and nurturing communities that foster collaboration
            </h2>

            <p className="text-lg text-theme-muted mb-8">
              Prashant Kulkarni believes that strong communities are the foundation of sustainable growth and
              innovation. Through various initiatives, he has created platforms that bring together like-minded
              individuals, fostering collaboration, knowledge sharing, and collective growth.
            </p>

            <div className="space-y-12 mt-12">
              <CommunityHighlight
                title="Golden Sparrow India"
                description="An initiative celebrating excellence and innovation across various sectors. Golden Sparrow India recognizes outstanding contributions to industry and society, creating a community of changemakers and innovators."
                image="/Images/community/img1.jpg"
              />

              <CommunityHighlight
                title="Vrikshamulah"
                description="A community-focused environmental sustainability project promoting green practices and ecological awareness. Vrikshamulah brings together environmentally conscious individuals and organizations to create positive environmental impact."
                image="/Images/community/img2.jpg"
                imageRight
              />

              <CommunityHighlight
                title="Food Business Network"
                description="A platform connecting food entrepreneurs, suppliers, investors, and industry experts. The Food Business Network facilitates knowledge sharing, collaboration, and business opportunities within the food ecosystem."
                image="/Images/community/img3.jpg"
              />

              <CommunityHighlight
                title="Entrepreneur Circles"
                description="Peer learning groups that bring together entrepreneurs at various stages of their journey. These circles provide a supportive environment for sharing challenges, solutions, and growth strategies."
                image="/Images/community/img4.jpg"
                imageRight
              />

              <CommunityHighlight
                title="Industry Meetups"
                description="Regular gatherings that bring together professionals from various sectors to network, share insights, and explore collaboration opportunities. These meetups have led to numerous partnerships and innovative ventures."
                image="/Images/community/img5.jpg"
              />
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4 text-theme-dark">Community Philosophy</h3>
              <p className="text-lg text-theme-muted mb-8">
                "Communities are the ecosystems where ideas flourish, collaborations form, and innovations take root. By
                building strong, purpose-driven communities, we create environments where individuals can grow,
                businesses can thrive, and positive change can happen."
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

function CommunityHighlight({
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
