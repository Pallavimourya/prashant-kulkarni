import { Inter } from "next/font/google"
import AuthCheck from "@/components/admin/auth-check"
import { AdminProvider } from "@/components/admin/admin-provider"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"

const inter = Inter({ subsets: ["latin"] })

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthCheck>
      <AdminProvider>
        <div className="flex min-h-screen bg-gray-50">
          <AdminSidebar />
          <div className="flex-1">
            <AdminHeader />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </AdminProvider>
    </AuthCheck>
  )
}
