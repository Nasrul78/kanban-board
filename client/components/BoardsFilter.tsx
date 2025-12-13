import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"
import useBoardsQuery from "@/hooks/useBoardQuery"

const BoardsFilter = () => {
  const { filter, setFilter } = useBoardsQuery()

  return (
    <Select value={filter} onValueChange={setFilter}>
      <SelectTrigger className="w-45">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter by</SelectLabel>
          <SelectItem value="all">All boards</SelectItem>
          <SelectItem value="starred">Starred</SelectItem>
          <SelectItem value="shared">Shared with me</SelectItem>
        </SelectGroup>
        <SelectItem value="created">Created by me</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default BoardsFilter
