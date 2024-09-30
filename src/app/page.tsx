"use client";

import { useState } from "react";
import FeaturesComponent from "./_components/features";
import MapComponent from "./_components/mapcomponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [map, setMap] = useState<any>(null);

  return (
    <>
      <Link href={`/geoplatform/`}>
        <Button>
          Story Lookup
        </Button>
      </Link>
    </>
  ); 
}
