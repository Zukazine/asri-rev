"use client"

import FeaturesComponent from "@/app/_components/features";
import MapComponent from "@/app/_components/mapcomponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const StoryByIdPage = () => {
  const [map, setMap] = useState()

  return ( 
  <div className="relative">
    <Link href={"/"} className="absolute z-[13212]">
      <Button>
        Homepage
      </Button>
    </Link>
    <div className="flex m-0 p-0" >
      <MapComponent onMapInit={setMap} />
      {map && <FeaturesComponent map={map} />}{" "}
    </div>
  </div>
  );
}
 
export default StoryByIdPage;