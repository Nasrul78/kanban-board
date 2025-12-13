import Navbar from "@/components/Navbar"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen overflow-hidden">
      <Navbar />
      {children}
    </main>
  )
}

export default MainLayout
