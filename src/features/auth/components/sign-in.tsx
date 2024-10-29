"use client"

import { useRouter } from "next/navigation";
import { SignInFlow } from "../types";
import { useAuthActions } from "@convex-dev/auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc"
import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";

interface SignInProps {
  setState: (state: SignInFlow) => void
}

export const SignIn = ({
  setState
}: SignInProps) => {
  const router = useRouter()
  const { signIn } = useAuthActions()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)
  
  const onPasswordSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setPending(true)
    signIn("password", { email, password, flow: "signIn"})
      .catch(() => {
        setError("Invalid email or password!")
      })
      .finally(() => {
        setPending(false)
        router.push('/')
      })
  }

  const handleProviderSignIn = () =>{
    setPending(true)
    signIn("google")
      .finally(() => {
        setPending(false)
        router.push('/')
    })
  }

  return (
    <Card className="w-full h-full p-10 bg-white/45 backdrop-blur-xl rounded-2xl">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center justify-between relative my-3">
          <CardTitle className="text-black/80">
            Masuk ke ASRI
          </CardTitle>
          <img src="/image/bubble.gif" className="size-[100px] scale-x-[-1] absolute -right-[7%]"/>
        </div>
        <CardDescription className="text-muted">
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-3">
          <TriangleAlert className="size-4"/>
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-6 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={onPasswordSignIn}>  
          <Input 
            disabled={pending}
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder="Email"
            required
          />
          <Input 
            disabled={pending}
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder="Password"
            required
            type="password"
          />
          <Button className="w-full" type="submit" size={"lg"} disabled={pending} variant={"default"}>
            Continue
          </Button>
        </form>
        <Separator />
          <div className="flex flex-col gap-y-2.5">
            <Button 
              variant={"outline"} 
              size={"lg"} 
              className="relative"
              disabled={pending}
              onClick={handleProviderSignIn}
            >
              <FcGoogle className="absolute size-5 top-3 left-2.5"/>
              Continue with Google
            </Button>
          </div>
          <p className="text-xs text-muted/80">
            Don&apos;t have an account ? <span onClick={() => setState('signUp')} className="text-sky-300 hover:underline cursor-pointer">Sign up</span>
          </p>
      </CardContent>
    </Card>
  );
}