"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [map, setMap] = useState<any>(null);
  const { signOut } = useAuthActions()

  const handleSignOut = async () => {
    await signOut().finally(() => {
      router.push('/auth')
    })
  }

  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-y-6">
      <p className="text-3xl font-bold text-center">UNDER DEVELOPMENT <br/>BY <span className="text-teal-500">DA BOYS</span></p>
      <img
        src="/image/success.gif"
        className="size-[320px]"
      />
      <div className="flex gap-x-4">
        <Link href={`/geoplatform/`}>
          <Button variant={"ghost"} size={"default"} className="border-2 border-teal-400">
            Story Lookup
          </Button>
        </Link>
        <Button variant={"destructive"} size={"default"} onClick={handleSignOut}>
          Log out
        </Button>
      </div>
    </div>
  ); 
}
