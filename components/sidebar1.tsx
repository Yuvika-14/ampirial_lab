import { Home, Bell, Search, Plus, Briefcase, Users, Calendar, CheckSquare } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar1({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 min-h-screen w-60 border-r bg-background", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded bg-blue-600" />
            <h2 className="text-lg font-semibold">NUBIZE</h2>
          </div>
          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Home className="h-4 w-4" />
              Home
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Bell className="h-4 w-4" />
              <Link href="/offer">
              Offer
              </Link>
             
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Search className="h-4 w-4" />
              Search
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Plus className="h-4 w-4" />
              Create Job
            </button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-sm font-semibold tracking-tight">Your Jobs</h2>
          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full text-sm font-medium bg-accent text-accent-foreground rounded-lg px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              Lead Designer
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Web Designer
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Android Developer
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Project Manager
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              Product Designer
            </button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-sm font-semibold tracking-tight">Menu</h2>
          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Briefcase className="h-4 w-4" />
              Jobs
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Users className="h-4 w-4" />
              Candidates
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <Calendar className="h-4 w-4" />
              Events
            </button>
            <button className="flex items-center gap-3 w-full text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2">
              <CheckSquare className="h-4 w-4" />
              To-dos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

