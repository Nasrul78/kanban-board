import Image from "next/image"

interface Props {
  name: string
  color: string
  size: number
}

const Avatar = ({ name, color, size }: Props) => {
  return (
    <Image
      src={process.env.AVATAR_URL + name.replaceAll(" ", "")}
      alt={name}
      className="rounded-full p-1"
      style={{ backgroundColor: color }}
      width={size}
      height={size}
      unoptimized
    />
  )
}

export default Avatar
