import { Activity } from "@/types"
import { Card, CardContent } from "@/components/ui/card"

const ActivityCard = ({ title, value, icon: Icon }: Activity) => {
  return (
    <Card
      key={title}
      className="hover:scale-105 py-6 px-4 w-full transition-all">
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className="size-8 text-white" />
      </CardContent>
    </Card>
  )
}

export default ActivityCard
