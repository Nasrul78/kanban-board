import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Avatar from "@/components/Avatar"
import Link from "next/link"
import { Grid2X2, LogOut, User } from "lucide-react"

interface Props {
  name: string
  email: string
  color: string
}

const UserDropdown = ({ name, email, color }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="flex space-x-1 items-center">
          <h2 className="text-lg">{name}</h2>
          <Avatar name={name} color={color} size={32} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="space-y-2">
          <Link href="/profile" className="flex space-x-2 items-center">
            <Avatar name={name} color={color} size={32} />
            <h3 className="leading-none">{name}</h3>
          </Link>
          <Link href="/profile" className="text-sm font-muted-foreground">
            {email}
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="flex items-center">
          <Link href="/boards">
            <Grid2X2 />
            Boards
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="flex items-center">
          <Link href="/profile">
            <User />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="flex items-center"
          variant="destructive">
          <Link href="/sign-out">
            <LogOut />
            Sign out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
