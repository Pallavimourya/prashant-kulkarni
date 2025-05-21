"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on the home page
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHomePage
          ? isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-transparent py-4"
          : "bg-white shadow-md py-2"
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span
              className={cn(
                "transition-colors duration-300",
                isHomePage
                  ? isScrolled
                    ? "text-theme-dark"
                    : "text-white"
                  : "text-theme-dark"
              )}
            >
              PRASHANT KULKARNI
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Mentorship", href: "/mentorship" },
              { name: "Gallery", href: "/gallery" },
              { name: "Press Kit", href: "/press-kit" },
              { name: "Events", href: "/events" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:opacity-70 transition-opacity",
                  isHomePage
                    ? isScrolled
                      ? "text-theme-dark"
                      : "text-white"
                    : "text-theme-dark"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link href="/contact">
              <Button
                variant={isHomePage && !isScrolled ? "outline" : "default"}
                className={cn(
                  isHomePage && !isScrolled
                    ? "border-white text-black hover:bg-white/10"
                    : "bg-theme-primary hover:bg-theme-secondary text-white"
                )}
              >
                Contact
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button
                variant="ghost"
                className={cn(
                  "font-semibold flex items-center gap-2",
                  isHomePage && !isScrolled
                    ? "text-white hover:bg-white/10"
                    : "text-theme-dark hover:bg-gray-100"
                )}
              >
                <LogIn className="w-4 h-4" />
                Admin Portal
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className={isHomePage && !isScrolled ? "text-white" : "text-theme-dark"} />
            ) : (
              <Menu className={isHomePage && !isScrolled ? "text-white" : "text-theme-dark"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div 
          className={cn(
            "md:hidden fixed inset-0 z-40 transition-all duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-theme-dark/95 backdrop-blur-sm" />
          <nav className="relative flex flex-col items-center space-y-6 p-8 pt-20">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Mentorship", href: "/mentorship" },
              { name: "Gallery", href: "/gallery" },
              { name: "Press Kit", href: "/press-kit" },
              { name: "Events", href: "/events" },
              { name: "Ideas", href: "/ideas" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="text-white text-lg font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Admin Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
