"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useShowLayer } from "@/features/overlay/store/useShowLayer";
import { useLayers } from "@/features/overlay/store/use-layers";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const styles = [
  { label: "Dark", value: "mapbox://styles/mapbox/dark-v9" },
  { label: "Light", value: "mapbox://styles/mapbox/light-v10" },
  { label: "Satellite", value: "mapbox://styles/mapbox/satellite-v9" },
  { label: "Streets", value: "mapbox://styles/mapbox/streets-v11" },
];

export const OverlayMap = () => {
  const [smi] = useLayers(0);
  const [wbi] = useLayers(1);
  const [vci] = useLayers(2);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [show] = useShowLayer();
  const [selectedStyle, setSelectedStyle] = useState(styles[0].value);

  const getImageUrl = () => {
    if (smi && wbi && vci) return "/raster/all.png";
    if (smi && wbi) return "/raster/wbi-smi.png";
    if (smi && vci) return "/raster/smi-vci.png";
    if (wbi && vci) return "/raster/wbi-vci.png";
    if (smi) return "/raster/smi-jatim.png";
    if (wbi) return "/raster/wbi-jatim.png";
    if (vci) return "/raster/vci-jatim.png";
    return "";
  };

  useEffect(() => {
    if (!mapContainerRef.current || !MAPBOX_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: selectedStyle,
      center: [112.53323825007129, -7.727545200537309],
      zoom: 7.5,
    });

    mapRef.current?.on("style.load", () => {
      mapRef.current?.addSource("radar", {
        type: "image",
        url: getImageUrl(),
        coordinates: [
          [110.8818, -6.7514],
          [114.4548, -6.7514],
          [114.4548, -8.6345],
          [110.8818, -8.6345],
        ],
      });
      mapRef.current?.addLayer({
        id: "radar-layer",
        type: "raster",
        source: "radar",
        paint: {
          "raster-fade-duration": 0,
        },
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [selectedStyle]);

  useEffect(() => {
    const map = mapRef.current;
    const layerId = "radar-layer";

    if (map && map.isStyleLoaded()) {
      const source = map.getSource("radar");

      if (source) {
        map.removeLayer(layerId);
        map.removeSource("radar");
      }

      map.addSource("radar", {
        type: "image",
        url: getImageUrl(),
        coordinates: [
          [110.8818, -6.7514],
          [114.4548, -6.7514],
          [114.4548, -8.6345],
          [110.8818, -8.6345],
        ],
      });

      map.addLayer({
        id: layerId,
        type: "raster",
        source: "radar",
        paint: {
          "raster-fade-duration": 0,
        },
      });

      map.setLayoutProperty(layerId, "visibility", show ? "visible" : "none");
    }
  }, [smi, wbi, vci, show]);

  const handleStyleChange = (event: any) => {
    setSelectedStyle(event.target.value);
  };

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      {smi && wbi && vci && (
        <p
          className="text-xl backdrop-blur-sm"
          style={{
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "5px 15px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          Peta Prioritas Irigasi
        </p>
      )}
      {smi && vci && !wbi && (
        <p
          className="text-xl backdrop-blur-sm"
          style={{
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            padding: "5px 15px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          Kecocokan Tanaman Tani terhadap Tanah
        </p>
      )}

      <select
        onChange={handleStyleChange}
        value={selectedStyle}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1,
          padding: "5px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        {styles.map((style) => (
          <option key={style.value} value={style.value}>
            {style.label}
          </option>
        ))}
      </select>

      <div
        id="map"
        ref={mapContainerRef}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};
