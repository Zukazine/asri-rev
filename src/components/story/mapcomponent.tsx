// "use client";

// import { useEffect, useRef } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl, { Map } from "mapbox-gl";

// interface MapComponentProps {
//   onMapInit: (map: Map) => void;
// }

// const MapComponent = ({ onMapInit }: MapComponentProps) => {
//   const mapRef = useRef<Map | null>(null);

//   useEffect(() => {
//     const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

//     if (!mapboxToken) {
//       console.error("Mapbox access token is not defined");
//       return;
//     }

//     mapboxgl.accessToken = mapboxToken;

//     // Initialize map with Google Hybrid style as default
//     mapRef.current = new mapboxgl.Map({
//       container: "map",
//       style: {
//         version: 8,
//         sources: {
//           "google-hybrid": {
//             type: "raster",
//             tiles: ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
//             tileSize: 256,
//           },
//         },
//         layers: [
//           {
//             id: "google-hybrid",
//             type: "raster",
//             source: "google-hybrid",
//             minzoom: 0,
//             maxzoom: 22,
//           },
//         ],
//       },
//       center: [122.83143527925823, 0.6778139712794039],
//       zoom: 9,
//       bearing: 27,
//       pitch: 45,
//     });

//     onMapInit(mapRef.current);

//     return () => {
//       mapRef.current?.remove();
//     };
//   }, [onMapInit]);

//   return <div id="map" className="h-full w-1/2 flex-grow flex-shrink" />;
// };

// export default MapComponent;


"use client";

import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map } from "mapbox-gl";

interface MapComponentProps {
  onMapInit: (map: Map) => void;
}

const MapComponent = ({ onMapInit }: MapComponentProps) => {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    
    if (!mapboxToken) {
      console.error("Mapbox access token is not defined");
      return;
    }
    
    mapboxgl.accessToken = mapboxToken;

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
