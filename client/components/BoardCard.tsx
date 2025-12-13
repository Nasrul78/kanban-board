import { Board } from "@/types"
import { Card, CardContent, CardHeader } from "./ui/card"
import Avatar from "./Avatar"

const gradient: Record<string, string> = {
  red: "from-red-300 to-red-700",
  orange: "from-orange-300 to-orange-700",
  amber: "from-amber-300 to-amber-700",
  yellow: "from-yellow-400 to-yellow-700",
  lime: "from-lime-400 to-lime-700",
  green: "from-green-300 to-green-700",
  emerald: "from-emerald-300 to-emerald-700",
  teal: "from-teal-300 to-teal-700",
  cyan: "from-cyan-300 to-cyan-700",
  sky: "from-sky-300 to-sky-700",
  blue: "from-blue-300 to-blue-700",
  indigo: "from-indigo-300 to-indigo-700",
  violet: "from-violet-300 to-violet-700",
  purple: "from-purple-300 to-purple-700",
  fuchsia: "from-fuchsia-300 to-fuchsia-700",
  pink: "from-pink-300 to-pink-700",
  rose: "from-rose-300 to-rose-700",
  slate: "from-slate-300 to-slate-700",
  zinc: "from-zinc-300 to-zinc-700",
  stone: "from-stone-300 to-stone-700",
}

const BoardCard = ({ id, title, description, color, members }: Board) => {
  return (
    <Card
      key={id}
      className="aspect-square w-full hover:scale-105 transition-all pt-0 overflow-hidden rounded-xl">
      <CardHeader
        className={`h-1/2 bg-linear-to-br ${gradient[color]}`}></CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

export default BoardCard
