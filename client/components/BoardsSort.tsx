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

const BoardsSort = () => {
  const { sort, setSort } = useBoardsQuery()

  return (
    <Select value={sort} onValueChange={setSort}>
      <SelectTrigger className="w-45">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="updated">Recently updated</SelectItem>
          <SelectItem value="created">Recently created</SelectItem>
          <SelectItem value="title_asc">Title (A-Z)</SelectItem>
          <SelectItem value="title_desc">Title (Z-A)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default BoardsSort
