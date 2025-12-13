import ActivityCard from "@/components/ActivityCard"
import BoardCard from "@/components/BoardCard"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { BOARDS_DUMMY } from "@/lib/constant"
import { Activity, Board, User } from "@/types"
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Grid2X2,
  History,
  Plus,
  Search,
  Star,
  UserCheck,
} from "lucide-react"
import Link from "next/link"

const BoardList = () => {
  const user: User = {
    name: "John Doe",
    email: "k3CwI@example.com",
  }
  const Activities: Activity[] = [
    {
      title: "Overdue tasks",
      value: "2",
      icon: AlertTriangle,
    },
    {
      title: "Due today",
      value: "3",
      icon: Clock,
    },
    {
      title: "Assigned to me",
      value: "2",
      icon: UserCheck,
    },
    {
      title: "Updated recently",
      value: "2",
      icon: History,
    },
  ]
  const data = BOARDS_DUMMY

  return (
    <div className="container mx-auto my-8 space-y-8 flex flex-col">
      <section>
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, {user.name ?? user.email}!
        </h1>
        <p className="text-muted-foreground mb-4">
          Here&apos;s what&apos;s been happening recently:
        </p>
        <div className="grid grid-cols-4 gap-8">
          {Activities.map((activity) => ActivityCard(activity))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2 items-center">
            <Star className="stroke-3 size-8 mb-1" />
            <h2 className="text-4xl font-bold">Starred Boards</h2>
          </div>
          <Button asChild variant="link" className="items-center" size="lg">
            <Link href="/boards?starred=true">
              View all
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {data
            .filter((board) => board.starred)
            .map((board) => BoardCard(board))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2 items-center">
            <Grid2X2 className="stroke-3 size-8" />
            <h2 className="text-4xl font-bold">All Boards</h2>
          </div>
          <Button className="items-center" size="lg">
            <Plus className="stroke-3 mb-0.5" />
            New Board
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {data.map((board) => BoardCard(board))}
          <Card className="text-muted-foreground hover:text-foreground aspect-square w-full hover:scale-105 gap-4 transition-all flex flex-col justify-center items-center">
            <Plus className="size-12" />
            <p className="text-2xl">Create New Board</p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default BoardList
