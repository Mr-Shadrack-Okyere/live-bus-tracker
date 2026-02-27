import { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 6.6736,
  lng: -1.5710,
};

function Map() {
  const [buses, setBuses] = useState({});

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const busesRef = ref(db, "buses");

    onValue(busesRef, (snapshot) => {
      const data = snapshot.val() || {};
      setBuses(data);
    });
  }, []);

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {Object.values(buses).map((bus, index) => (
        <Marker
          key={index}
          position={{
            lat: bus.latitude,
            lng: bus.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
}

export default Map;