import { Board } from "@/types"
import { Card } from "./ui/card"

const BoardCard = ({ id, title, description }: Board) => {
  return (
    <Card
      key={id}
      className="aspect-square w-full hover:scale-105 transition-all">
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  )
}

export default BoardCard
