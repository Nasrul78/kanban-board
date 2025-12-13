import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
  name: string
  color: string
  avatarUrl: string
  size: number
}

const Avatar = ({ name, color, avatarUrl, size }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Image
          src={avatarUrl}
          alt={name}
          className="rounded-full p-1"
          style={{ backgroundColor: color }}
          width={size}
          height={size}
          unoptimized
        />
      </TooltipTrigger>
      <TooltipContent sideOffset={5}>
        <p className="text-lg">{name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default Avatar
