export interface User {
  id?: string
  name: string
  email?: string
  avatarColor?: string
  avatarUrl?: string
}

export type TaskPriority = "low" | "medium" | "high" | "urgent"

export interface Task {
  id: string
  title: string
  description?: string
  priority: TaskPriority
  dueDate?: string
  assignee?: User[]
  createdAt: string
}

export interface Column {
  id: string
  title: string
  order: number
  tasks: Task[]
}

export type BoardColors =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "zinc"
  | "stone"

export interface Board {
  id: string
  title: string
  description?: string
  starred: boolean
  creatorId: string
  members: User[]
  columns: Column[]
  color: string
  createdAt: string
  updatedAt: string
}

export interface Activity {
  title: string
  value: string
  icon: LucideIcon
}

export type BoardFilter = "all" | "starred" | "shared" | "created"
export type BoardSort = "updated" | "created" | "title_asc" | "title_desc"
