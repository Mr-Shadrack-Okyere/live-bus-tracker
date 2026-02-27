import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { listenToBusLocation } from "../services/firebase";

const center = { lat: 6.6745, lng: -1.5716 };

function Map() {
  const [busPosition, setBusPosition] = useState(center);

  useEffect(() => {
    listenToBusLocation((location) => {
      setBusPosition({
        lat: location.lat,
        lng: location.lng
      });
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={busPosition}
          zoom={15}
        >
          <Marker position={busPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;