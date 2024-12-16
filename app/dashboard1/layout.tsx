import { Sidebar1 } from "@/components/sidebar1"

export default function Dashboard1({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-white-100">
      <Sidebar1 />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}

