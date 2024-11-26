"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGetGeoplatforms } from "@/features/geoplatforms/api/use-get-geoplatforms";
import { useCreateGeoplatform } from "@/features/geoplatforms/api/use-create-geoplatform";
import Image from "next/image";

export default function Home() {
  const router = useRouter()

  const { mutate: createGeoplatform } = useCreateGeoplatform()
  const { data: geoplatforms, isLoading: isGeoplatformsLoading } = useGetGeoplatforms()
  
  const geoplatformId = useMemo(() => geoplatforms?.[0]?._id, [geoplatforms])
  const isGeoExist = useMemo(() => geoplatforms?.length !== 0, [geoplatforms])

  useEffect(() => {
    if (isGeoplatformsLoading) return;

    if (!isGeoExist) {
      createGeoplatform({
        name: "default"
      }, { onSuccess(id) {
        router.replace(`geoplatform/${id}/explanatory/1`)
      },})
    } else {
      router.replace(`/geoplatform/${geoplatformId}/explanatory/1`)
    }
  }, [geoplatformId, isGeoplatformsLoading])

  return (
    <div className="h-screen grid place-items-center pb-12">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image 
          src={'/image/loading.gif'}
          width={150}
          height={150} 
          alt={"Loading icon"}
          />
        <p className="font-gilroy font-semibold font-lg">LOADING ..</p>
      </div>
    </div>
  ); 
}
