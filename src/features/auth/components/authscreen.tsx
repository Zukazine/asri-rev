"use client"

import { useState } from "react"
import { SignInFlow } from "../types"
import { SignIn } from "./sign-in"
import { SignUp } from "./sign-up"
import Image from "next/image"

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn")
  
  return (
    <div 
      className="h-full absolute top-0 w-full flex items-center justify-center"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Image
        src="/image/gal-2.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        quality={50}
      />
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? <SignIn setState={setState}/> : <SignUp setState={setState}/>}
      </div>
    </div>
  )
}