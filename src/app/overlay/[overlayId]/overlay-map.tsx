'use client'

import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useShowLayer } from "@/features/overlay/store/useShowLayer"

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const OverlayMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  

  console.log('Mapbox Token:', MAPBOX_TOKEN);
  const [show, setShow] = useShowLayer()


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
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [112.53323825007129, -7.727545200537309],
      zoom: 7.5,
    });
    
    mapRef.current?.on('style.load', () => {
      mapRef.current?.addSource('radar', {
        type: 'image',
        url: show ? '/raster/jatim-smi-rev.png' : '',
        coordinates: [
          [111.06910492418233, -6.693749675803972], // Top Left (flipped to Bottom Left)
          [114.28852741861942, -6.811144452435599], // Top Right (flipped to Bottom Right)
          [114.3254808725255, -8.550615623426584], // Bottom Right (flipped to Top Right)
          [110.88654501602231, -8.699109265578155], // Bottom Left (flipped to Top Left)
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

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      const layerId = 'radar-layer';

      if (mapRef.current.getLayer(layerId)) {
        if (show) {
          mapRef.current.setLayoutProperty(layerId, 'visibility', 'visible');
        } else {
          mapRef.current.setLayoutProperty(layerId, 'visibility', 'none');
        }
      }
    }
  }, [show]);


  return (
    <div 
      id="map"
      ref={mapContainerRef} 
      style={{ height: '100%', width: '100%' }}
    />
  );

}
