import { Button } from "@/components/ui/button"
import { ListTodo } from "lucide-react"
import Link from "next/link"
import UserDropdown from "./UserDropdown"

const Navbar = () => {
  const user = {
    name: "John Doe",
    email: "k3CwI@example.com",
    color: "blue",
  }
  const isSignedIn = true

  return (
    <header className="bg-navbar sticky w-screen">
      <div className="container mx-auto py-2 items-center flex justify-between">
        <Link href="/" className="space-x-2 flex">
          <ListTodo className="size-8" />
          <span className="font-semibold text-2xl">Kanban Board</span>
        </Link>

        {isSignedIn ? (
          <UserDropdown {...user} />
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
