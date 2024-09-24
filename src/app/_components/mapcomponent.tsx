"use client";

import { useEffect } from "react";

interface MapComponentProps {
  onMapInit: (map: any) => void;
}

const MapComponent = ({ onMapInit }: MapComponentProps) => {
  useEffect(() => {
    const mapboxgl = (window as any).mapboxgl;
    const Mapbox_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    mapboxgl.accessToken = Mapbox_TOKEN;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [122.998946037506, 0.6322912120126575],
      zoom: 18,
      bearing: 27,
      pitch: 45,
    });

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
