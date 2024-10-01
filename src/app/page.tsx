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
    <>
      <Link href={`/geoplatform/`}>
        <Button variant={"default"} size={"default"}>
          Story Lookup
        </Button>
      </Link>
      <Button variant={"destructive"} size={"default"} onClick={handleSignOut}>
        Log out
      </Button>
    </>
  ); 
}
