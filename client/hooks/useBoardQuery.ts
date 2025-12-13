"use client"

import { BoardFilter, BoardSort } from "@/types"
import { useSearchParams, useRouter } from "next/navigation"

const useBoardsQuery = () => {
  const params = useSearchParams()
  const router = useRouter()

  const search = params.get("search") ?? ""
  const filter = (params.get("filter") ?? "all") as BoardFilter
  const sort = (params.get("sort") ?? "updated") as BoardSort

  const setParam = (key: string, value?: string) => {
    const next = new URLSearchParams(params.toString())

    if (!value) next.delete(key)
    else next.set(key, value)

    router.replace(`/boards?${next.toString()}`, { scroll: false })
  }

  return {
    search,
    filter,
    sort,
    setSearch: (value?: string) => setParam("search", value),
    setFilter: (value: BoardFilter) => setParam("filter", value),
    setSort: (value: BoardSort) => setParam("sort", value),
  }
}

export default useBoardsQuery
