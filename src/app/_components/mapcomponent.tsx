"use client";

import { useEffect } from "react";

interface MapComponentProps {
  onMapInit: (map: any) => void; // Callback to pass the map instance
}

const MapComponent = ({ onMapInit }: MapComponentProps) => {
  useEffect(() => {
    const maptilersdk = (window as any).maptilersdk;
    const Maptiler_TOKEN = process.env.NEXT_PUBLIC_MAPTILER_ACCESS_TOKEN;

    maptilersdk.config.apiKey = Maptiler_TOKEN;
    const map = new maptilersdk.Map({
      container: "map",
      style: maptilersdk.MapStyle.STREETS,
      center: [122.998946037506, 0.6322912120126575],
      zoom: 15.5,
      bearing: 27,
      pitch: 45,
    });

    // Pass the map instance to the parent component
    onMapInit(map);

    return () => {
      map.remove();
    };
  }, [onMapInit]);

  return (
    <div
      id="map"
      style={{ position: "fixed", width: "50%", height: "100vh" }}
    ></div>
  );
};

export default MapComponent;
