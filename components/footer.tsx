import type React from "react"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MessageSquare,
  Send,
  Twitter,
  PinIcon as Pinterest,
} from "lucide-react"

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Blogs", href: "/blogs" },
      { name: "Mentorship", href: "/mentorship" },
      { name: "Contact", href: "/contact" },
    ],
  },
  // ... other footer sections ...
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#FF9933] via-white to-[#138808] text-[#000080] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#000080]">Prashant Kulkarni</h3>
            <p className="text-[#000080]/80 mb-6">Parallel Entrepreneur | Innovator | Speaker | Thinker</p>
            <div className="flex flex-wrap gap-4">
              <SocialLink href="https://x.com/zuperprashant" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://www.facebook.com/zuperprashant/" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://www.linkedin.com/in/zuperprashant/" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://www.youtube.com/c/zuperprashant" icon={<Youtube size={18} />} label="YouTube" />
              <SocialLink href="https://www.instagram.com/zuperprashant/" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="mailto:zuperprashant@gmail.com" icon={<Mail size={18} />} label="Email" />
              <SocialLink href="https://wa.me/7697624256" icon={<MessageSquare size={18} />} label="WhatsApp" />
              <SocialLink href="https://in.pinterest.com/zuperprashant/" icon={<Pinterest size={18} />} label="Pinterest" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#000080]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  Speaking Engagements
                </Link>
              </li>
              <li>
                <Link href="/press-kit" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  Blog & Ideas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#000080]/80 hover:text-[#000080] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-[#000080]">Newsletter</h3>
            <p className="text-[#000080]/80 mb-4">Sign up for ideas and updates from Prashant Kulkarni.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-white/80 text-[#000080] border border-[#000080]/30 focus:outline-none focus:ring-2 focus:ring-[#000080]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#000080] text-white font-medium py-2 rounded-md hover:bg-[#000080]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#000080]/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#000080]/80 text-sm">© {currentYear} Prashant Kulkarni. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#000080]/80 text-sm hover:text-[#000080] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-[#000080]/80 text-sm hover:text-[#000080] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="bg-[#000080]/20 p-2 rounded-full hover:bg-[#000080]/40 transition-colors text-[#000080]"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}

