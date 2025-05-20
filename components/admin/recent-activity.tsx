import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "contact",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    subject: "Speaking Engagement Request",
    time: "10 minutes ago",
  },
  {
    id: 2,
    type: "subscriber",
    email: "neha.gupta@example.com",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "comment",
    name: "Amit Singh",
    content: "Great insights on entrepreneurship!",
    post: "The Power of Mentorship",
    time: "3 hours ago",
  },
  {
    id: 4,
    type: "contact",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    subject: "Franchise Inquiry",
    time: "5 hours ago",
  },
  {
    id: 5,
    type: "subscriber",
    email: "vikram.mehta@example.com",
    time: "1 day ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt="" />
            <AvatarFallback className="bg-theme-primary text-white">
              {activity.type === "contact" || activity.type === "comment"
                ? activity.name?.split(" ")
                    .map((n) => n[0])
                    .join("")
                : "S"}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.type === "contact" && (
                <>
                  <span className="font-semibold">{activity.name}</span> submitted a contact form
                </>
              )}
              {activity.type === "subscriber" && (
                <>
                  <span className="font-semibold">{activity.email}</span> subscribed to the newsletter
                </>
              )}
              {activity.type === "comment" && (
                <>
                  <span className="font-semibold">{activity.name}</span> commented on{" "}
                  <span className="font-semibold">{activity.post}</span>
                </>
              )}
            </p>
            {activity.type === "contact" && (
              <p className="text-sm text-muted-foreground">Subject: {activity.subject}</p>
            )}
            {activity.type === "comment" && <p className="text-sm text-muted-foreground">"{activity.content}"</p>}
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
