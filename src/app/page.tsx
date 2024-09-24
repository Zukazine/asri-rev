"use client"; // Ensure this is a client component

import { useState } from "react";
import FeaturesComponent from "./_components/features";
import MapComponent from "./_components/mapcomponent";

export default function Home() {
  const [map, setMap] = useState<any>(null); // Initialize map state

  return (
    <div style={{ display: "flex", margin: 0, padding: 0 }}>
      <MapComponent onMapInit={setMap} /> {/* Pass setMap to MapComponent */}
      {map && <FeaturesComponent map={map} />}{" "}
      {/* Only render FeaturesComponent if map is initialized */}
    </div>
  );
}
