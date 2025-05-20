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

interface SocialLinksProps {
  className?: string
}

export default function SocialLinks({ className = "justify-center" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
      <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
      <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
      <SocialLink href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
      <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
      <SocialLink href="mailto:contact@example.com" icon={<Mail size={18} />} label="Email" />
      <SocialLink href="https://wa.me/1234567890" icon={<MessageSquare size={18} />} label="WhatsApp" />
      <SocialLink href="https://t.me/username" icon={<Send size={18} />} label="Telegram" />
      <SocialLink href="https://pinterest.com" icon={<Pinterest size={18} />} label="Pinterest" />
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="bg-theme-primary/20 p-2 rounded-full hover:bg-theme-primary/40 transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
