"use client"

import FeaturesComponent from "@/components/story/features";
import MapComponent from "@/components/story/mapcomponent";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const StoryByIdPage = () => {
  const [map, setMap] = useState()

  return ( 
  <div className="size-full relative rounded-xl overflow-hidden ml-1.5">
    <Link href={"/"} className="absolute z-[13212] bottom-2 left-2">
      <Button variant={"outline"} size={"default"}>
        To Homepage <Home className="size-4 ml-2"/>
      </Button>
    </Link>
    <div className="flex size-full flex-grow flex-shrink" >
      <MapComponent onMapInit={setMap} />
      {map && <FeaturesComponent map={map} />}
    </div>
  </div>
  );
}
 
export default StoryByIdPage;