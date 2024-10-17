"use client";

import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

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
      center: [122.83143527925823, 0.6778139712794039],
      zoom: 9,
      bearing: 27,
      pitch: 45,
    });

    onMapInit(map);

    return () => {
      map.remove();
    };
  }, [onMapInit]);

  return <div id="map" className="h-full w-1/2 flex-grow flex-shrink" />;
};

export default MapComponent;
