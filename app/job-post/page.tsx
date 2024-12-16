
"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar1 } from "@/components/sidebar1"
import { CandidatesColumn } from "@/components/candidates-column"
import Link  from 'next/link';

const candidates = {
  applied: [
    {
      name: "WEB - 3 (6-months internship)...",
      location: "Pune",
      image:"/video/web3.png",
      rating: 5,
      appliedDate: "Apply"
    },
    {
      name: "Google is hiring for SDE-I...",
      location: "637 Oxford St, Tacoma, WA, US",
      image:"/video/google.png",
      rating: 4,
      appliedDate: "Click here to apply"
    }
  ],
  screening: [
    {
      name: "Towar Research Capital for 2026 passouts",
      location: "Gurugram",
      image:"/video/tower.png",
      rating: 5,
      appliedDate: "Closing Soon.."
    }
  ],
  
}
const Job = () => {
  return (
    <div className="flex h-screen bg-gray-50">
    <Sidebar1 />
    <div className="flex-1 flex flex-col">
      <header className="h-16 border-b bg-background flex items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-semibold">Lead Designer</h1>
          <p className="text-sm text-muted-foreground">Full-time • New York • $23</p>
        </div>
        <Tabs defaultValue="candidates">
          <TabsList>
          <TabsTrigger value="apply-form">
              <Link  href="/job-post">
              Job Post
              </Link>
            </TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="apply-form">
              <Link  href="/apply-form">
              Apply Form
              </Link>
              </TabsTrigger>
          </TabsList>
        </Tabs>
      </header>
      <main className="flex-1 p-6">
        
        <div className="grid grid-cols-3  gap-6">
          <CandidatesColumn 
          
           
            candidates={candidates.applied} 
          />
          <CandidatesColumn 
            
            
            candidates={candidates.screening} 
          />
         
        </div>
       
      </main>
    </div>
  </div>
  )
}

export default Job;
