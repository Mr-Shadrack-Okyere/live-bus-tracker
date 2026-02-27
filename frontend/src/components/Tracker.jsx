import { useEffect } from "react";
import { ref, set } from "firebase/database";
import { db } from "../services/firebase";

export default function Tracker() {

  useEffect(() => {

    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("Sending location:", lat, lng);

        set(ref(db, "bus/location"), {
          latitude: lat,
          longitude: lng,
          timestamp: Date.now()
        });
      },
      (error) => {
        console.error(error);
        alert("Location permission denied");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);

  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>📡 Tracker Running</h2>
      <p>Keep this page open.</p>
      <p>Your location is being sent.</p>
    </div>
  );
}