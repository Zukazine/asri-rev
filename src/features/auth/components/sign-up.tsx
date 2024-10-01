"use client"

import { useRouter } from "next/navigation";
import { SignInFlow } from "../types";
import { useAuthActions } from "@convex-dev/auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useState } from "react";

interface SignUpProps {
  setState: (state: SignInFlow) => void
}

export const SignUp = ({
  setState
}: SignUpProps) => {
  const router = useRouter()
  const { signIn } = useAuthActions()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>
          Login to ASRI
        </CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-0 pb-0">
        <form className="space-y-2.5" onSubmit={() => {}}>
          <Input 
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            required
          />
          <Input 
            disabled={false}
            value=''
            onChange={() => {}}
            placeholder="Password"
            required
          />
          <Button className="w-full" type="submit" size={"lg"} disabled={false} variant={"default"}>
            Continue
          </Button>
        </form>
        <Separator />
          <div className="flex flex-col gap-y-2.5">
            <Button 
              variant={"outline"} 
              size={"lg"} 
              className="relative"
              disabled={false}
              onClick={() => {}}
            >
              <FcGoogle className="absolute size-5 top-3 left-2.5"/>
              Continue with Google
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Already have an account ? <span onClick={() => setState('signIn')} className="text-sky-700 hover:underline cursor-pointer">Sign in</span>
          </p>
      </CardContent>
    </Card>
  );
}