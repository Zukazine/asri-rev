"use client"

import { TriangleAlert } from "lucide-react";

const GeoplatformIdPage = () => {
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