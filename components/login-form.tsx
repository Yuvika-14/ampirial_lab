"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Link from 'next/link';
import axios from 'axios';

import {useRouter} from 'next/navigation';

export default function LoginForm() {
 const route = useRouter();

  const [userType, setUserType] = React.useState<"recruiter" | "applicant">("recruiter")
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState('')
  const login = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3001/login",
      data: { email, password },
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => console.log(res)).catch((err) => console.log(err));

}


  return (
    
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
    <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full blur-sm">
      <source src="/video/loginvid.mp4" type="video/mp4" />
    </video>
    <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm space-y-6">
    <div className="sm:mx-auto sm:w-full sm:max-w-xs">
      <img className="mx-auto h-20 w-auto" src="/video/logo.jpeg" alt="Startup Bihar" />

     
    </div>

      <div className="space-y-2 text-center">
        <h6   className="mt-6 text-xl font-bold">Sign in to your account</h6>
      </div>
      {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      <div className="flex rounded-lg border p-1">
        <button
          onClick={() => setUserType("recruiter")}
          className={cn(
            "flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            userType === "recruiter" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          )}
        >
          Recruiter
        </button>
        <button
          onClick={() => setUserType("applicant")}
          className={cn(
            "flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            userType === "applicant" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
          )}
        >
          Applicant
        </button>
      </div>
      <form onSubmit ={login}>
        <div className="space-y-4">
        <div className="space-y-2">
              <Label htmlFor="email">{userType === "applicant" ? "Applicant Email" : "Recruiter Email"}</Label>
              <Input id="email" type="email" className="w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
          
      
      
        <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
        <button onClick={()=> route.push("/dashboard/applicants")} className="w-full p-2 rounded-md bg-black text-white  " type="submit">
         
              Sign in
          
      
        </button>
      </div>
      </form>
      {userType === "applicant" && (
         <div className="text-center text-sm">
         Not a member?{" "}
         <Link href="/signup" className="underline">
           Sign up now
         </Link>
       </div>
      )}
     
    </div>
  </div>
  
  
  );
};
