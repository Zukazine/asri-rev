"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useShowLayer } from "@/features/overlay/store/useShowLayer";
import { useLayers } from "@/features/overlay/store/use-layers";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const OverlayMap = () => {
  const [smi, ] = useLayers(0)
  const [wbi, ] = useLayers(1)
  const [vci, ] = useLayers(2)

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [show, ] = useShowLayer();

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

  console.log(getImageUrl())

  useEffect(() => {
    if (!mapContainerRef.current || !MAPBOX_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v9",
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
  }, []);

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

  return (
    <div
      id="map"
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
};
