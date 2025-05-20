"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Calendar,
  MessageSquare,
  ImageIcon,
  Settings,
  LogOut,
  ChevronDown,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAdmin } from "@/components/admin/admin-provider"

const navItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Blog Posts",
    href: "/admin/blogs",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Contacts",
    href: "/admin/contacts",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const { isSidebarOpen, toggleSidebar } = useAdmin()

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleSidebar} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:relative md:z-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="h-16 flex items-center justify-between px-4 border-b">
            <Link href="/admin" className="flex items-center">
              <span className="text-xl font-bold">Admin Panel</span>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href ? "bg-theme-primary text-white" : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Content Management Section */}
            <div className="mt-8">
              <div className="px-3 mb-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Content Management</h3>
              </div>
              <ul className="space-y-1">
                <li>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      Pages
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="flex items-center gap-3">
                      <ImageIcon className="h-5 w-5" />
                      Gallery
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t">
            <Link href="/">
              <Button variant="outline" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
