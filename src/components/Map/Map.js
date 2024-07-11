import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MyMapComponent = ({ isMarkerShown }) => {
  const mapContainerStyle = {
    height: "200px",
    width: "100%",
  };

  const center = {
    lat: 46.9919431,
    lng: 6.9289134,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
      >
        {isMarkerShown && <Marker position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
