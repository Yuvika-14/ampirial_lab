"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CandidatesColumn } from "@/components/candidates-column"
import Link  from 'next/link';

const candidates = {
  applied: [
    {
      name: "Daisy Schoen",
      location: "54 Devon St, Florence, SC, US",
      image:"/video/m1.jpeg",
      rating: 5,
      appliedDate: "Applied Today"
    },
    {
      name: "Daisy Schoen",
      location: "637 Oxford St, Tacoma, WA, US",
      image:"/video/m1.jpeg",
      rating: 4,
      appliedDate: "Applied Today"
    }
  ],
  screening: [
    {
      name: "Daisy Schoen",
      location: "13 Hebron Ave, Ankeny, IA, US",
      image:"/video/m1.jpeg",
      rating: 5,
      appliedDate: "Applied Yesterday"
    }
  ],
  disqualified: [
    {
      name: "Daisy Schoen",
      location: "472 Bindle Ave, Phoenix, AZ, US",
      image:"/video/m1.jpeg",
      rating: 3,
      appliedDate: "Applied Today"
    }
  ],
  offer: [
    {
      name: "Cisco",
      location: "Bengaluru",
    
      image:"/video/m1.jpeg",


      rating: 4,
      appliedDate:"3 Months Back"
    }
  ]
}

export default function Dashboard1() {
  return (
    <div className="flex h-screen bg-gray-50">
     
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
              title="Applied" 
              count={4} 
              candidates={candidates.applied} 
            />
            <CandidatesColumn 
              title="Screening" 
              count={3} 
              candidates={candidates.screening} 
            />
           
          </div>
          <div className="grid grid-cols-3 gap-6">
            <CandidatesColumn 
              title="Offer"
              count={4} 
              candidates={candidates.offer}
            />
            <CandidatesColumn 
              title="Screening" 
              count={3} 
              candidates={candidates.screening} 
            />
           
          </div>
        </main>
      </div>
    </div>
  )
}

