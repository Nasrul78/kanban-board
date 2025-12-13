import { BoardFilter, BoardSort, Board } from "@/types"

interface Props {
  boards: Board[]
  userId: string
  search: string
  filter: BoardFilter
  sort: BoardSort
}

const filterBoards = ({ boards, userId, search, filter, sort }: Props) => {
  let result = [...boards]

  if (search) {
    result = result.filter((board) =>
      board.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  switch (filter) {
    case "starred":
      result = result.filter((board) => board.starred)
      break
    case "shared":
      result = result.filter(
        (board) =>
          board.members.some((member) => member.id === userId) &&
          board.creatorId !== userId
      )
      break
    case "created":
      result = result.filter((board) => board.creatorId === userId)
      break
  }

  switch (sort) {
    case "updated":
      result.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
      break
    case "created":
      result.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
      break
    case "title_asc":
      result.sort((a, b) => a.title.localeCompare(b.title))
      break
    case "title_desc":
      result.sort((a, b) => b.title.localeCompare(a.title))
      break
  }

  return result
}

export default filterBoards
