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
    value: "Pune, Maharashtra, India",
    icon: <MapPin className="h-6 w-6" />
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-lime-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-lime-100 mb-8">
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
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-lime-100 text-lime-600">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-600 hover:text-lime-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
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
                <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Your name"
                          className="bg-gray-50 border-gray-200 focus:border-lime-500 focus:ring-lime-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email"
                          className="bg-gray-50 border-gray-200 focus:border-lime-500 focus:ring-lime-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="bg-gray-50 border-gray-200 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message"
                        className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                    <Button className="w-full bg-lime-600 hover:bg-lime-700 text-white h-12">
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
                <h2 className="text-3xl font-bold mb-4">Connect on Social Media</h2>
                <p className="text-gray-600">
                  Follow me on social media for daily updates, insights, and inspiration.
                </p>
              </div>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 hover:bg-lime-50 transition-all group"
                      >
                        <span className="text-gray-600 group-hover:text-lime-600 transition-colors mb-2">
                          {link.icon}
                        </span>
                        <span className="text-sm text-gray-600 group-hover:text-lime-600 transition-colors">
                          {link.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-lime-600 to-lime-700 text-white shadow-lg">
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
