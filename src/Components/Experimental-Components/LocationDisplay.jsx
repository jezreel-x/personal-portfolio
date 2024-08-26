import React from 'react';
import { useLocation } from 'react-router-dom';

const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Current Location</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <pre>{JSON.stringify(location.state, null, 2)}</pre>
    </div>
  );
};

export default LocationDisplay;
