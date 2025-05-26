"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, PinIcon as Pinterest, Send } from "lucide-react"

const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/zuperprashant",
    icon: <Twitter className="h-5 w-5" />
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/zuperprashant/",
    icon: <Facebook className="h-5 w-5" />
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zuperprashant/",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/zuperprashant",
    icon: <Youtube className="h-5 w-5" />
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zuperprashant/",
    icon: <Instagram className="h-5 w-5" />
  },
  {
    name: "Email",
    href: "mailto:zuperprashant@gmail.com",
    icon: <Mail className="h-5 w-5" />
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/7697624256",
    icon: <MessageSquare className="h-5 w-5" />
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/zuperprashant/",
    icon: <Pinterest className="h-5 w-5" />
  }
]

const contactInfo = [
  {
    title: "Email",
    value: "zuperprashant@gmail.com",
    href: "mailto:zuperprashant@gmail.com",
    icon: <Mail className="h-6 w-6" />
  },
  {
    title: "Phone",
    value: "+91 7697624256",
    href: "tel:+917697624256",
    icon: <Phone className="h-6 w-6" />
  },
  {
    title: "Location",
    value: "Indore, Madhya Pradesh, India",
    icon: <MapPin className="h-6 w-6" />
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#138808]/5">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#FF9933] via-white to-[#138808] text-[#000080]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-[#000080] mb-8">
              Have a question or want to work together? I'm here to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-[#FF9933]/20 hover:border-[#FF9933]/40">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-[#138808]/10 text-[#138808]">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#000080]">{info.title}</h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-[#138808] hover:text-[#FF9933] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#138808]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#000080]">Send a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <Card className="bg-white shadow-lg border-[#FF9933]/20 hover:border-[#FF9933]/40">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#000080] mb-2">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Your name"
                          className="bg-gray-50 border-gray-200 focus:border-[#138808] focus:ring-[#138808]"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#000080] mb-2">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email"
                          className="bg-gray-50 border-gray-200 focus:border-[#138808] focus:ring-[#138808]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#000080] mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="bg-gray-50 border-gray-200 focus:border-[#138808] focus:ring-[#138808]"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#000080] mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message"
                        className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-[#138808] focus:ring-[#138808]"
                      />
                    </div>
                    <Button className="w-full bg-[#138808] hover:bg-[#138808]/90 text-white h-12">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Social Media & Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-[#000080]">Connect on Social Media</h2>
                <p className="text-gray-600">
                  Follow me on social media for daily updates, insights, and inspiration.
                </p>
              </div>
              <Card className="bg-white shadow-lg border-[#FF9933]/20 hover:border-[#FF9933]/40">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-[#138808]/10 transition-all group"
                      >
                        <span className="text-[#138808] group-hover:text-[#FF9933] transition-colors mb-2">
                          {link.icon}
                        </span>
                        <span className="text-sm text-[#138808] group-hover:text-[#FF9933] transition-colors">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#FF9933] to-[#138808] text-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
