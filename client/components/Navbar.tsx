"use client"

import { Button } from "@/components/ui/button"
import { ListTodo, Plus } from "lucide-react"
import Link from "next/link"
import Avatar from "@/components/Avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { BOARDS_DUMMY } from "@/lib/dummyData"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  const isBoards = pathname === "/boards"

  const user = {
    name: "John Doe",
    color: "#f3f3f3",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=JohnDoe",
  }
  const isSignedIn = true
  const data = BOARDS_DUMMY

  return (
    <header className="bg-navbar w-screen">
      <div className="container mx-auto h-16 py-2 items-center flex justify-between">
        <Link href="/" className="space-x-2 flex">
          <ListTodo className="size-8" />
          <span className="font-semibold text-2xl">Kanban Board</span>
        </Link>

        {isSignedIn && (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Recent
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {data.slice(0, 5).map(({ id, title, description }) => (
                    <NavigationMenuLink asChild key={id} className="w-50">
                      <Link href={id}>
                        <h3 className="text-sm font-medium">{title}</h3>
                        <p className="text-muted-foreground line-clamp-1 text-sm">
                          {description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Starred
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {data
                    .slice(0, 5)
                    .filter(({ starred }) => starred)
                    .map(({ id, title, description }) => (
                      <NavigationMenuLink asChild key={id} className="w-50">
                        <Link href={id}>
                          <h3 className="text-sm font-medium">{title}</h3>
                          <p className="text-muted-foreground line-clamp-1 text-sm">
                            {description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {isSignedIn ? (
          <div className="flex gap-4 items-center">
            {isBoards ? (
              <Button className="items-center" size="lg">
                <Plus className="stroke-3 mb-0.5" />
                Create a board
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link href="/boards">Go to boards</Link>
              </Button>
            )}
            <Avatar {...user} size={48} />
          </div>
        ) : (
          <nav className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
