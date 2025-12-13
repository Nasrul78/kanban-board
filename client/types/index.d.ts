export interface User {
  id?: string
  name: string
  email: string
  avatarUrl?: string
}

export type TaskPriority = "low" | "medium" | "high" | "urgent"

export interface Task {
  id: string
  title: string
  description?: string
  priority: TaskPriority
  dueDate?: string
  assignee?: {
    id: string
    name: string
    avatarUrl?: string
  }
  createdAt: string
}

export interface Column {
  id: string
  title: string
  order: number
  tasks: Task[]
}

export interface Board {
  id: string
  title: string
  description?: string
  starred: boolean
  members: {
    id: string
    name: string
    avatarUrl?: string
  }[]
  columns: Column[]
  createdAt: string
  updatedAt: string
}

export interface Activity {
  title: string
  value: string
  icon: LucideIcon
}
