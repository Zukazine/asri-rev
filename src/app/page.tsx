"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [map, setMap] = useState<any>(null);

  return (
    <>
      <Link href={`/geoplatform/`}>
        <Button variant={"default"} size={"default"}>
          Story Lookup
        </Button>
      </Link>
    </>
  ); 
}
