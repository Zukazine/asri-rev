"use client"

import { useRouter } from "next/navigation";
import { SignInFlow } from "../types";
import { useAuthActions } from "@convex-dev/auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc"
import { useState } from "react";
import { TriangleAlert } from "lucide-react";

interface SignUpProps {
  setState: (state: SignInFlow) => void
}

export const SignUp = ({
  setState
}: SignUpProps) => {
  const router = useRouter()
  const { signIn } = useAuthActions()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError("Password do not match!")
      return
    }

    setPending(true)
    signIn("password", { name, email, password, flow: "signUp"})
      .catch(() => {
        setError("Something went wrong!")
      })
      .finally(() => {
        setPending(false)
        router.push("/")
      })
  }

  const handleProviderSignUp = () =>{
    setPending(true)
    signIn("google").finally(() => {
      setPending(false)
    })
  }

  return (
    <Card className="w-full h-full p-10 bg-white/45 backdrop-blur-xl rounded-2xl">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center justify-between relative my-3">
          <CardTitle className="text-black/80">
            Daftar untuk masuk
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
        <form className="space-y-2.5" onSubmit={onPasswordSignUp}>  
          <Input
            disabled={pending}
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            placeholder="Full Name"
            required
          />
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
          <Input 
            disabled={pending}
            value={confirmPassword}
            onChange={(e) => {setConfirmPassword(e.target.value)}}
            placeholder="Confirm Password"
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
              onClick={handleProviderSignUp}
            >
              <FcGoogle className="absolute size-5 top-3 left-2.5"/>
              Continue with Google
            </Button>
          </div>
          <p className="text-xs text-muted/80">
            Already have an account ? <span onClick={() => setState('signIn')} className="text-sky-300 hover:underline cursor-pointer">Sign in</span>
          </p>
      </CardContent>
    </Card>
  );
}