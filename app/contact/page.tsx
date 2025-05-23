import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SocialLinks from "@/components/social-links"

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Get In Touch</h1>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <p className="max-w-3xl text-lg text-gray-300">
              Connect with Prashant Kulkarni for speaking engagements, partnerships, mentorship, or media inquiries.
            </p>
      </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new
                opportunities, speaking engagements, or answering any questions you might have.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@prashantkulkarni.com</p>
        </div>
      </div>

                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 1234567890</p>
                    </div>
      </div>

                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5" />
              </div>
              <div>
                    <h3 className="font-medium mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Food Franchise India
                      <br />
                      123 Business Hub, Mumbai
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">Connect on Social Media</h3>
                <SocialLinks className="justify-start" />
              </div>
            </div>

              <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" required />
              </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[150px]"
                    required
                  />
              </div>

                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How Can I Help You?</h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              I'm available for various professional engagements and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <InquiryCard
              title="Speaking Engagements"
              description="Book me for keynotes, panels, or workshops at your next event."
            />

            <InquiryCard
              title="Media Interviews"
              description="Connect for podcast appearances, interviews, or expert commentary."
            />

            <InquiryCard
              title="Business Partnerships"
              description="Explore collaboration opportunities for mutual growth and innovation."
            />

            <InquiryCard
              title="Mentorship"
              description="Seek guidance for your entrepreneurial journey or business challenges."
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">SIGN UP FOR IDEAS</h2>
            <p className="max-w-2xl text-gray-300 mb-8">
              Join my newsletter to receive the latest insights, ideas, and updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                Subscribe
                </Button>
            </form>
              </div>
            </div>
      </section>
    </main>
  )
}

function InquiryCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
