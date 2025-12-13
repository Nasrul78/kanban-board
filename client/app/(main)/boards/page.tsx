"use client"

import ActivityCard from "@/components/ActivityCard"
import BoardCard from "@/components/BoardCard"
import BoardsFilter from "@/components/BoardsFilter"
import BoardsSort from "@/components/BoardsSort"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import useBoardsQuery from "@/hooks/useBoardQuery"
import { BOARDS_DUMMY } from "@/lib/constant"
import filterBoards from "@/lib/filterBoards"
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
  X,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const BoardList = () => {
  const { search, setSearch, filter, sort } = useBoardsQuery()
  const [input, setInput] = useState(search)
  const [filteredBoards, setFilteredBoards] = useState<Board[]>()

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

  const user: User = {
    name: "John Doe",
    email: "k3CwI@example.com",
  }
  const data = BOARDS_DUMMY

  useEffect(() => {
    setInput(search)
  }, [search])

  useEffect(() => {
    setFilteredBoards(filterBoards({ boards: data, input, filter, sort }))
  }, [data, input, filter, sort])

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

      <section className="min-h-screen">
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2 items-center">
            <Grid2X2 className="stroke-3 size-8" />
            <h2 className="text-4xl font-bold">All Boards</h2>
          </div>
          <Button className="items-center" size="lg">
            <Plus className="stroke-3 mb-0.5" />
            New Board
          </Button>
        </div>

        <div className="flex items-center mb-4">
          <div className="mr-4">
            <h3 className="text-lg">Filter by</h3>
            <BoardsFilter />
          </div>
          <div>
            <h3 className="text-lg">Sort by</h3>
            <BoardsSort />
          </div>
          <div className="ml-auto">
            <h3 className="text-lg">Search</h3>
            <InputGroup>
              <InputGroupInput
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setSearch(input)}
                placeholder="Search board..."
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <X />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {filteredBoards && filteredBoards?.length > 0 ? (
            filteredBoards.map((board) => BoardCard(board))
          ) : (
            <p>not found</p>
          )}

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
