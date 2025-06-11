'use client';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  center?: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  popupText?: string;
  height?: string;
};

const Map: React.FC<MapProps> = ({
  center = [37.7749, -122.4194], // Default: San Francisco
  zoom = 14,
  markerPosition = [37.7749, -122.4194],
  popupText = 'Pawtential Dog Shelter & Hotel<br/>123, Vale Rd, Unit 123',
  height = '300px',
}) => {
  // Fix the icon issue with Next.js
  useEffect(() => {
    // Fix Leaflet's icon issue when used with webpack
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height, width: '100%' }}
      className="rounded-lg z-0"
      scrollWheelZoom={false} // Disable scroll zoom to prevent page scrolling issues
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition}>
        <Popup dangerouslySetInnerHTML={{ __html: popupText }} />
      </Marker>
    </MapContainer>
  );
};

export default Map;
