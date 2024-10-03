"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { Construction, Rocket } from "lucide-react";
import { useGetGeoplatforms } from "@/features/geoplatforms/api/use-get-geoplatforms";
import { useCreateGeoplatform } from "@/features/geoplatforms/api/use-create-geoplatform";

export default function Home() {
  const router = useRouter()
  const [map, setMap] = useState<any>(null);
  const { signOut } = useAuthActions()

  const { mutate: createGeoplatform } = useCreateGeoplatform()
  const { data: geoplatforms, isLoading: isGeoplatformsLoading } = useGetGeoplatforms()
  
  const geoplatformId = useMemo(() => geoplatforms?.[0]?._id, [geoplatforms])
  const isGeoExist = useMemo(() => geoplatforms?.length !== 0, [geoplatforms])

  const handleToGeoplatform = () => {
    if (isGeoplatformsLoading) return

    if (!isGeoExist) {
      createGeoplatform({
        name: "default"
      }, { onSuccess(id) {
        router.push(`geoplatform/${id}`)
      },})
    } else {
      router.replace(`/geoplatform/${geoplatformId}`)
    }
  }

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
          <Button 
            variant={"ghost"} 
            size={"default"} 
            className="border-2 border-teal-400"
            onClick={handleToGeoplatform}
          >
            To Construction Site <Construction className="size-4 ml-2"/>
          </Button>
        <Button variant={"destructive"} size={"default"} onClick={handleSignOut}>
          Log out
        </Button>
      </div>
    </div>
  ); 
}
