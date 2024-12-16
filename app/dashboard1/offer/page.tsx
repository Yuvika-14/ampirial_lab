'use client'

import { useState } from 'react'
import { Bell, Mail, User, Check, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "react-hot-toast"

// Mock data for offers
const offers = [
    { id: 1, company: "Tech Corp", image: "/video/google.png", position: "Software Engineer", salary: "$120,000", status: "Pending" }
,
  { id: 2, company: "Data Inc",image: "/video/google.png", position: "Data Analyst", salary: "$90,000", status: "Pending" },
  { id: 3, company: "Design Co", image: "/video/google.png",position: "UX Designer", salary: "$100,000", status: "Pending" },
]

export default function ApplicantDashboard() {
  const [offersList, setOffersList] = useState(offers)
  const [selectedOffer, setSelectedOffer] = useState(null)
  const [showSignDialog, setShowSignDialog] = useState(false)
  const [signature, setSignature] = useState("")

  const handleAccept = (offer) => {
    setSelectedOffer(offer)
    setShowSignDialog(true)
  }

  const handleReject = (offerId) => {
    setOffersList(offersList.map(offer => 
      offer.id === offerId ? { ...offer, status: 'Rejected' } : offer
    ))
    toast({
      title: "Offer Rejected",
      description: "You have successfully rejected the offer.",
    })
  }

  const handleSign = (e) => {
    e.preventDefault()
    if (signature.trim() === "") {
      toast({
        title: "Error",
        
        description: "Please provide your signature.",
        variant: "destructive",
      })
      return
    }
    setOffersList(offersList.map(offer => 
      offer.id === selectedOffer.id ? { ...offer, status: 'Accepted' } : offer
    ))
    setShowSignDialog(false)
    setSignature("")
    toast({
      title: "Offer Accepted",
      description: "You have successfully signed and accepted the offer.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button size="icon" variant="outline">
            <Bell className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Mail className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Tabs defaultValue="offers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="offers">Offers</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="offers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offersList.map((offer) => (
              <Card key={offer.id}>
                <CardHeader>
                  <CardTitle>{offer.company}</CardTitle>
                  <img src={offer.image} width={50} height={50}  alt={offer.company} />

                  <CardDescription>{offer.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Salary: {offer.salary}</p>
                  <p className={`font-semibold ${
                    offer.status === 'Accepted' ? 'text-green-600' :
                    offer.status === 'Rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    Status: {offer.status}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {offer.status === 'Pending' && (
                    <>
                      <Button variant="outline" onClick={() => handleReject(offer.id)}>
                        <X className="mr-2 h-4 w-4" /> Reject
                      </Button>
                      <Button onClick={() => handleAccept(offer)}>
                        <Check className="mr-2 h-4 w-4" /> Accept
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <Dialog open={showSignDialog} onOpenChange={setShowSignDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign Offer Letter</DialogTitle>
            <DialogDescription>
              Please review the offer details and sign below to accept.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSign}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="company" className="text-right">
                  Company
                </Label>
                <Input
                  id="company"
                  value={selectedOffer?.company}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="position" className="text-right">
                  Position
                </Label>
                <Input
                  id="position"
                  value={selectedOffer?.position}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="salary" className="text-right">
                  Salary
                </Label>
                <Input
                  id="salary"
                  value={selectedOffer?.salary}
                  className="col-span-3"
                  disabled
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="signature" className="text-right">
                  Signature
                </Label>
                <Input
                  id="signature"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  className="col-span-3"
                  placeholder="Type your full name"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Sign and Accept</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

