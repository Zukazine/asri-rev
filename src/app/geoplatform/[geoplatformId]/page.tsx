"use client"

import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

const GeoplatformIdPage = () => {
  return (
    <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
      <TriangleAlert className="size-6 text-muted-foreground"/>
      <span className="text-sm text-muted-foreground">
        No Channel Found
      </span>
      <Link href={"@/story/1"}>
        <Button >
          To storypage
        </Button>
      </Link>
    </div>
  )
}

export default GeoplatformIdPage;