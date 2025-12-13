import { Board } from "@/types"

export const BOARDS_DUMMY: Board[] = [
  {
    id: "board-1",
    title: "Kanban MVP",
    description: "Initial MVP for the Kanban app",
    starred: true,
    members: [
      { id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" },
      { id: "u2", name: "Alex", avatarUrl: "/avatars/2.png" },
    ],
    columns: [
      {
        id: "col-1",
        title: "Todo",
        order: 1,
        tasks: [
          {
            id: "task-1",
            title: "Design board list page",
            description: "Create layout for board list page",
            priority: "high",
            dueDate: "2025-12-20",
            assignee: { id: "u1", name: "Simol" },
            createdAt: "2025-12-10T08:00:00Z",
          },
          {
            id: "task-2",
            title: "Setup Tailwind theme",
            priority: "medium",
            createdAt: "2025-12-11T09:30:00Z",
          },
        ],
      },
      {
        id: "col-2",
        title: "In Progress",
        order: 2,
        tasks: [
          {
            id: "task-3",
            title: "Implement board page layout",
            priority: "urgent",
            assignee: { id: "u2", name: "Alex" },
            createdAt: "2025-12-12T06:15:00Z",
          },
        ],
      },
      {
        id: "col-3",
        title: "Done",
        order: 3,
        tasks: [
          {
            id: "task-4",
            title: "Project setup",
            priority: "low",
            createdAt: "2025-12-09T04:00:00Z",
          },
        ],
      },
    ],
    createdAt: "2025-12-08T02:00:00Z",
    updatedAt: "2025-12-12T10:00:00Z",
  },

  {
    id: "board-2",
    title: "School Project",
    description: "Group assignment planning",
    starred: false,
    members: [{ id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" }],
    columns: [
      {
        id: "col-4",
        title: "Ideas",
        order: 1,
        tasks: [
          {
            id: "task-5",
            title: "Brainstorm project topics",
            priority: "medium",
            createdAt: "2025-12-02T03:30:00Z",
          },
        ],
      },
      {
        id: "col-5",
        title: "Doing",
        order: 2,
        tasks: [
          {
            id: "task-6",
            title: "Write project outline",
            priority: "high",
            dueDate: "2025-12-18",
            assignee: { id: "u1", name: "Simol" },
            createdAt: "2025-12-03T06:00:00Z",
          },
        ],
      },
      {
        id: "col-6",
        title: "Completed",
        order: 3,
        tasks: [],
      },
    ],
    createdAt: "2025-12-01T01:00:00Z",
    updatedAt: "2025-12-05T05:00:00Z",
  },
  {
    id: "board-3",
    title: "Personal Tasks",
    description: "Daily personal task tracking",
    starred: true,
    members: [{ id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" }],
    columns: [
      {
        id: "col-7",
        title: "Backlog",
        order: 1,
        tasks: [
          {
            id: "task-7",
            title: "Clean up laptop files",
            priority: "low",
            createdAt: "2025-12-07T02:00:00Z",
          },
          {
            id: "task-8",
            title: "Update CV",
            priority: "medium",
            createdAt: "2025-12-08T04:30:00Z",
          },
        ],
      },
      {
        id: "col-8",
        title: "Today",
        order: 2,
        tasks: [
          {
            id: "task-9",
            title: "Finish math homework",
            priority: "urgent",
            dueDate: "2025-12-13",
            createdAt: "2025-12-13T01:00:00Z",
          },
        ],
      },
      {
        id: "col-9",
        title: "Done",
        order: 3,
        tasks: [
          {
            id: "task-10",
            title: "Read documentation",
            priority: "low",
            createdAt: "2025-12-06T03:00:00Z",
          },
        ],
      },
    ],
    createdAt: "2025-12-06T01:00:00Z",
    updatedAt: "2025-12-13T02:00:00Z",
  },

  {
    id: "board-4",
    title: "Open Source Contributions",
    description: "Tracking issues and PRs",
    starred: false,
    members: [
      { id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" },
      { id: "u3", name: "Jamie", avatarUrl: "/avatars/3.png" },
    ],
    columns: [
      {
        id: "col-10",
        title: "Issues",
        order: 1,
        tasks: [
          {
            id: "task-11",
            title: "Fix scrollbar overflow bug",
            priority: "high",
            createdAt: "2025-12-10T07:45:00Z",
          },
        ],
      },
      {
        id: "col-11",
        title: "Pull Requests",
        order: 2,
        tasks: [
          {
            id: "task-12",
            title: "Refactor board card component",
            priority: "medium",
            assignee: { id: "u3", name: "Jamie" },
            createdAt: "2025-12-11T05:00:00Z",
          },
        ],
      },
      {
        id: "col-12",
        title: "Merged",
        order: 3,
        tasks: [],
      },
    ],
    createdAt: "2025-12-09T01:30:00Z",
    updatedAt: "2025-12-12T09:00:00Z",
  },
  {
    id: "board-5",
    title: "Exam Preparation",
    description: "Preparing for upcoming school exams",
    starred: false,
    members: [{ id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" }],
    columns: [
      {
        id: "col-13",
        title: "Subjects",
        order: 1,
        tasks: [
          {
            id: "task-13",
            title: "Math revision",
            priority: "high",
            dueDate: "2025-12-22",
            createdAt: "2025-12-14T02:00:00Z",
          },
          {
            id: "task-14",
            title: "Physics formulas",
            priority: "medium",
            createdAt: "2025-12-15T03:30:00Z",
          },
        ],
      },
      {
        id: "col-14",
        title: "Studying",
        order: 2,
        tasks: [],
      },
      {
        id: "col-15",
        title: "Completed",
        order: 3,
        tasks: [],
      },
    ],
    createdAt: "2025-12-14T01:00:00Z",
    updatedAt: "2025-12-15T04:00:00Z",
  },

  {
    id: "board-6",
    title: "UI / UX Ideas",
    description: "Design inspiration and UI experiments",
    starred: true,
    members: [
      { id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" },
      { id: "u4", name: "Rina", avatarUrl: "/avatars/4.png" },
    ],
    columns: [
      {
        id: "col-16",
        title: "Ideas",
        order: 1,
        tasks: [
          {
            id: "task-15",
            title: "Minimal board card design",
            priority: "medium",
            createdAt: "2025-12-11T06:00:00Z",
          },
        ],
      },
      {
        id: "col-17",
        title: "Designing",
        order: 2,
        tasks: [
          {
            id: "task-16",
            title: "Dark theme color palette",
            priority: "high",
            assignee: { id: "u4", name: "Rina" },
            createdAt: "2025-12-12T08:15:00Z",
          },
        ],
      },
      {
        id: "col-18",
        title: "Done",
        order: 3,
        tasks: [],
      },
    ],
    createdAt: "2025-12-10T02:00:00Z",
    updatedAt: "2025-12-13T09:30:00Z",
  },

  {
    id: "board-7",
    title: "Bug Tracker",
    description: "Tracking bugs and regressions",
    starred: false,
    members: [
      { id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" },
      { id: "u2", name: "Alex", avatarUrl: "/avatars/2.png" },
    ],
    columns: [
      {
        id: "col-19",
        title: "Reported",
        order: 1,
        tasks: [
          {
            id: "task-17",
            title: "Search input lag",
            priority: "high",
            createdAt: "2025-12-13T05:00:00Z",
          },
        ],
      },
      {
        id: "col-20",
        title: "Fixing",
        order: 2,
        tasks: [
          {
            id: "task-18",
            title: "Scrollbar overlap on macOS",
            priority: "urgent",
            assignee: { id: "u2", name: "Alex" },
            createdAt: "2025-12-14T07:30:00Z",
          },
        ],
      },
      {
        id: "col-21",
        title: "Resolved",
        order: 3,
        tasks: [],
      },
    ],
    createdAt: "2025-12-13T04:00:00Z",
    updatedAt: "2025-12-15T08:00:00Z",
  },

  {
    id: "board-8",
    title: "Learning Roadmap",
    description: "Tracking learning progress and goals",
    starred: false,
    members: [{ id: "u1", name: "Simol", avatarUrl: "/avatars/1.png" }],
    columns: [
      {
        id: "col-22",
        title: "Planned",
        order: 1,
        tasks: [
          {
            id: "task-19",
            title: "Learn React Server Components",
            priority: "medium",
            createdAt: "2025-12-10T02:30:00Z",
          },
        ],
      },
      {
        id: "col-23",
        title: "In Progress",
        order: 2,
        tasks: [
          {
            id: "task-20",
            title: "Understand hooks rules",
            priority: "high",
            createdAt: "2025-12-11T06:45:00Z",
          },
        ],
      },
      {
        id: "col-24",
        title: "Completed",
        order: 3,
        tasks: [
          {
            id: "task-21",
            title: "Basics of Next.js App Router",
            priority: "low",
            createdAt: "2025-12-09T01:00:00Z",
          },
        ],
      },
    ],
    createdAt: "2025-12-09T00:30:00Z",
    updatedAt: "2025-12-14T10:00:00Z",
  },
]
