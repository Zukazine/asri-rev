'use client'

import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';


const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const OverlayMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return 

    if (!MAPBOX_TOKEN) {
      console.error('Mapbox token is missing');
      return;
    }

    const mapboxgl = (window as any).mapboxgl;
    mapboxgl.accessToken = MAPBOX_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [122.83143527925823, 0.6778139712794039],
      zoom: 10,
    });

    // Add GeoTIFF tiles as a raster layer
    mapRef.current?.on('load', () => {
      mapRef.current?.addSource('radar', {
        type: 'image',
        url: '/raster/jatim-smi.gif',
        coordinates: [
          [110.89702182455493, -5.048531896751713],
          [116.27793037643086, -5.048531896751713],
          [110.89702182455493, -8.785523478688923],
          [116.27793037643086, -8.785523478688923]
        ]
      });
      mapRef.current?.addLayer({
        id: 'radar-layer',
        type: 'raster',
        source: 'radar',
        paint: {
          'raster-fade-duration': 0
        }
      });

    });

    // Cleanup on unmount
    // return () => {
    //   if (mapRef.current) {
    //     mapRef.current.remove();
    //   }
    // };;
  }, []);

  return (
    <div 
      id="map"
      ref={mapContainerRef} 
      style={{ height: '100%', width: '100%' }}
    />
  );

}
