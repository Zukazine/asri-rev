"use client"

import { useState } from "react"
import { SignInFlow } from "../types"
import { SignIn } from "./sign-in"
import { SignUp } from "./sign-up"

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn")
  
  return (
    <div 
      className="h-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/gal-2.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? <SignIn setState={setState}/> : <SignUp setState={setState}/>}
      </div>
    </div>
  )
}