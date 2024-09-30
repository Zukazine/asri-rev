"use client";

import { useState } from "react";
import FeaturesComponent from "./_components/features";
import MapComponent from "./_components/mapcomponent";

export default function Home() {
  const [map, setMap] = useState<any>(null);

  return (
    <div style={{ display: "flex", margin: 0, padding: 0 }}>
      <MapComponent onMapInit={setMap} />
      {map && <FeaturesComponent map={map} />}{" "}
    </div>
  ); 
}
