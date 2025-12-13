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
    <header className="bg-navbar fixed w-screen z-10">
      <div className="container mx-auto py-2 items-center flex justify-between">
        <Link href="/" className="space-x-2 flex">
          <ListTodo className="size-8" />
          <span className="font-semibold text-2xl">Kanban Board</span>
        </Link>

        {isSignedIn ? (
          <UserDropdown {...user} />
        ) : (
          <nav className="space-x-2">
            <Link href="/sign-in">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Sign up</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
