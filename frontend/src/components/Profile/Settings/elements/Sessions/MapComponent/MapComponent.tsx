import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './map.module.css'

interface MapProps {
  lat: number;
  lng: number;
  zoom: number;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng, zoom }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null); // ссылка на контейнер
  const mapInstance = useRef<L.Map | null>(null); // ссылка на карту

  useEffect(() => {
    if (!mapInstance.current && mapContainer.current) {
      // Если карта ещё не инициализирована
      mapInstance.current = L.map(mapContainer.current).setView([lat, lng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapInstance.current);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove(); 
        mapInstance.current = null; 
      }
    };
  }, [lat, lng, zoom]);

  return <div ref={mapContainer} className={styles.map}/>;
};

export default MapComponent;
