import { BoardFilter, BoardSort, Board } from "@/types"

interface Props {
  boards: Board[]
  input: string
  filter: BoardFilter
  sort: BoardSort
}

const filterBoards = ({ boards, input, filter, sort }: Props) => {
  let result = [...boards]

  if (filter === "starred") result = result.filter((b) => b.starred)

  if (input) {
    result = result.filter((b) =>
      b.title.toLowerCase().includes(input.toLowerCase())
    )
  }

  switch (sort) {
    case "title_asc":
      result.sort((a, b) => a.title.localeCompare(b.title))
      break
    case "title_desc":
      result.sort((a, b) => b.title.localeCompare(a.title))
      break
    case "created":
      result.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
      break
    case "updated":
      result.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
      break
  }

  return result
}

export default filterBoards
