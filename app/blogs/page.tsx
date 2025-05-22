import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllBlogs } from "@/lib/blog-data"

export default function BlogsPage() {
  const blogs = getAllBlogs()

  // Group blogs by category
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, stories, and perspectives from Prashant Kulkarni
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.category}</span>
                  </div>
                  <CardTitle className="text-2xl">{blog.title}</CardTitle>
                  <CardDescription className="text-base">{blog.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Button>Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 gap-6">
              {blogs
                .filter((blog) => blog.category === category)
                .map((blog) => (
                  <Card key={blog.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.category}</span>
                      </div>
                      <CardTitle className="text-2xl">{blog.title}</CardTitle>
                      <CardDescription className="text-base">{blog.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={`/blogs/${blog.slug}`}>
                        <Button>Read More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
