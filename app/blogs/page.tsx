import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllBlogs } from "@/lib/blog-data"
import { Calendar, Tag } from "lucide-react"

export default function BlogsPage() {
  const blogs = getAllBlogs()
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400">
            Latest Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover valuable insights, stories, and perspectives from Prashant Kulkarni
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-lime-50">
              <TabsTrigger value="all" className="data-[state=active]:bg-lime-600 data-[state=active]:text-white">
                All Posts
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-lime-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all border-lime-100">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        <span>{blog.category}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-lime-600 transition-colors">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {blog.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link href={`/blogs/${blog.slug}`}>
                      <Button className="bg-lime-600 hover:bg-lime-700 text-white">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs
                  .filter((blog) => blog.category === category)
                  .map((blog) => (
                    <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all border-lime-100">
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag className="h-4 w-4" />
                            <span>{blog.category}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl hover:text-lime-600 transition-colors">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {blog.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link href={`/blogs/${blog.slug}`}>
                          <Button className="bg-lime-600 hover:bg-lime-700 text-white">
                            Read More
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
