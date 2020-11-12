import React from 'react';
import { usePosition } from 'use-position';

const Geolocation: React.FC = () => {

  const watch = true;

  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);

  return (
      <div>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        error: {error}
      </div>
    );
};

export default Geolocation;