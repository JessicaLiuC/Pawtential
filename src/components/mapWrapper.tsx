'use client';
import dynamic from 'next/dynamic';

// Dynamically import the Map component with no SSR
const MapWithNoSSR = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-gray-100 rounded-lg h-[300px]">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

type MapWrapperProps = {
  center?: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  popupText?: string;
  height?: string;
};

const MapWrapper: React.FC<MapWrapperProps> = (props) => {
  return <MapWithNoSSR {...props} />;
};

export default MapWrapper;
