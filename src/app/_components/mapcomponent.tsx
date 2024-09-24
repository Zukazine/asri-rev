"use client";

import { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const maptilersdk = (window as any).maptilersdk; // Access the global variable
    maptilersdk.config.apiKey = "hlmEZlsnczlfgiCzqlbA"; // Set your API key
    const map = new maptilersdk.Map({
      container: "map",
      style: maptilersdk.MapStyle.STREETS,
      center: [-0.15591514, 51.51830379],
      zoom: 15.5,
      bearing: 27,
      pitch: 45,
    });

    return () => {
      map.remove(); // Clean up on component unmount
    };
  }, []);

  return (
    <div
      id="map"
      style={{ position: "fixed", width: "50%", height: "100vh" }}
    ></div>
  );
};

export default MapComponent;
