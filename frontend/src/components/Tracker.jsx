import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

function Tracker() {
  const [tracking, setTracking] = useState(false);
  const db = getDatabase(app);

  const startTracking = () => {
    if (!navigator.geolocation) {
      alert("GPS not supported on this device");
      return;
    }

    setTracking(true);

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // SEND TO FIREBASE
        set(ref(db, "bus/location"), {
          lat: latitude,
          lng: longitude,
          time: Date.now(),
        });

        console.log("Location sent:", latitude, longitude);
      },
      (error) => {
        console.error(error);
        alert("Failed to get location");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      }
    );
  };

  return (
    <div className="panel">
      <button className="primary" onClick={startTracking}>
        {tracking ? "Tracking Active" : "Start Tracking"}
      </button>
    </div>
  );
}

export default Tracker;