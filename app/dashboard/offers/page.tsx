"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function OffersPage() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address1: "",
    address2: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "User Created",
      description: "New user profile has been created successfully.",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
  
    <div className="min-h-screen border-l-2 border-l-gray-400  border-r-2 border-r-gray-400 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-BLACK mb-2">SEND OFFER LETTER</h1>


        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-500">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-500">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
                placeholder="Enter last name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-500">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter email address"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <Label htmlFor="contactNumber" className="text-gray-500">
              Contact Number
            </Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter contact number"
            />
          </div>

          {/* Address Fields */}
          <div className="space-y-2">
            <Label htmlFor="address1" className="text-gray-500">
              Address 1
            </Label>
            <Input
              id="address1"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter address line 1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address2" className="text-gray-500">
              Address 2
            </Label>
            <Input
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter address line 2"
            />
          </div>
        
          <div className="space-y-2">
            <Label htmlFor="position" className="text-gray-500">
              Position
            </Label>
            <Input
             
              
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter email address"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-500">
              Salary
            </Label>
            <Input
             
              
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter email address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="loaction" className="text-gray-500">
               Location
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="doj" className="text-gray-500">
                Date of Joining
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg" className="text-gray-500">
              Message
            </Label>
            <Textarea
             
              
              className="bg-WHITE border- b-2 border-b-gray-700 text-white placeholder:text-gray-400"
              placeholder="Enter the details of company.."
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#4fd1c5] hover:bg-[#38b2ac] text-white px-6"
            >
              Send offer letter
            </Button>
          </div>
        </form>
        
      </div>

    </div>
  )
}

