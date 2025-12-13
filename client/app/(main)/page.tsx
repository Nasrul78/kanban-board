import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { CheckSquare, Users, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Organize your tasks with intuitive drag-and-drop boards",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team in real-time",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with Next.js 15 for optimal performance",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with Clerk authentication",
    },
  ]

  return (
    <div className="text-center">
      <section className="container mx-auto flex items-center flex-col min-h-screen justify-center">
        <h1 className="text-6xl font-bold mb-6">
          Organize work and life,{" "}
          <span className="text-blue-600">finally.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Kanban Board empowers teams to stay organized and keep work flowing.
          Plan, track, and deliver projects with clarity. Whether you&apos;re in
          the office or remote, every workflow is unique—get it all done with
          Kanban Board.
        </p>

        <div className="flex space-x-8 justify-center">
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/sign-up">
              Start for free
              <ArrowRight className="ml-2 size-5 stroke-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg">
            <Link href="/video">Watch demo</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto flex flex-col min-h-screen items-center justify-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything you need to stay organized
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help your team collaborate and get more done.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 gap-4! aspect-square justify-center scale-100 hover:scale-110 p-4 transition-all">
              <feature.icon className="size-12 p-2 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto" />
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-chart-1 py-20">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of teams who are already using Kanban Board to organize
          their work.
        </p>

        <Button asChild size="lg" className="px-8 py-6 text-lg">
          <Link href="/sign-up">
            Start organizing your work
            <ArrowRight className="ml-2 size-5 stroke-2" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
