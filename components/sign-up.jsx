"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Link from 'next/link';
import axios from "axios";

export default function SignupForm () {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const signup = () => {
   
      axios({
        method: "post",
        url: "http://localhost:3001/signup",
        data: { email, password },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => console.log(res)).catch((err) => console.log(err));

  }
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
  <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
    <source src="/video/loginvid.mp4" type="video/mp4" />
  </video>
  <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6">
  <div className="sm:mx-auto sm:w-full sm:max-w-xs">
      <img className="mx-auto h-20 w-auto" src="/video/logo.jpeg" alt="Startup Bihar" />

     
    </div>
    <div className="space-y-2 text-center">
      <h2 className="mt-6 text-xl font-bold">Sign up to your account</h2>
    </div>
    <div className="space-y-4">
      <Label htmlFor="app_email">Applicant Email</Label>
      <Input id="app_email" required type="email" className="w-full" onChange = {e => setEmail(e.target.value)} />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" required type="password" className="w-full" onChange = {e => setPassword(e.target.value)}/>
    </div>
    <Button className="w-full" type="submit" onClick={signup}>
      Sign Up
    </Button>
    <div className="text-center text-sm">
         Already a user?{" "}
         <Link href="/login" className="underline">
           Sign in now
         </Link>
       </div>
  </div>

</div>

  
    )
}