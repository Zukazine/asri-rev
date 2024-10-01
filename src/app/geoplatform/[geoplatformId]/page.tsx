"use client"

import { TriangleAlert } from "lucide-react";
import StoryByIdPage from "./story/[storyId]/page"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GeoplatformIdPage = () => {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/geoplatform/1")
  }, [router])

  return (
    <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
      <TriangleAlert className="size-6 text-muted-foreground"/>
      <span className="text-sm text-muted-foreground">
        No Channel Found
      </span>
    </div>
  )
}

export default GeoplatformIdPage;