"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Calendar, FileText, Users, Settings } from "lucide-react"

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/contacts", label: "Contacts", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-theme-primary">Admin Panel</h1>
      </div>
      <nav className="space-y-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                isActive
                  ? "bg-theme-primary text-white"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 