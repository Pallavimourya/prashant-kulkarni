import { create } from "zustand"

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  status: string
  date: string
  views: number
  featuredImage: string
}

interface AppState {
  blogs: BlogPost[]
  refreshData: () => void
}

export const useAppStore = create<AppState>((set) => ({
  blogs: [],
  refreshData: () => {
    const blogs = getBlogs()
    set({ blogs })
  }
})) 